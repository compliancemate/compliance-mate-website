# Compliance Mate — React + JavaScript

A responsive consultancy website using React 19, Vite, JavaScript/JSX and Tailwind CSS v4. The original CBG articles, website content, original logo artwork, contact details and consultation form are retained. No TypeScript or custom component stylesheet is required.

## Run locally (Windows PowerShell / VS Code)

Use Node.js 22.12+ (or 20.19+). Extract the ZIP, open the `compliance-mate-website` directory in VS Code, and run:

```sh
npm ci
npm run dev
```

Open http://localhost:8080/ . If port 8080 is in use, close the other dev server first. The ZIP intentionally excludes `node_modules`, `.git`, `dist` and local environment files. Keep your existing Git repository and back up/commit your changes before replacing files. If copying into an existing project, delete the previous `src` directory and `tsconfig*.json`, `vite.config.ts` before copying the new `src` and JS config; don't leave duplicate TSX files around.

## Structure

```
src/
  App.jsx                   # Route registry and page metadata
  main.jsx                  # React entry
  entry-server.jsx          # Static SEO rendering entry
  index.css                 # Tailwind import, theme tokens and animation utilities only
  assets/Logo.png            # Brand logo, whitespace trimmed
  components/               # Navbar, Footer, consultation form, reusable service card
    MotionHero.jsx          # Rotating headlines and feature cards
    IntroLoader.jsx         # Short branded first-visit introduction
  data/
    blogData.js             # Published article catalogue (one source of truth)
    blogDrafts.js           # Unpublished short content from original project
  pages/
    Home.jsx
    About.jsx
    Industries.jsx
    Contact.jsx
    blogs/
      BlogIndex.jsx         # Shared searchable blog listing
      biogas/               # Category page and all four existing articles
      licensing-certification/
        index.jsx           # Category page
        ArticleTemplate.jsx # Unpublished starter file
    services/
      Biogas.jsx
      LicensingCertification.jsx
      EprCompliance.jsx
      DprFeasibility.jsx
      RecyclingConsultancy.jsx
      BankLoanAssistance.jsx
      ServicePlaceholder.jsx
scripts/prerender.mjs       # Static pages, sitemap.xml and robots.txt
public/favicon.png
```

## Motion and homepage customization

The homepage uses a typography-led layout, a rotating service headline and a matching feature card. Edit the `slides` array and `ROTATION_MS` (milliseconds) inside `src/components/MotionHero.jsx` to change the text, services or speed. The four progress segments select a feature; the pause button stops automatic rotation. Rotation also pauses when keyboard focus is within the feature card or its controls, and stops for reduced-motion preferences.

`src/components/IntroLoader.jsx` shows a short 1.05-second branded introduction once per browser-tab session on the homepage. It is not a network loading indicator and is skipped for reduced motion and deep links. Tailwind theme animation tokens live in `src/index.css`. No new packages, handwritten SVG illustrations or component stylesheets are used. Lucide and React Icons render their standard library icons as SVG; this is intentional. Existing page content, hash links, service placeholders and SEO configuration remain intact.

## Blog navigation

The Blogs menu contains only All Blogs, Biogas and License & Certification. Both categories open their own listing page, without nested dropdowns. Clean links (`/blogs/biogas`, `/blogs/licensing-certification`) are primary for SEO. Existing links such as `/#/blogs/compressed-biogas-plant-bank-loan-assistance` and `/#/services/biogas` continue to work.

To publish a future licensing article:
1. Copy `src/pages/blogs/licensing-certification/ArticleTemplate.jsx` to a new descriptive filename, e.g. `consent-to-establish.jsx`.
2. Paste your JSX content in the exported component.
3. Import the component in `src/data/blogData.js` and append an object with `slug`, `category: 'licensing-certification'`, `title`, `description`, `readTime`, `icon`, and `Component: YourComponent` to `blogs`.
4. The category listing and article route are created automatically. Rebuild for SEO output.

Keep unpublished articles out of the catalogue until ready. Old short draft content remains in `blogDrafts.js` and is not automatically published.

## Add service content

