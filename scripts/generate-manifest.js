import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Helper to decode basic HTML entities in title
function decodeHtmlEntities(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–');
}

// Recursively find all HTML files
function getHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === 'dist' || file === '.git' || file === '.cache') {
      continue;
    }
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getHtmlFiles(fullPath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

// Extract title from HTML file content
function extractTitle(htmlContent, relativePath) {
  const match = htmlContent.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (match && match[1]) {
    return decodeHtmlEntities(match[1].trim());
  }
  // Fallback: derive friendly title from path
  const base = path.basename(relativePath, '.html');
  return base
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

// Determine folder key and friendly title
function getFolderInfo(relativePath) {
  const parts = relativePath.split('/');
  if (parts.length > 1) {
    const slug = parts[0];
    if (slug === 'expense-insights') {
      return { folder: 'expense-insights', folderTitle: 'Expense Insights' };
    }
    if (slug === 'site-directory') {
      return { folder: 'main', folderTitle: 'Main Portal & Directory' };
    }
    const friendly = slug.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    return { folder: slug, folderTitle: friendly };
  }
  return { folder: 'main', folderTitle: 'Main Portal & Directory' };
}

// Default external configuration to maintain in manifest.json header
const DEFAULT_CONFIG = {
  githubBaseUrl: 'https://karmakar-developers.github.io/Apps/',
  cloudflareBaseUrl: 'https://admin-portal.karmakar-developers.workers.dev',
  googleFormAccountDeletionUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSdQEqQ4nRQ7tXcyDhqXxk4dpAlyxqXTme0UOPmFvxti0QCQxw/viewform?pli=1',
  externalLinks: [
    {
      title: 'Karmakar Developers Home Page',
      path: '/',
      type: 'cloudflare',
      folder: 'external-links',
      folderTitle: 'External Links',
      isExternal: true
    },
    {
      title: 'Admin Portal',
      path: '/admin',
      type: 'cloudflare',
      folder: 'external-links',
      folderTitle: 'External Links',
      isExternal: true
    },
    {
      title: 'Android User Data Center',
      path: '/data-center',
      type: 'cloudflare',
      folder: 'external-links',
      folderTitle: 'External Links',
      isExternal: true
    },
    {
      title: 'Expense Insights Account Deletion Google Form',
      type: 'google-form',
      folder: 'external-links',
      folderTitle: 'External Links',
      isExternal: true
    }
  ]
};

// Generate the manifest
function generateManifest() {
  console.log('Generating site directory manifest...');
  const outputDir = path.join(rootDir, 'site-directory');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  const manifestPath = path.join(outputDir, 'manifest.json');

  // Read existing manifest if present to preserve user edits to baseUrl and externalLinks
  let existingData = {};
  if (fs.existsSync(manifestPath)) {
    try {
      const raw = fs.readFileSync(manifestPath, 'utf-8');
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
        existingData = parsed;
      }
    } catch (e) {
      console.warn('Could not parse existing manifest, using defaults');
    }
  }

  const githubBaseUrl = existingData.githubBaseUrl || DEFAULT_CONFIG.githubBaseUrl;
  const cloudflareBaseUrl = existingData.cloudflareBaseUrl || DEFAULT_CONFIG.cloudflareBaseUrl;
  const googleFormAccountDeletionUrl =
    existingData.googleFormAccountDeletionUrl || DEFAULT_CONFIG.googleFormAccountDeletionUrl;
  const externalLinks = existingData.externalLinks || DEFAULT_CONFIG.externalLinks;

  const htmlFiles = getHtmlFiles(rootDir);
  const pages = [];

  for (const filePath of htmlFiles) {
    const relativeToRoot = path.relative(rootDir, filePath).split(path.sep).join('/');
    const content = fs.readFileSync(filePath, 'utf-8');
    const title = extractTitle(content, relativeToRoot);
    const { folder, folderTitle } = getFolderInfo(relativeToRoot);

    // Compute relative link from site-directory/index.html
    const siteDir = path.join(rootDir, 'site-directory');
    let relativeUrl = path.relative(siteDir, filePath).split(path.sep).join('/');
    if (!relativeUrl.startsWith('.') && !relativeUrl.startsWith('/')) {
      relativeUrl = './' + relativeUrl;
    }

    pages.push({
      title: title,
      url: relativeUrl,
      path: relativeToRoot,
      folder: folder,
      folderTitle: folderTitle
    });
  }

  // Sort logically within folders: main showcase/index first, then other pages alphabetically
  pages.sort((a, b) => {
    // Keep 'expense-insights' first, then 'main'
    if (a.folder !== b.folder) {
      if (a.folder === 'expense-insights') return -1;
      if (b.folder === 'expense-insights') return 1;
      if (a.folder === 'main') return -1;
      if (b.folder === 'main') return 1;
      return a.folderTitle.localeCompare(b.folderTitle);
    }
    // Within same folder
    if (a.path.endsWith('index.html') && !b.path.endsWith('index.html')) return -1;
    if (!a.path.endsWith('index.html') && b.path.endsWith('index.html')) return 1;
    return a.title.localeCompare(b.title);
  });

  const manifestData = {
    githubBaseUrl,
    cloudflareBaseUrl,
    googleFormAccountDeletionUrl,
    pages,
    externalLinks
  };

  fs.writeFileSync(manifestPath, JSON.stringify(manifestData, null, 2) + '\n', 'utf-8');
  console.log(
    `Manifest created at ${manifestPath} with ${pages.length} pages and ${externalLinks.length} external links.`
  );

  // Also write to dist/site-directory/manifest.json if dist directory exists
  const distSiteDir = path.join(rootDir, 'dist', 'site-directory');
  if (fs.existsSync(path.join(rootDir, 'dist'))) {
    if (!fs.existsSync(distSiteDir)) {
      fs.mkdirSync(distSiteDir, { recursive: true });
    }
    fs.writeFileSync(path.join(distSiteDir, 'manifest.json'), JSON.stringify(manifestData, null, 2) + '\n', 'utf-8');
    console.log(`Synced manifest to dist/site-directory/manifest.json`);
  }

  return manifestData;
}

generateManifest();
