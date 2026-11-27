# Product Integration, Routing & Deployment Guide (`policies`)

## 1. Routes Exposed by `policies.ascentracoresolutions.com`

### Existing Preserved Routes
- `/` — Compliance Hub Home (Policy Directory + Product-Specific Policies + Permission Tester)
- `/privacy` — AscentraCore General Privacy Policy (links to product-specific policies)
- `/terms` — Terms of Service
- `/permissions` — Device Permissions Policy
- `/data-collection` — Data Collection Policy
- `/cookies` — Cookie Policy (links to SkilTrix ad/cookie disclosures & Privacy Settings)
- `/refund` — Refund Policy
- `/disclaimer` — Disclaimer
- `/accessibility` — Accessibility Statement
- `/child-safety` — Child Safety & COPPA Policy
- `/auth/callback` — AscentraCore OAuth/PKCE Callback

### New Centralized Product & Privacy Settings Routes
- `/:productSlug/privacy-policy` — Product-specific Privacy Policy & Advertising Disclosures
  - `/skiltrix/privacy-policy`
  - `/krishi/privacy-policy`
  - `/asai/privacy-policy`
- `/privacy-settings` — Centralized Privacy Settings & Rights Hub
- `/:productSlug/privacy-settings` — Product-scoped Privacy Settings & Rights Hub (e.g., `/skiltrix/privacy-settings`)

*(Note: `policies` is a static React SPA; there are no backend REST endpoints inside `policies`. All product policy metadata is typed and version-controlled in `src/data/productPolicies.ts`.)*

---

## 2. Registering a New AscentraCore Product

Open `policies/src/data/productPolicies.ts` and append a `ProductPolicyConfig` object to `PRODUCT_POLICIES`:
1. Set a URL-safe `slug` (e.g., `'newapp'`).
2. Fill in `name`, `websiteDomain`, optional `packageName`, `dataCollected`, `advertising` (only include providers actually integrated!), `dataSharing`, `consentManagement`, `rights`, and `dataDeletionAndWithdrawal`.
3. Immediately available without extra routing changes:
   - `https://policies.ascentracoresolutions.com/<slug>/privacy-policy`
   - `https://policies.ascentracoresolutions.com/<slug>/privacy-settings`

---

## 3. Integrating Individual Products

### SkilTrix Website (`skiltrix`)
- Point Privacy Policy links to `https://policies.ascentracoresolutions.com/skiltrix/privacy-policy`.
- Point Cookie / Advertising Disclosures & Privacy Settings links to `https://policies.ascentracoresolutions.com/skiltrix/privacy-settings` (and wire your local Ezoic CMP reopen trigger in the footer).

### SkilTrix Android
- Set Google Play Console Privacy Policy URL to `https://policies.ascentracoresolutions.com/skiltrix/privacy-policy`.
- In App Settings -> Legal / Privacy:
  - Link **Privacy Policy** -> `https://policies.ascentracoresolutions.com/skiltrix/privacy-policy`
  - Link **Privacy & Data Rights** -> `https://policies.ascentracoresolutions.com/skiltrix/privacy-settings`
  - Wire **Ad Consent Preferences** -> local Google UMP `showPrivacyOptionsForm(...)` when required.

---

## 4. Testing & Deployment

From `policies/`:
```bash
npm test      # Runs Vitest (jsdom) test suite
npm run build # Runs TypeScript check (tsc -b) + Vite production build into dist/
```
Ensure your web server / CDN (Nginx, Cloudflare, etc.) serves `dist/index.html` as the SPA fallback for client-side routes like `/skiltrix/privacy-policy` and `/privacy-settings`.
