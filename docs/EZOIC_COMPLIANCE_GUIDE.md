# Ezoic Compliance & Disapproval Resolution Guide

This guide addresses the three disapproval reasons cited for AscentraCore Solutions / SkilTrix (`skiltrix.ascentracoresolutions.com`):

1. **Incomplete Privacy Policy Advertising Disclosures** — **Implemented in `policies`**
2. **Google Play Data Safety Declarations** — **Documented in [`GOOGLE_PLAY_DATA_SAFETY_GUIDE.md`](../GOOGLE_PLAY_DATA_SAFETY_GUIDE.md)**
3. **GDPR / CCPA Consent Management (CMP)** — **Architecture & integration documented; external Ezoic dashboard setup required**

---

## 1. What Is Already Implemented in `policies.ascentracoresolutions.com`

- Dedicated SkilTrix Privacy Policy route:
  `https://policies.ascentracoresolutions.com/skiltrix/privacy-policy`
- Reusable **Advertising Disclosure** section (`AdvertisingDisclosureSection.tsx`) disclosing:
  - Verified Google AdSense integration (`ca-pub-8687126461256058`) and `ads.txt` authorization
  - Ezoic monetization/CMP onboarding status (clearly marked pending external setup until approved)
  - Cookies, IP address, and advertising identifiers collected
  - Personalized vs. non-personalized advertising behavior
  - GDPR (EEA/UK) and US state (CCPA/CPRA) privacy rights
  - Withdrawal & opt-out links (`https://www.google.com/settings/ads`, DAA, Your Online Choices)
- Centralized Privacy Settings Hub:
  `https://policies.ascentracoresolutions.com/skiltrix/privacy-settings`

---

## 2. External Actions Required Before Re-Submitting to Ezoic

### A. Update `skiltrix` Website Footer Link (Target Repo)
Currently, `skiltrix/src/pages/PrivacyPolicy.tsx` redirects to `https://policies.ascentracoresolutions.com/`. Update the SkilTrix footer / privacy link to point directly to:
- `https://policies.ascentracoresolutions.com/skiltrix/privacy-policy`
- Add a footer **"Privacy Settings"** / **"Do Not Sell or Share My Personal Information"** button that triggers the local Ezoic CMP modal (`ezCMP.open()` / `__tcfapi` / Ezoic footer link) and/or links to `https://policies.ascentracoresolutions.com/skiltrix/privacy-settings`.

### B. Activate Official Ezoic CMP in Ezoic Dashboard
1. Log in to **Ezoic Dashboard -> Privacy -> Consent Management**.
2. Enable **GDPR (TCF v2.2)** consent banner for EEA/UK traffic and **CCPA / US State Privacy** notice for applicable US states.
3. Set the **Privacy Policy URL** inside Ezoic CMP settings to:
   `https://policies.ascentracoresolutions.com/skiltrix/privacy-policy`
4. Integrate Ezoic's official CMP & ad scripts on `skiltrix.ascentracoresolutions.com` (Cloudflare/DNS integration or Ezoic JS script tags) and **remove or coordinate standalone AdSense auto-ads** so you do not run two conflicting CMPs or bypass Ezoic consent gating.

### C. Verify `ads.txt` on Root Domain
Ensure `https://skiltrix.ascentracoresolutions.com/ads.txt` (and `policies.ascentracoresolutions.com/ads.txt`) includes both your Google AdSense entry and Ezoic's authorized `ads.txt` entries via **Ezoic Ads.txt Manager**.

### D. Re-Check & Resubmit
1. Verify `https://policies.ascentracoresolutions.com/skiltrix/privacy-policy` loads publicly (HTTP 200) without login.
2. Verify `skiltrix.ascentracoresolutions.com` displays the Ezoic CMP banner for EEA/UK visitors before firing personalized ad requests.
3. Resubmit your site in the Ezoic dashboard.
