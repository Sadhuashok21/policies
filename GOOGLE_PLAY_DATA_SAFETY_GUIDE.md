# Google Play Data Safety Guide — AscentraCore Solutions (SkilTrix)

> **Scope & Verification Note**: This guide documents only data practices verified in the current workspace (`skiltrix`, `apis`, `policies`). The **SkilTrix Android repository** (`android/app/build.gradle`, `AndroidManifest.xml`) is **not present** in this web workspace, so Android-only SDK items (such as Google Mobile Ads / AdMob and Google User Messaging Platform SDK) are explicitly marked **Pending Android Repo Verification** below. Do not submit unverified declarations to Google Play Console until you verify `build.gradle` in the Android repo.

---

## 1. Centralized Privacy Policy & App-Ads Configuration

- **SkilTrix Privacy Policy URL** (for Google Play Console -> *App content -> Privacy policy*):
  `https://policies.ascentracoresolutions.com/skiltrix/privacy-policy`
- **Privacy Settings / Deletion Request Entry Point**:
  `https://policies.ascentracoresolutions.com/skiltrix/privacy-settings`
- **Authorized `app-ads.txt` Publisher Record** (verified in `policies/public/app-ads.txt`):
  `google.com, pub-8687126461256058, DIRECT, f08c47fec0942fa0`

---

## 2. Verified Data Collected & Shared (from SkilTrix Backend & Web Workspace)

| Category | Specific Data Type | Collected | Shared with 3rd Parties | Purpose | Verification Source |
| :--- | :--- | :---: | :---: | :--- | :--- |
| **Personal info** | Name, email address, user IDs | Yes | No (except auth/payment infra) | App functionality, Account management | `apis/skiltrix/`, AscentraCore Accounts |
| **Financial info** | Purchase history / order IDs (via Razorpay) | Yes | Processed by Razorpay | App functionality (course/compiler orders) | `skiltrix/index.html`, `apis/skiltrix/payments_admin.py` |
| **App activity** | Course progress, code submissions, quiz/assessment scores | Yes | No | App functionality, Personalization | `apis/skiltrix/models.py` |
| **Security / Integrity** | Fullscreen/tab-switch assessment event counts (proctored tests only) | Yes | No | Fraud prevention & academic integrity | `apis/skiltrix/coding_assessment_views.py` |
| **Web / App Ads** | Cookies (`ca-pub-8687126461256058` on web) / Advertising ID (AAID on Android *if AdMob is integrated*) | Web: Yes / Android: Verify `build.gradle` | Yes (Google AdSense / Google Mobile Ads when enabled) | Advertising or marketing | `skiltrix/index.html`, `policies/public/ads.txt` |

---

## 3. Android SDK Verification Checklist (Run in Your SkilTrix Android Repo)

Before finalizing the **Google Play Console -> Data safety** form, inspect `app/build.gradle` / `app/build.gradle.kts` and `AndroidManifest.xml` in your Android repository:

1. **Google Mobile Ads (`com.google.android.gms:play-services-ads`)**:
   - If present:
     - Declare **Device or other IDs** (Advertising ID / AAID) -> Collected & Shared -> Purposes: **Advertising or marketing**, **Analytics**, **Fraud prevention, security, and compliance**.
     - Declare **Approximate location** (IP-derived by AdMob) -> Collected & Shared -> Purposes: **Advertising or marketing**, **Analytics**.
     - Declare **App interactions** (ad impressions/clicks) -> Collected & Shared -> Purposes: **Advertising or marketing**, **Analytics**.
   - Integrate **Google User Messaging Platform (UMP) SDK** (`com.google.android.ump:user-messaging-platform`) and request consent **before** `MobileAds.initialize(...)`.
2. **Firebase Analytics / Crashlytics** (if present in `build.gradle`):
   - Declare **App interactions**, **Crash logs**, **Diagnostics**, and **Device or other IDs** (Firebase installation ID) -> Purposes: **Analytics**, **App functionality**.
3. **Ezoic Mobile**:
   - Ezoic monetization in a mobile app requires Ezoic's supported mobile/mediation setup and must be declared only if the corresponding SDK/adapter is actually compiled into the APK/AAB.

---

## 4. Security, Encryption & Data Deletion Declarations

- **Is all user data collected by your app encrypted in transit?**
  **Yes** — All AscentraCore APIs and web endpoints enforce HTTPS/TLS (`SSL/TLS`).
- **Do you provide a way for users to request that their data is deleted?**
  **Yes** — Account deletion can be requested via `privacy@ascentracore.com` and documented at `https://policies.ascentracoresolutions.com/skiltrix/privacy-settings` (and in-app Profile Settings). Provide the in-app/web deletion URL in Play Console -> *Delete account URL* as well.

---

## 5. Play Console Submission Checklist

1. Enter Privacy Policy URL: `https://policies.ascentracoresolutions.com/skiltrix/privacy-policy`
2. Complete **Advertising ID** declaration (answer **Yes** if `play-services-ads` is included, select *Advertising or marketing*).
3. Match every SDK in `app/build.gradle` to the table in Section 2 & 3 — do not omit active ad/analytics SDKs and do not declare SDKs that are not compiled into the app.
4. Confirm **Data is encrypted in transit = Yes** and **Account deletion mechanism = Yes**.
