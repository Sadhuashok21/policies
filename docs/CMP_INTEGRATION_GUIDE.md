# Consent Management Platform (CMP) Integration Guide

## Architectural Principle

`policies.ascentracoresolutions.com` is the **centralized legal documentation platform**. Visiting a policy page on `policies.ascentracoresolutions.com` **does not** collect legally valid GDPR/CCPA consent for `skiltrix.ascentracoresolutions.com` or the SkilTrix Android app. Consent **must** be collected locally on the origin/app where ads and tracking run.

---

## 1. SkilTrix Website (`https://skiltrix.ascentracoresolutions.com/`)

### Single-CMP Rule
Run **only one** CMP on `skiltrix.ascentracoresolutions.com`:
- **When using Ezoic**: Use **Ezoic's official Consent Management Platform (CMP)** (TCF v2.2 + US Privacy). Do **not** simultaneously enable Google Funding Choices / AdSense's built-in GDPR popup, or users will see duplicate consent dialogs.
- **If Ezoic is not yet active and only Google AdSense (`ca-pub-8687126461256058`) is running**: Use Google's **Privacy & messaging** GDPR/US state message in AdSense until Ezoic is approved, then switch cleanly to Ezoic CMP.

### Ezoic CMP Integration Checklist
1. Load Ezoic's CMP script at the top of `<head>` (before ad scripts) per your Ezoic Dashboard -> *Consent Management* snippet, or enable Ezoic Cloudflare/DNS integration.
2. Configure **Privacy Policy URL** in Ezoic CMP as:
   `https://policies.ascentracoresolutions.com/skiltrix/privacy-policy`
3. Add a **"Privacy Preferences"** link/button in the SkilTrix footer to allow users to revisit their consent choices:
   ```ts
   // Reopen Ezoic CMP if loaded on skiltrix.ascentracoresolutions.com
   if (typeof (window as any).__tcfapi === 'function') {
     (window as any).__tcfapi('displayConsentUi', 2, () => {});
   } else if (typeof (window as any).__ezconsent?.open === 'function') {
     (window as any).__ezconsent.open();
   } else {
     window.open('https://policies.ascentracoresolutions.com/skiltrix/privacy-settings', '_blank');
   }
   ```
4. Ensure any custom analytics or ad scripts respect TCF / Google Consent Mode signals before setting non-essential cookies.

---

## 2. SkilTrix Android Application

*(Note: The Android repository is not in this workspace. Apply the following in your Android project once verified.)*

1. **Google Mobile Ads + User Messaging Platform (UMP) SDK**:
   - Add `com.google.android.ump:user-messaging-platform` alongside `com.google.android.gms:play-services-ads` in `app/build.gradle`.
   - Call `UserMessagingPlatform.getConsentInformation(context).requestConsentInfoUpdate(...)` on app launch, present the consent form via `UserMessagingPlatform.loadAndShowConsentFormIfRequired(...)`, and **only call `MobileAds.initialize(...)` after `consentInformation.canRequestAds()` is `true`**.
2. **Privacy Options Entry Point**:
   - In your Android app's Settings screen, check `consentInformation.privacyOptionsRequirementStatus == PrivacyOptionsRequirementStatus.REQUIRED` and expose a **"Privacy Settings"** button that calls `UserMessagingPlatform.showPrivacyOptionsForm(activity, ...)`.
   - Also link to `https://policies.ascentracoresolutions.com/skiltrix/privacy-policy` and `https://policies.ascentracoresolutions.com/skiltrix/privacy-settings`.
3. **Avoid Conflicting CMPs**:
   - Do not bundle a second consent SDK alongside Google UMP if using AdMob/Google Mobile Ads.
