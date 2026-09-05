# Karmakar Developers — Applications & Legal Directory

Official showcase and legal directory for applications published by **Karmakar Developers**, featuring **Expense Insights** (`com.karmakardevelopers.expenseinsights`).

---

## 🏛️ Architectural Overview

This project is architected as an **ultra-lightweight, zero-dependency, static-first web ecosystem**. It serves as both the public product showcase and the official compliance & legal documentation required by Google Play Console policies, privacy regulators, and end-users.

### Architecture Highlights:
- **Pure Static Delivery**: 100% standards-compliant semantic HTML5, CSS3, and modern vanilla JavaScript. No complex client-side build pipeline or heavy frameworks are required for production hosting.
- **Zero-Latency & High Reliability**: All assets, images, stylesheets, and pages are directly servable via standard static HTTP servers or edge CDN networks (e.g., GitHub Pages, Netlify, Cloudflare Pages).
- **App-Specific Legal Scoping**: There are **no generic or common privacy policies or terms of service**. Legal terms, data safety disclosures, and permission declarations are strictly individualized per application. Consequently, `index.html` functions purely as the developer applications directory and does not host or link to any generic privacy policy or terms of service. Each application's legal documents are accessed directly within its dedicated showcase page (`expense-insights-app.html`).
- **Universal Google Play & Compliance Readiness**:
  - Distinct canonical URLs for legal disclosures (`expense-insights-privacy.html` and `expense-insights-terms.html` for Expense Insights).
  - Explicit disclosures of required Android runtime permissions (`RECORD_AUDIO`, `POST_NOTIFICATIONS`, `USE_BIOMETRIC`, `INTERNET`, `SCHEDULE_EXACT_ALARM`, `CAMERA`).
  - Standardized Data Safety table aligned with Google Play Data Safety declaration standards.
  - Dedicated Account & Data Deletion instructions and verified support contact points.
- **Unified Design System**: Centralized design tokens in `css/style.css` driving consistent visual identity (Google Material 3 / Modern Clean aesthetics, responsive layouts, print media stylesheets, typography pairing with Hanken Grotesk and Inter).
- **Embedded Security & Privacy**: No tracking pixels, zero analytics scripts, no third-party cookies, and strict absence of any embedded secret keys or database credentials.

---

## 📄 HTML Files & Organization

The site is organized hierarchically with clear cross-linking, back-navigation flows, and responsive UI components:

```
                  ┌────────────────────────────────────────┐
                  │               index.html               │
                  │     (Developer Portal / All Apps)      │
                  └───────────────────┬────────────────────┘
                                      │
                                      ▼
                  ┌────────────────────────────────────────┐
                  │       expense-insights-app.html        │
                  │    (Expense Insights App Showcase)     │
                  └───────┬──────────────┬───────────────┬─┘
                          │              │               │
     ┌────────────────────▼─────┐ ┌──────▼─────────────┐ ┌▼─────────────────────────┐
     │expense-insights-privacy  │ │expense-insights-   │ │expense-insights-        │
     │         .html            │ │   terms.html       │ │ account-deletion.html   │
     │     (Privacy Policy)     │ │(Terms of Service)  │ │ (Google Form Backend)   │
     └──────────────────────────┘ └────────────────────┘ └─────────────────────────┘
```

### Detailed Breakdown of Every HTML File:

