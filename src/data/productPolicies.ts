export type PlatformTarget = 'web' | 'android' | 'both';

export interface AdvertisingProviderEntry {
  name: string;
  role: string;
  status: 'active' | 'pending_external_setup';
  statusNote: string;
  identifiersOrCookies: string[];
  privacyPolicyUrl: string;
  optOutUrl: string;
}

export interface ProductPolicyConfig {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  platforms: PlatformTarget;
  packageName?: string;
  packageStatusNote?: string;
  websiteDomain: string;
  effectiveDate: string;
  lastUpdated: string;
  privacyContact: string;
  dataCollected: {
    personalInfo: string[];
    deviceAndIdentifiers: string[];
    ipAndNetwork: string[];
    usageAndTelemetry: string[];
    cookiesAndStorage: string[];
  };
  advertising: {
    usesAdvertising: boolean;
    supportsPersonalizedAds: boolean;
    supportsNonPersonalizedAds: boolean;
    providers: AdvertisingProviderEntry[];
    sdks: string[];
    identifiersUsed: string[];
    purposes: string[];
    thirdPartyPartnerNote: string;
  };
  dataSharing: {
    summary: string;
    serviceProviders: string[];
    sellsPersonalData: boolean;
  };
  consentManagement: {
    webCmpSummary: string;
    androidCmpSummary: string;
    revisitPreferencesGuide: string;
    importantDistinction: string;
  };
  rights: {
    gdpr: string[];
    usState: string[];
  };
  dataDeletionAndWithdrawal: {
    accountDeletionSteps: string;
    consentWithdrawalSteps: string;
    retentionSummary: string;
  };
}