All six unfinished service URLs are already routed. Open the corresponding JSX file in `src/pages/services/` and replace `<ServicePlaceholder ... />` with your own complete JSX content. Preserve the default export. You do not need to edit navigation to make the page visible. When content is ready for publication, change its `draft: true` to `draft: false` in the corresponding route inside `src/App.jsx` and add a meaningful description for search engines.

## Google Sheets

Copy `.env.example` to `.env.local` and set `VITE_GOOGLE_SCRIPT_URL` to your deployed Google Apps Script Web App URL ending in `/exec`. A spreadsheet sharing URL by itself is not an endpoint. Restart the dev server after changing the env file. The form sends name, phone, email, message, service, source and timestamp; it does not claim successful receipt for an opaque `no-cors` response. No enquiries are collected until the endpoint is configured. Test a submission against your sheet before going live. Social URLs can be set in `src/components/Footer.jsx` (unconfigured links remain hidden).

## Production and SEO

Set `VITE_SITE_URL` in `.env.local` to your actual public website origin. Default is `https://compliancemate.co.in` (inferred from the supplied company email; confirm before launch).

```sh
npm run build
npm run preview
```

The build compiles the SPA and then generates prerendered HTML files for every configured route, including readable content without JavaScript; page titles/descriptions, Open Graph tags, canonical URLs, sitemap and robots.txt. Unfinished service pages and empty blog categories are marked `noindex, follow` and excluded from the sitemap until ready. Publish the contents of `dist` to the root of your public domain (not to a subdirectory unless you adapt the base paths). Ensure your hosting serves directory `index.html` files and proper 404 responses. Submit the sitemap in Google Search Console after deployment. SEO changes improve crawlability, not a guarantee of ranking. Article policy and statistics are preserved from your supplied source and should be reviewed for current accuracy before launch.

## Validation / known limitations

- JS/JSX syntax checked across all source modules.
- All 17 configured pages rendered through React's server renderer; Tailwind v4 utilities compiled from the complete source.
- Desktop and mobile browser preview tested in a local harness, including category rendering, blog search, form's disconnected state, and logo sizing. Browser location was simulated in the harness because direct navigation is blocked by this environment; production navigation/deployment should also be tested on your machine.
- The original archive included native Windows Vite/Rolldown/Lightning CSS modules. Linux native modules could not be downloaded in the current environment; the standard `npm run build` could not be executed end-to-end here. Install clean dependencies on your machine and run the commands above.
- Two telephone numbers exist in the supplied source: +91 9773870268 (home/contact and some articles) and +91 8796711794 (footer, WhatsApp and form). Both are retained; verify them before publication.


## Completed licensing service pages (November 2026)

All 12 requested categories now have independent React JSX files under `src/pages/services/licensing/`, with shared Tailwind layout, sticky consultation form, FAQs, documentation lists and official regulatory resource links. Edit the `content` object in each individual file to customize it. The category registry is `src/data/licenseData.js`; routes and indexability are defined in `src/data/licenseRoutes.js`. The production prerender script automatically includes the 12 completed pages in the sitemap. The previous general EPR route is retained as a noindex compatibility route; links now point to the new EPR page. The seven provisional EPR subcategory placeholders have been removed; they were never finished pages.

### Content provenance and review
All 12 original EPR Nexuss URLs were opened but returned no readable article text or a verification screen. The page content is original explanatory copy informed by official government websites, not a verbatim migration. Each individual JSX file records its requested source URL and links to relevant official resources. The "hazardous-waste-impact-authorization" URL was interpreted as Hazardous Waste Import Authorization based on the prior scope; confirm that interpretation. Corrected typographical errors in CRS, LMPC and WPC titles and URLs. No guaranteed approvals, timelines or fees are advertised. Check the service offering and current regulatory requirements before public deployment. The form now includes the particular licensing service in the existing submission payload. Google Sheets requires a configured `VITE_GOOGLE_SCRIPT_URL` as before.

Run `npm ci`, `npm run dev`, then `npm run build` on your computer. Do not overwrite local uncommitted changes. See official references on each service page.