| File | Primary Role & Purpose | Key Components & Contents | Navigation & Links |
| :--- | :--- | :--- | :--- |
| **`index.html`** | **Developer Portal & Applications Hub**<br>The primary entry point for Karmakar Developers showcasing all current and upcoming software releases. | • Sticky brand header with official Karmakar Developers logo.<br>• Verified Developer Portfolio hero card.<br>• App Directory grid highlighting **Expense Insights** with Play Store badge, version tag, and live feature highlights.<br>• Platform security & zero-ad guarantees.<br>• Directory footer with developer contact link.<br>*(Note: Contains no generic privacy or terms links; legal policies are app-specific)* | • Link to `expense-insights-app.html` (View Showcase)<br>• Email mailto link (`developers.karmakar@gmail.com`) |
| **`expense-insights-app.html`** | **Application Showcase & Feature Hub**<br>Dedicated landing page and visual tour of Expense Insights for potential users and testers. | • Product branding with back-to-home directory link.<br>• Header & hero quick-action links to Privacy Policy, Terms of Service, and Account Deletion.<br>• High-definition screenshot gallery (8 curated showcase features: Smart Analytics, Ad-Free Design, Unlimited Accounts, Theme Engine, Voice Input, Data Import, Icon Styles, Premium Features).<br>• Core capabilities & privacy-first principles overview.<br>• Quick-access legal footer. | • Return navigation to `index.html`<br>• Links to `expense-insights-privacy.html`, `expense-insights-terms.html`, and `expense-insights-account-deletion.html` |
| **`expense-insights-privacy.html`** | **Official Google Play Privacy Policy**<br>Legally compliant data privacy declaration satisfying Google Play Developer Distribution Agreement and global privacy laws (GDPR/CCPA). | • Multi-tier return navigation: Header back button, logo link, and in-document banner button leading back to `expense-insights-app.html`.<br>• Metadata overview card with Package ID (`com.karmakardevelopers.expenseinsights`), Effective Date, and compliance version.<br>• Core Privacy Principles (100% Local Storage, No Silent Telemetry, Zero Third-Party Trackers).<br>• Exhaustive Android Permissions table with specific functional justifications.<br>• Data Safety disclosure table.<br>• Account & data deletion procedures with direct link to online request form.<br>• Direct developer contact details with verified logo.<br>• Print-ready CSS for generating compliance PDF copies. | • Back buttons returning to `expense-insights-app.html`<br>• Cross-link to `expense-insights-terms.html` & `expense-insights-account-deletion.html`<br>• Root link to `index.html` |
| **`expense-insights-terms.html`** | **Official Terms of Service**<br>Standard end-user terms of service outlining agreement, permitted usage, intellectual property, disclaimers, and liability. | • Header and in-document return buttons to navigate back to `expense-insights-app.html`.<br>• Document header with Effective Date and Package identifier.<br>• Acceptance of terms, license grant, user responsibilities, and financial disclaimer.<br>• Intellectual property protection terms for Karmakar Developers.<br>• Developer contact card with official brand logo.<br>• Formatted with print stylesheet support. | • Back buttons returning to `expense-insights-app.html`<br>• Cross-link to `expense-insights-privacy.html` & `expense-insights-account-deletion.html`<br>• Root link to `index.html` |
| **`expense-insights-account-deletion.html`** | **Account & Data Deletion Portal (Google Play Compliant)**<br>Static, styled HTML form that transparently submits deletion requests to the Google Form backend (`https://forms.gle/JgHo6AVp9nMwT4i28`). | • App-branded form matching the Karmakar Developers design system.<br>• In-app self-service instructions for instant local database resets.<br>• Form fields for target account email, deletion scope (specific app vs. all apps), application selector, deletion reason, and legal confirmation checkbox.<br>• Dual submission pipeline: hidden iframe capture plus non-blocking fetch dispatch.<br>• Polished inline success confirmation card with SLA timeline (30 days) and reference summary.<br>• Direct fallback link to Google Form. | • Back navigation to `expense-insights-app.html`<br>• Cross-links to `expense-insights-privacy.html` and `index.html`<br>• External link to Google Form |

---

## 📁 Repository Structure

```
.
├── index.html                        # Developer Portal / Applications Directory
├── expense-insights-app.html         # Expense Insights Application Showcase
├── expense-insights-privacy.html     # Expense Insights Privacy Policy (Play Console compliant)
├── expense-insights-terms.html       # Expense Insights Terms of Service
├── expense-insights-account-deletion.html # Account & Data Deletion form (Google Form backend)
├── css/
│   └── style.css                     # Centralized Design System stylesheet
├── images/
│   ├── karmakar-developers-logo.png  # Official Karmakar Developers brand logo (1254x1254)
│   └── expense-insights/             # Application screenshots & visual assets
│       ├── ad_free_design_hd.png
│       ├── import_data_hd.png
│       ├── multiple_icon_styles_hd.png
│       ├── multiple_themes_hd.png
│       ├── premium_features_hd.png
│       ├── smart_analytics_hd.png
│       ├── unlimited_accounts_hd.png
│       └── voice_assistant_hd.png
├── README.md                         # Architecture, structure & deployment documentation
└── metadata.json                     # Application platform metadata
```

---

## 🎨 Design System & Styling Architecture

The shared stylesheet in `css/style.css` standardizes the visual appearance across all HTML documents:

- **CSS Variables & Theming**:
  - `--color-brand`: `#00450d` (Deep forest green representing financial clarity and trust)
  - `--color-brand-light`: `#006d19`
  - `--color-brand-surface`: `#eef5ee`
  - `--color-neutral-bg`: `#f8faf8`
  - `--color-text-primary`: `#191c1b`
  - `--color-text-secondary`: `#404943`
- **Typography**: Google Fonts pairing using **Hanken Grotesk** (display headings) and **Inter** (high-legibility body content).
- **Print Optimization**: Embedded `@media print` rules hide navigation bars, print buttons, and back banners, rendering clean, page-break-optimized legal documentation for offline filing or PDF export.

---

## 🚀 Publishing to GitHub Pages

This site is built with pure static assets with zero build steps required for GitHub Pages:

1. Push this repository to your GitHub repository (e.g., `https://github.com/<username>/<repository-name>`).
2. Navigate to **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, select **Deploy from a branch**.
4. Under **Branch**, select `main` (or `master`) and directory `/(root)`.
5. Click **Save**. Your site will be live at:
   - **Homepage**: `https://<username>.github.io/<repository-name>/`
   - **Expense Insights App**: `https://<username>.github.io/<repository-name>/expense-insights-app.html`
   - **Privacy Policy URL**: `https://<username>.github.io/<repository-name>/expense-insights-privacy.html`
   - **Terms of Service URL**: `https://<username>.github.io/<repository-name>/expense-insights-terms.html`
   - **Account Deletion URL**: `https://<username>.github.io/<repository-name>/expense-insights-account-deletion.html`

*Note: The Privacy Policy and Account Deletion URLs above can be pasted directly into the **Google Play Console** under **Policy & Programs** > **App Content** > **Privacy Policy** and **Account Deletion URL**.*