export const PRODUCT_POLICIES: ProductPolicyConfig[] = [
  {
    slug: 'skiltrix',
    name: 'SkilTrix',
    tagline: 'Interactive coding labs, technical assessments, career roadmaps, and developer courses.',
    category: 'Education & Developer Platform',
    platforms: 'both',
    packageName: 'Pending Android repo verification (not present in current web workspace)',
    packageStatusNote:
      'Update this field with the exact Play Console applicationId from android/app/build.gradle once the Android repository is linked.',
    websiteDomain: 'https://skiltrix.ascentracoresolutions.com',
    effectiveDate: 'January 1, 2026',
    lastUpdated: 'November 27, 2026',
    privacyContact: 'privacy@ascentracore.com',
    dataCollected: {
      personalInfo: [
        'Account identity details provided during sign-up or SSO via AscentraCore Accounts (name, username, email address).',
        'Course enrollments, coding problem submissions, assessment attempts, and quiz scores.',
        'Billing metadata handled via Razorpay Checkout (transaction ID, order status, plan/course reference; full card/UPI credentials are never stored on SkilTrix servers).',
      ],
      deviceAndIdentifiers: [
        'Browser user agent, operating system, screen/viewport dimensions, and theme preference.',
        'Advertising cookies or mobile advertising identifiers (Google Advertising ID / AAID on Android) only when advertising scripts/SDKs are active and permitted by local consent.',
      ],
      ipAndNetwork: [
        'IP address and request metadata for authentication security, rate limiting, fraud prevention, and regional consent determination (GDPR / EEA / UK / US states).',
      ],
      usageAndTelemetry: [
        'Lesson progress, video comments, code sandbox executions, and assessment completion timestamps.',
        'Assessment integrity signals (fullscreen state and tab-switch counts) during proctored tests when enabled.',
      ],
      cookiesAndStorage: [
        'Essential session/authentication tokens and theme preferences stored in cookies/localStorage.',
        'Third-party advertising cookies (including Google AdSense / DoubleClick cookies) and consent state cookies managed by the local Consent Management Platform (CMP).',
      ],
    },
    advertising: {
      usesAdvertising: true,
      supportsPersonalizedAds: true,
      supportsNonPersonalizedAds: true,
      providers: [
        {
          name: 'Google AdSense / Google Advertising Services',
          role: 'Display advertising & measurement (ca-pub-8687126461256058 verified in skiltrix/index.html and ads.txt)',
          status: 'active',
          statusNote:
            'Verified in SkilTrix web index.html and authorized in ads.txt / app-ads.txt.',
          identifiersOrCookies: [
            'Google advertising cookies (e.g., DoubleClick / NID / IDE)',
            'IP address & browser metadata for frequency capping and fraud prevention',
          ],
          privacyPolicyUrl: 'https://policies.google.com/technologies/ads',
          optOutUrl: 'https://www.google.com/settings/ads',
        },
        {
          name: 'Ezoic (Monetization & CMP)',
          role: 'Ad mediation, optimization, and Consent Management Platform',
          status: 'pending_external_setup',
          statusNote:
            'Pending Ezoic domain approval, DNS/script integration, and Ezoic CMP activation in the Ezoic dashboard.',
          identifiersOrCookies: [
            'Consent preference cookies (e.g., TCF v2.2 / US Privacy strings via Ezoic CMP)',
            'Advertising delivery and performance measurement identifiers once activated',
          ],
          privacyPolicyUrl: 'https://www.ezoic.com/privacy-policy/',
          optOutUrl: 'https://www.ezoic.com/privacy-policy/',
        },
      ],
      sdks: [
        'Web: Google AdSense (adsbygoogle.js, client ca-pub-8687126461256058)',
        'Android: Pending Android repository verification (Google Mobile Ads / User Messaging Platform SDK to be declared once verified in build.gradle)',
      ],
      identifiersUsed: [
        'Web advertising cookies and local consent storage (TCF v2.2 / Google Consent Mode signals)',
        'Android Advertising ID (AAID) if Google Mobile Ads SDK is integrated in the Android build',
        'Truncated/transient IP address for regional privacy compliance and invalid-traffic protection',
      ],
      purposes: [
        'Serving contextual (non-personalized) or personalized advertisements depending on user consent and regional law.',
        'Frequency capping, ad performance reporting, and invalid click/fraud detection.',
      ],
      thirdPartyPartnerNote:
        'Third-party vendors, including Google, use cookies or device identifiers to serve ads based on prior visits or app usage. Where required by GDPR/EEA/UK or US state laws, personalized advertising is disabled until explicit consent is granted through the platform-local CMP.',
    },
    dataSharing: {
      summary:
        'AscentraCore Solutions does not sell personal information for monetary consideration. Data is shared only with essential infrastructure, payment, and authorized advertising partners as disclosed here.',
      serviceProviders: [
        'AscentraCore Accounts & Backend APIs (authentication, user profile, course/assessment records)',
        'Razorpay (payment processing)',
        'Google AdSense (web advertising, subject to consent signals)',
      ],
      sellsPersonalData: false,
    },
    consentManagement: {
      webCmpSummary:
        'On skiltrix.ascentracoresolutions.com, consent for cookies and personalized advertising must be collected locally by a single active Consent Management Platform (official Ezoic CMP once approved, or Google Funding Choices) before non-essential ad tags process personal data.',
      androidCmpSummary:
        'In the SkilTrix Android app, consent must be collected locally via Google User Messaging Platform (UMP) SDK prior to initializing Google Mobile Ads in EEA/UK/applicable regions, with an in-app Privacy Options button.',
      revisitPreferencesGuide:
        'Use the "Privacy Settings" link in the SkilTrix website footer or the in-app Privacy Options menu on Android to reopen the local consent dialog at any time.',
      importantDistinction:
        'Reading this legal policy on policies.ascentracoresolutions.com does NOT grant or record GDPR/CCPA consent for SkilTrix. Consent is collected and stored locally on the SkilTrix website or Android app.',
    },
    rights: {
      gdpr: [
        'Right of access to personal data held for your SkilTrix account.',
        'Right to rectification of inaccurate profile or account information.',
        'Right to erasure ("right to be forgotten") and account deletion.',
        'Right to restrict or object to processing, including withdrawing consent for personalized advertising at any time.',
        'Right to data portability and right to lodge a complaint with a supervisory authority.',
      ],
      usState: [
        'Right to know what categories of personal information are collected, used, and shared (CCPA/CPRA, VCDPA, CPA, CTDPA, UCPA).',
        'Right to delete personal information collected from you, subject to legal exceptions.',
        'Right to opt out of targeted advertising / cross-context behavioral advertising ("Do Not Sell or Share My Personal Information").',
        'Right to non-discrimination for exercising privacy rights.',
      ],
    },
    dataDeletionAndWithdrawal: {
      accountDeletionSteps:
        'Request full account and learning-data deletion from your SkilTrix Profile Settings or by emailing privacy@ascentracore.com from your registered email address.',
      consentWithdrawalSteps:
        'Reopen the local Privacy Preferences / Consent banner on skiltrix.ascentracoresolutions.com, adjust Google Ads Settings (https://www.google.com/settings/ads), or reset/opt out of Ad Personalization in Android System Settings > Privacy > Ads.',
      retentionSummary:
        'Account records are retained while your account is active and deleted or anonymized within 30 days of a verified deletion request, except billing records required by tax/financial law.',
    },
  },
  {
    slug: 'krishi',
    name: 'Krishi',
    tagline: 'Agricultural advisory, crop insights, and farmer support services under AscentraCore Solutions.',
    category: 'Agriculture & Advisory',
    platforms: 'both',
    packageName: 'Pending Android repo verification (not present in current workspace)',
    websiteDomain: 'https://krishi.ascentracoresolutions.com',
    effectiveDate: 'January 1, 2026',
    lastUpdated: 'November 27, 2026',
    privacyContact: 'privacy@ascentracore.com',
    dataCollected: {
      personalInfo: [
        'Account contact information provided by the user (name, email, or phone number where applicable).',
        'Crop/advisory queries submitted within the application.',
      ],
      deviceAndIdentifiers: [
        'Basic device model, OS version, and language preference for localized advisory delivery.',
      ],
      ipAndNetwork: [
        'IP address for API security, rate limiting, and regional service routing.',
      ],
      usageAndTelemetry: [
        'Feature interaction logs and crash diagnostics used solely to maintain reliability.',
      ],
      cookiesAndStorage: [
        'Essential session cookies and language preferences.',
      ],
    },
    advertising: {
      usesAdvertising: false,
      supportsPersonalizedAds: false,
      supportsNonPersonalizedAds: false,
      providers: [],
      sdks: ['None currently integrated in this workspace.'],
      identifiersUsed: ['No advertising identifiers are currently collected by Krishi.'],
      purposes: ['Krishi does not currently display third-party advertisements.'],
      thirdPartyPartnerNote:
        'If third-party advertising providers are added to Krishi in the future, this policy and the corresponding local CMP will be updated prior to release.',
    },
    dataSharing: {
      summary:
        'Krishi does not sell user data or share personal information with third-party advertising networks.',
      serviceProviders: ['AscentraCore Accounts & Core API Infrastructure'],
      sellsPersonalData: false,
    },
    consentManagement: {
      webCmpSummary:
        'Uses essential session storage; no third-party advertising CMP is required while advertising remains disabled.',
      androidCmpSummary:
        'Requests runtime permissions (such as location or notifications) only when explicitly initiated by user features.',
      revisitPreferencesGuide:
        'Manage device permissions in Android Settings or contact privacy@ascentracore.com for data export/deletion.',
      importantDistinction:
        'This centralized page provides legal documentation only; any app permissions or local preferences are managed directly on your device or product interface.',
    },
    rights: {
      gdpr: [
        'Right of access, rectification, erasure, restriction, and portability of personal data.',
        'Right to withdraw consent for optional permissions such as location or notifications at any time.',
      ],
      usState: [
        'Right to know, delete, and non-discrimination under applicable US state privacy statutes.',
      ],
    },
    dataDeletionAndWithdrawal: {
      accountDeletionSteps:
        'Email privacy@ascentracore.com with your registered account email to request complete account and query deletion.',
      consentWithdrawalSteps:
        'Revoke device permissions (Location, Camera, Notifications) in your browser or Android Settings at any time.',
      retentionSummary:
        'Data is retained only as long as necessary to provide requested advisory services or satisfy legal obligations.',
    },
  },
  {
    slug: 'asai',
    name: 'ASAI Studio',
    tagline: 'AI character, media, and creative project workspace under AscentraCore Solutions.',
    category: 'AI & Creative Tools',
    platforms: 'web',
    websiteDomain: 'https://asai.ascentracoresolutions.com',
    effectiveDate: 'January 1, 2026',
    lastUpdated: 'November 27, 2026',
    privacyContact: 'privacy@ascentracore.com',
    dataCollected: {
      personalInfo: [
        'AscentraCore account credentials, subscription plan status, and user-created project assets.',
      ],
      deviceAndIdentifiers: ['Browser type, viewport dimensions, and session identifiers.'],
      ipAndNetwork: ['IP address for authentication security and usage quota enforcement.'],
      usageAndTelemetry: ['Project export counts, allowance usage, and error logs.'],
      cookiesAndStorage: ['Essential OAuth/PKCE session tokens and UI preferences.'],
    },
    advertising: {
      usesAdvertising: false,
      supportsPersonalizedAds: false,
      supportsNonPersonalizedAds: false,
      providers: [],
      sdks: ['None currently integrated.'],
      identifiersUsed: ['No advertising identifiers collected.'],
      purposes: ['ASAI Studio is subscription/allowance-funded and does not serve third-party ads.'],
      thirdPartyPartnerNote: 'No third-party ad networks receive data from ASAI Studio.',
    },
    dataSharing: {
      summary:
        'Personal data is shared only with AscentraCore authentication and payment infrastructure required to operate subscriptions.',
      serviceProviders: ['AscentraCore Accounts & Backend APIs'],
      sellsPersonalData: false,
    },
    consentManagement: {
      webCmpSummary: 'Only strictly necessary authentication and preference storage is used.',
      androidCmpSummary: 'Not applicable (web application).',
      revisitPreferencesGuide: 'Manage account sessions and sign-out via AscentraCore Accounts.',
      importantDistinction:
        'Visiting this policy page provides legal disclosures; account controls are managed inside ASAI Studio and AscentraCore Accounts.',
    },
    rights: {
      gdpr: [
        'Right to access, correct, export, or delete your account and creative project data.',
      ],
      usState: [
        'Right to know, delete, and non-discrimination under applicable US state privacy laws.',
      ],
    },
    dataDeletionAndWithdrawal: {
      accountDeletionSteps:
        'Delete individual projects inside ASAI Studio or email privacy@ascentracore.com for full account removal.',
      consentWithdrawalSteps:
        'Clear browser storage or revoke OAuth access in AscentraCore Accounts.',
      retentionSummary:
        'Projects remain stored until deleted by the user or upon verified account deletion.',
    },
  },
];

export function getProductPolicy(slug?: string): ProductPolicyConfig | undefined {
  if (!slug) return undefined;
  const normalized = slug.trim().toLowerCase();
  return PRODUCT_POLICIES.find((p) => p.slug.toLowerCase() === normalized);
}
