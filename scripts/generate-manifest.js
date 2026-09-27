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

// Generate the manifest
function generateManifest() {
  console.log('Generating site directory manifest...');
  const htmlFiles = getHtmlFiles(rootDir);
  const manifest = [];

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

    manifest.push({
      title: title,
      url: relativeUrl,
      path: relativeToRoot,
      folder: folder,
      folderTitle: folderTitle
    });
  }

  // Sort logically within folders: main showcase/index first, then other pages alphabetically
  manifest.sort((a, b) => {
    // Keep 'main' folder first or 'expense-insights'
    if (a.folder !== b.folder) {
      if (a.folder === 'expense-insights') return -1;
      if (b.folder === 'expense-insights') return 1;
      if (a.folder === 'main') return 1;
      if (b.folder === 'main') return -1;
      return a.folderTitle.localeCompare(b.folderTitle);
    }
    // Within same folder
    if (a.path.endsWith('index.html') && !b.path.endsWith('index.html')) return -1;
    if (!a.path.endsWith('index.html') && b.path.endsWith('index.html')) return 1;
    return a.title.localeCompare(b.title);
  });

  const outputDir = path.join(rootDir, 'site-directory');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const manifestPath = path.join(outputDir, 'manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n', 'utf-8');
  console.log(`Manifest created at ${manifestPath} with ${manifest.length} pages.`);

  // Also write to dist/site-directory/manifest.json if dist directory exists
  const distSiteDir = path.join(rootDir, 'dist', 'site-directory');
  if (fs.existsSync(path.join(rootDir, 'dist'))) {
    if (!fs.existsSync(distSiteDir)) {
      fs.mkdirSync(distSiteDir, { recursive: true });
    }
    fs.writeFileSync(path.join(distSiteDir, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n', 'utf-8');
    console.log(`Synced manifest to dist/site-directory/manifest.json`);
  }

  return manifest;
}

generateManifest();
