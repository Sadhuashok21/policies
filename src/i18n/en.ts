export interface Translations {
  languageName: string;

  nav: {
    home: string;
    privacyPolicy: string;
    termsOfService: string;
    cookiePolicy: string;
    dataCollection: string;
    permissionsPolicy: string;
    refundPolicy: string;
    disclaimerPolicy: string;
    accessibilityPolicy: string;
    childSafetyPolicy: string;
    selectLanguage: string;
  };

  common: {
    lastUpdated: string;
    effectiveDate: string;
    contactUs: string;
    email: string;
    backToHome: string;
    tableOfContents: string;
  };

  privacy: {
    title: string;
    intro: string;
    sections: {
      informationWeCollect: {
        title: string;
        personal: string;
        usage: string;
        device: string;
      };
      howWeUse: { title: string; content: string };
      dataSharing: { title: string; content: string };
      dataSecurity: { title: string; content: string };
      yourRights: { title: string; content: string };
      retention: { title: string; content: string };
      thirdPartyLinks: { title: string; content: string };
      changes: { title: string; content: string };
    };
  };

  terms: {
    title: string;
    intro: string;
    sections: {
      acceptance: { title: string; content: string };
      useOfService: { title: string; content: string };
      userAccounts: { title: string; content: string };
      intellectualProperty: { title: string; content: string };
      prohibitedActivities: { title: string; content: string };
      limitation: { title: string; content: string };
      termination: { title: string; content: string };
      governingLaw: { title: string; content: string };
    };
  };

  cookies: {
    title: string;
    intro: string;
    sections: {
      whatAreCookies: { title: string; content: string };
      typesOfCookies: {
        title: string;
        essential: string;
        performance: string;
        functional: string;
        advertising: string;
      };
      managingCookies: { title: string; content: string };
      thirdPartyCookies: { title: string; content: string };
    };
  };

  dataCollection: {
    title: string;
    intro: string;
    sections: {
      whatWeCollect: { title: string; content: string };
      howWeCollect: { title: string; content: string };
      purpose: { title: string; content: string };
      legalBasis: { title: string; content: string };
      storage: { title: string; content: string };
      userControl: { title: string; content: string };
    };
  };

  permissions: {
    title: string;
    intro: string;
    sections: {
      camera: { title: string; why: string; howToManage: string };
      microphone: { title: string; why: string; howToManage: string };
      location: { title: string; why: string; howToManage: string };
      notifications: { title: string; why: string; howToManage: string };
      storage: { title: string; why: string; howToManage: string };
      contacts: { title: string; why: string; howToManage: string };
      biometric: { title: string; why: string; howToManage: string };
      dataNotStored: string;
    };
  };

  refund: {
    title: string;
    intro: string;
    sections: {
      eligibility: { title: string; content: string };
      process: { title: string; content: string };
      nonRefundable: { title: string; content: string };
      timeline: { title: string; content: string };
    };
  };

  disclaimer: {
    title: string;
    intro: string;
    sections: {
      generalDisclaimer: { title: string; content: string };
      professionalAdvice: { title: string; content: string };
      externalLinks: { title: string; content: string };
      accuracy: { title: string; content: string };
    };
  };

  accessibility: {
    title: string;
    intro: string;
    sections: {
      commitment: { title: string; content: string };
      standards: { title: string; content: string };
      features: { title: string; content: string };
      feedback: { title: string; content: string };
    };
  };

  childSafety: {
    title: string;
    intro: string;
    sections: {
      ageRequirement: { title: string; content: string };
      parentalConsent: { title: string; content: string };
      dataHandling: { title: string; content: string };
      reporting: { title: string; content: string };
    };
  };
}

const translations: Translations = {
  languageName: 'English',

  nav: {
    home: 'Home',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    cookiePolicy: 'Cookie Policy',
    dataCollection: 'Data Collection',
    permissionsPolicy: 'Permissions Policy',
    refundPolicy: 'Refund Policy',
    disclaimerPolicy: 'Disclaimer',
    accessibilityPolicy: 'Accessibility',
    childSafetyPolicy: 'Child Safety',
    selectLanguage: 'Select Language',
  },

  common: {
    lastUpdated: 'Last Updated',
    effectiveDate: 'Effective Date',
    contactUs: 'Contact Us',
    email: 'Email',
    backToHome: '← Back to Home',
    tableOfContents: 'Table of Contents',
  },

  privacy: {
    title: 'Privacy Policy',
    intro: 'Your privacy is critically important to us. This Privacy Policy describes how we collect, use, protect, and share your personal information when you use our website and services. We are committed to ensuring that your privacy is protected and that we comply with all applicable data protection laws and regulations.',
    sections: {
      informationWeCollect: {
        title: 'Information We Collect',
        personal: 'Personal Information: We may collect personal information that you voluntarily provide to us, including but not limited to your name, email address, phone number, postal address, date of birth, and payment information when you register for an account, make a purchase, or contact us for support.',
        usage: 'Usage Information: We automatically collect certain information when you visit our website, including your IP address, browser type and version, operating system, pages visited, time and date of your visit, time spent on each page, referring URL, and other diagnostic data that helps us understand how you interact with our services.',
        device: 'Device Information: We may collect information about the device you use to access our services, including the device type, unique device identifiers, mobile network information, hardware model, operating system version, and device settings.',
      },
      howWeUse: {
        title: 'How We Use Your Information',
        content: 'We use the information we collect for the following purposes: to provide, operate, and maintain our website and services; to improve, personalize, and expand our services; to understand and analyze how you use our website; to develop new products, services, features, and functionality; to communicate with you, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes; to process your transactions and send related information; to send you push notifications if you have opted in; to find and prevent fraud; and to comply with legal obligations.',
      },
      dataSharing: {
        title: 'Data Sharing and Disclosure',
        content: 'We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances: with service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements; when required by law, regulation, legal process, or governmental request; to protect our rights, privacy, safety, or property, or that of our users or the public; in connection with a merger, acquisition, or sale of all or a portion of our assets; and with your consent or at your direction.',
      },
      dataSecurity: {
        title: 'Data Security',
        content: 'We implement a variety of security measures to maintain the safety of your personal information. These include encryption of data in transit and at rest using industry-standard protocols, secure server infrastructure with firewalls and intrusion detection systems, strict access controls limiting data access to authorized personnel only, regular security audits and vulnerability assessments, and employee training on data protection best practices. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.',
      },
      yourRights: {
        title: 'Your Rights',
        content: 'Depending on your jurisdiction, you may have the following rights regarding your personal data: the right to access your personal data and receive a copy; the right to rectify or correct inaccurate data; the right to erasure (the "right to be forgotten"); the right to restrict processing of your data; the right to data portability; the right to object to processing; and the right to withdraw consent at any time. To exercise any of these rights, please contact us using the information provided below.',
      },
      retention: {
        title: 'Data Retention',
        content: 'We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements. The retention period is determined based on the nature of the data, the purposes for which it is processed, applicable legal requirements, and our legitimate business needs. When your data is no longer needed, we will securely delete or anonymize it.',
      },
      thirdPartyLinks: {
        title: 'Third-Party Links',
        content: 'Our website may contain links to third-party websites, services, or applications that are not operated by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services. We strongly advise you to review the privacy policy of every site you visit. We are not liable for any loss or damage arising from your use of or reliance on any third-party content.',
      },
      changes: {
        title: 'Changes to This Policy',
        content: 'We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. We will notify you of any material changes by posting the updated policy on this page with a revised "Last Updated" date. We encourage you to review this Privacy Policy periodically. Your continued use of our services after any modifications constitutes your acknowledgment and acceptance of the updated policy.',
      },
    },
  },

  terms: {
    title: 'Terms of Service',
    intro: 'Welcome to our website. Please read these Terms of Service carefully before using our website and services. These terms constitute a legally binding agreement between you and our company. By accessing or using our services, you agree to be bound by these terms.',
    sections: {
      acceptance: {
        title: 'Acceptance of Terms',
        content: 'By accessing, browsing, or using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree with any part of these terms, you must not use our services. We reserve the right to modify these terms at any time, and your continued use of the services constitutes acceptance of the modified terms.',
      },
      useOfService: {
        title: 'Use of Service',
        content: 'You must be at least 18 years old or the age of majority in your jurisdiction to use our services. By using our services, you represent and warrant that you meet this age requirement. You agree to use our services only for lawful purposes and in accordance with these terms. You shall not use our services in any way that could damage, disable, overburden, or impair the service or interfere with any other party\'s use and enjoyment of the service.',
      },
      userAccounts: {
        title: 'User Accounts',
        content: 'When you create an account with us, you must provide accurate, complete, and current information. You are responsible for safeguarding the password that you use to access our services and for any activities or actions under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account. We reserve the right to suspend or terminate your account if any information provided proves to be inaccurate, false, or misleading.',
      },
      intellectualProperty: {
        title: 'Intellectual Property',
        content: 'All content, features, and functionality of our website — including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software — are the exclusive property of our company or our licensors and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You are granted a limited, non-exclusive, non-transferable, revocable license to access and use the services for your personal, non-commercial use only.',
      },
      prohibitedActivities: {
        title: 'Prohibited Activities',
        content: 'You are prohibited from: using our services for any illegal or unauthorized purpose; attempting to gain unauthorized access to our systems or networks; transmitting viruses, malware, or other malicious code; scraping, data mining, or using automated tools to extract data; impersonating any person or entity; interfering with or disrupting the integrity of our services; engaging in any activity that could harm our reputation; posting or transmitting any content that is defamatory, obscene, or offensive; and violating any applicable local, state, national, or international law.',
      },
      limitation: {
        title: 'Limitation of Liability',
        content: 'To the fullest extent permitted by applicable law, our company and its directors, employees, partners, agents, suppliers, or affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation loss of profits, data, use, goodwill, or other intangible losses, resulting from: your access to or use of (or inability to access or use) our services; any conduct or content of any third party on our services; any content obtained from our services; and unauthorized access, use, or alteration of your transmissions or content.',
      },
      termination: {
        title: 'Termination',
        content: 'We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms of Service. Upon termination, your right to use the services will immediately cease. All provisions of these terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability. You may also terminate your account at any time by contacting us or using the account deletion feature.',
      },
      governingLaw: {
        title: 'Governing Law',
        content: 'These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which our company is established, without regard to its conflict of law provisions. Any disputes arising from or relating to these terms or your use of our services shall be resolved exclusively in the courts of the applicable jurisdiction. Our failure to enforce any right or provision of these terms shall not be considered a waiver of those rights.',
      },
    },
  },

  cookies: {
    title: 'Cookie Policy',
    intro: 'This Cookie Policy explains how we use cookies and similar tracking technologies when you visit our website. By continuing to browse or use our website, you agree to our use of cookies as described in this policy. You can manage your cookie preferences at any time through your browser settings.',
    sections: {
      whatAreCookies: {
        title: 'What Are Cookies?',
        content: 'Cookies are small text files that are placed on your computer, smartphone, or other device when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and give website owners useful information about how their site is being used. Cookies can be "persistent" (remaining on your device until they expire or are deleted) or "session" cookies (deleted when you close your browser).',
      },
      typesOfCookies: {
        title: 'Types of Cookies We Use',
        essential: 'Essential Cookies: These cookies are strictly necessary for the operation of our website. They enable core functionality such as page navigation, access to secure areas, and authentication. The website cannot function properly without these cookies, and they cannot be disabled.',
        performance: 'Performance Cookies: These cookies collect information about how visitors use our website, such as which pages are visited most often, how long visitors spend on each page, and whether any error messages are received. These cookies help us improve the performance and user experience of our website. All information collected by these cookies is aggregated and anonymous.',
        functional: 'Functional Cookies: These cookies allow our website to remember choices you make (such as your language preference, region, or username) and provide enhanced, more personalized features. They may also be used to provide services you have requested, such as watching a video or commenting on a blog.',
        advertising: 'Advertising Cookies: These cookies are used to deliver advertisements that are more relevant to you and your interests. They are also used to limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns. They are placed by advertising networks with our permission and remember that you have visited a website.',
      },
      managingCookies: {
        title: 'Managing Cookies',
        content: 'You can manage or delete cookies at any time through your browser settings. Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may impair your overall user experience and some features of our website may not function properly. You can also opt out of interest-based advertising by visiting the Digital Advertising Alliance, Network Advertising Initiative, or your regional equivalent.',
      },
      thirdPartyCookies: {
        title: 'Third-Party Cookies',
        content: 'In addition to our own cookies, we may also use various third-party cookies to report usage statistics, deliver advertisements, and enable social media features. These third-party services include Google Analytics (for website traffic analysis), social media plugins (Facebook, Twitter, LinkedIn), and advertising partners. Each of these services has its own privacy policy governing how they use the information they collect. We encourage you to review their policies.',
      },
    },
  },

  dataCollection: {
    title: 'Data Collection Policy',
    intro: 'This Data Collection Policy provides detailed information about what data we collect, how we collect it, and how it is used. We believe in complete transparency about our data practices and are committed to protecting your personal information in accordance with applicable data protection regulations.',
    sections: {
      whatWeCollect: {
        title: 'What Data We Collect',
        content: 'We collect several categories of data: Personal Information (name, email, phone number, address, date of birth, gender, profile photo); Account Information (username, password hash, account preferences); Financial Information (payment method details, transaction history, billing address); Usage Data (pages visited, features used, click patterns, search queries, session duration); Device Information (device type, operating system, browser, screen resolution, device identifiers); Location Data (IP-based location, GPS coordinates if permitted); Communication Data (support tickets, chat logs, email correspondence); and Cookie Data (browsing preferences, tracking identifiers).',
      },
      howWeCollect: {
        title: 'How We Collect Data',
        content: 'We collect data through multiple channels: Directly from you — when you fill out registration forms, create a profile, make a purchase, subscribe to newsletters, participate in surveys, or contact our support team. Automatically — through cookies, web beacons, pixel tags, server logs, and similar technologies when you interact with our website. From third parties — such as social media platforms when you use social login, payment processors, analytics providers, advertising networks, and publicly available sources.',
      },
      purpose: {
        title: 'Purpose of Data Collection',
        content: 'We collect data for the following purposes: Service Delivery — to create and manage your account, process transactions, and provide our core services; Personalization — to customize content, recommendations, and user experience based on your preferences and behavior; Analytics — to understand user behavior, measure performance, and identify trends; Communication — to send service updates, respond to inquiries, and deliver marketing messages (with your consent); Security — to detect and prevent fraud, abuse, and unauthorized access; Legal Compliance — to fulfill our legal and regulatory obligations; and Product Improvement — to develop new features and improve existing services.',
      },
      legalBasis: {
        title: 'Legal Basis for Processing',
        content: 'We process your personal data based on one or more of the following legal grounds: Consent — you have given clear consent for us to process your personal data for a specific purpose; Contract — processing is necessary for the performance of a contract with you or to take steps at your request before entering into a contract; Legitimate Interest — processing is necessary for our legitimate interests or the legitimate interests of a third party, provided those interests are not overridden by your rights; and Legal Obligation — processing is necessary for compliance with a legal obligation to which we are subject.',
      },
      storage: {
        title: 'Data Storage and Transfers',
        content: 'Your data is stored on secure servers located in data centers with industry-leading physical and digital security measures. If we transfer your data internationally, we ensure adequate protection through mechanisms such as Standard Contractual Clauses (SCCs), adequacy decisions, or other approved transfer mechanisms. We implement encryption, access controls, and regular security assessments to protect your data during storage and transmission.',
      },
      userControl: {
        title: 'Your Control Over Your Data',
        content: 'You have full control over your personal data. You can: Access your data — request a copy of all personal data we hold about you; Update your data — correct or update your information through your account settings or by contacting us; Delete your data — request deletion of your personal data (subject to legal retention requirements); Export your data — download your data in a portable, machine-readable format; Opt out — unsubscribe from marketing communications, disable cookies, or revoke specific permissions; and Restrict processing — request that we limit how we process your data under certain circumstances.',
      },
    },
  },

  permissions: {
    title: 'Permissions Policy',
    intro: 'Our website and applications may request access to certain features and capabilities on your device to provide you with the best possible experience. This Permissions Policy explains what permissions we may request, why we need them, and how you can manage them. We are committed to requesting only the permissions that are necessary for our services to function properly.',
    sections: {
      camera: {
        title: 'Camera Permission',
        why: 'We may request access to your device\'s camera for the following purposes: uploading a profile photo or avatar; participating in video calls or conferences; scanning documents or ID cards for verification; scanning QR codes for quick access or payments; and augmented reality features. Your camera is accessed only when you actively use these features, and no images or video are captured without your explicit action.',
        howToManage: 'You can manage camera permissions through your browser settings (Settings → Privacy & Security → Site Settings → Camera) or your device settings (Settings → Privacy → Camera). You can grant or revoke camera access at any time. Revoking camera access will not affect other functionality of our website.',
      },
      microphone: {
        title: 'Microphone Permission',
        why: 'We may request access to your device\'s microphone for the following purposes: sending voice messages or audio notes; participating in audio or video calls; using voice search or voice commands; and providing voice-based accessibility features. Your microphone is only activated when you explicitly use these features, and audio is not recorded without your knowledge.',
        howToManage: 'You can manage microphone permissions through your browser settings (Settings → Privacy & Security → Site Settings → Microphone) or your device settings (Settings → Privacy → Microphone). You can grant or revoke microphone access at any time without affecting other features.',
      },
      location: {
        title: 'Location Permission',
        why: 'We may request access to your location for the following purposes: providing location-based services and content; showing nearby stores, services, or events; delivery tracking and estimated arrival times; providing localized weather, news, or recommendations; and fraud prevention and account security. We may use GPS, Wi-Fi, or IP-based location methods.',
        howToManage: 'You can manage location permissions through your browser settings (Settings → Privacy & Security → Site Settings → Location) or your device settings (Settings → Privacy → Location Services). You can choose to share your location always, only while using the app, or never. You can change this setting at any time.',
      },
      notifications: {
        title: 'Notification Permission',
        why: 'We may request permission to send you push notifications for the following purposes: important account and security alerts; order status updates and delivery notifications; new feature announcements and product updates; promotional offers and personalized recommendations; and reminders and scheduled alerts. You have full control over which types of notifications you receive.',
        howToManage: 'You can manage notification permissions through your browser settings (Settings → Privacy & Security → Site Settings → Notifications) or your device settings (Settings → Notifications). You can also manage notification preferences within our website\'s settings page. You can unsubscribe from specific notification categories or disable all notifications entirely.',
      },
      storage: {
        title: 'Storage Permission',
        why: 'We may request access to device storage for the following purposes: enabling offline access to content and features; caching data for faster page loads and improved performance; downloading files, documents, or media for offline viewing; and storing user preferences and session data locally.',
        howToManage: 'You can manage storage permissions through your browser settings. You can clear stored data at any time by clearing your browser\'s cache and site data (Settings → Privacy & Security → Clear Browsing Data). This will remove all locally stored data from our website.',
      },
      contacts: {
        title: 'Contacts Permission',
        why: 'We may request access to your contacts for the following purposes: finding friends or connections who are already using our service; sending invitations to your contacts to join the platform; facilitating social features such as sharing and collaboration; and auto-completing contact information for faster form filling.',
        howToManage: 'You can manage contacts permissions through your device settings (Settings → Privacy → Contacts). You can revoke access at any time, and any previously synced contact data can be deleted upon request. We do not store your contacts permanently without your ongoing consent.',
      },
      biometric: {
        title: 'Biometric Authentication',
        why: 'We may use biometric authentication (fingerprint, face recognition, or iris scan) for the following purposes: secure and convenient login to your account; verifying your identity for sensitive actions such as payments; providing an additional layer of security (multi-factor authentication); and quick access to locked features or content.',
        howToManage: 'You can manage biometric authentication through your device settings (Settings → Security → Biometrics) or through our app\'s settings page. You can always choose to use a traditional password or PIN instead. Biometric data is processed on your device and is never transmitted to or stored on our servers.',
      },
      dataNotStored: 'Important: We do not permanently store raw camera, microphone, or biometric data on our servers unless explicitly stated and consented to by you. All device permissions can be revoked at any time through your browser or device settings without affecting the core functionality of our services. We follow the principle of least privilege, requesting only the permissions that are necessary for the features you choose to use.',
    },
  },

  refund: {
    title: 'Refund Policy',
    intro: 'We want you to be completely satisfied with your purchase. This Refund Policy outlines the terms and conditions under which you may request a refund for products or services purchased through our website. Please read this policy carefully before making a purchase.',
    sections: {
      eligibility: {
        title: 'Refund Eligibility',
        content: 'You may be eligible for a refund under the following conditions: if you request a refund within 30 days of your purchase date; if the product or service does not match the description provided at the time of purchase; if you experience technical issues that prevent you from using the product or service and our support team is unable to resolve them; or if you were charged incorrectly due to a billing error. Eligibility is determined on a case-by-case basis and subject to the specific terms of your purchase.',
      },
      process: {
        title: 'Refund Process',
        content: 'To request a refund, please follow these steps: Contact our support team via email or through our website\'s contact form; provide your order number, date of purchase, and reason for the refund request; include any relevant documentation or screenshots that support your request; and allow up to 5 business days for our team to review your request. Once your refund is approved, you will receive a confirmation email with the refund details.',
      },
      nonRefundable: {
        title: 'Non-Refundable Items',
        content: 'The following items and services are not eligible for a refund: digital products that have been downloaded or accessed; subscription services after the trial period has ended; customized or personalized products created to your specifications; services that have been fully rendered or completed; gift cards and promotional credits; and any product or service explicitly marked as non-refundable at the time of purchase.',
      },
      timeline: {
        title: 'Refund Timeline',
        content: 'Once a refund has been approved, processing times vary based on the original payment method: Credit/Debit Card refunds typically take 5–10 business days to appear on your statement; PayPal refunds are processed within 3–5 business days; Bank transfer refunds may take 7–14 business days; and other payment methods may vary. You will receive a confirmation email once the refund has been initiated. If you have not received your refund within the expected timeframe, please contact your payment provider first, then reach out to our support team.',
      },
    },
  },

  disclaimer: {
    title: 'Disclaimer',
    intro: 'The information provided on our website is for general informational purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website.',
    sections: {
      generalDisclaimer: {
        title: 'General Disclaimer',
        content: 'All content on this website is provided on an "as is" and "as available" basis without any warranties of any kind. We disclaim all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the website will be uninterrupted, error-free, secure, or free of viruses or other harmful components. Any reliance you place on the information on this website is strictly at your own risk.',
      },
      professionalAdvice: {
        title: 'Not Professional Advice',
        content: 'The content on our website is not intended to constitute professional advice, whether medical, legal, financial, tax, or otherwise. Always seek the advice of a qualified professional with any questions you may have regarding a professional matter. Never disregard professional advice or delay in seeking it because of something you have read on our website. We are not responsible for any decisions made based on the information provided on this website.',
      },
      externalLinks: {
        title: 'External Links Disclaimer',
        content: 'Our website may contain links to external websites that are not provided or maintained by us and are not under our control. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites. The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them. We bear no responsibility for the content, policies, or practices of any third-party websites.',
      },
      accuracy: {
        title: 'Accuracy of Information',
        content: 'While we make every effort to ensure that the information on our website is accurate and up to date, we cannot guarantee that all information is complete, current, or free from errors. Information may be changed or updated without notice. We reserve the right to modify the contents of this website at any time, but we have no obligation to update any information on our website. You agree that it is your responsibility to monitor changes to our website.',
      },
    },
  },

  accessibility: {
    title: 'Accessibility Policy',
    intro: 'We are committed to ensuring that our website is accessible to all users, including people with disabilities. We believe that everyone should have equal access to information and functionality on the web, and we continuously work to improve the accessibility and usability of our website.',
    sections: {
      commitment: {
        title: 'Our Commitment',
        content: 'We are committed to providing a website that is accessible to the widest possible audience, regardless of ability or technology. We strive to comply with all applicable accessibility standards and guidelines, and we continuously review and improve our website to ensure it meets the needs of all users. Accessibility is an ongoing effort, and we are dedicated to maintaining and enhancing the accessibility of our digital services.',
      },
      standards: {
        title: 'Accessibility Standards',
        content: 'Our website aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. These guidelines explain how to make web content more accessible for people with disabilities, including visual, auditory, physical, speech, cognitive, language, learning, and neurological disabilities. We also strive to comply with the Americans with Disabilities Act (ADA), Section 508 of the Rehabilitation Act, and other applicable accessibility legislation in your jurisdiction.',
      },
      features: {
        title: 'Accessibility Features',
        content: 'Our website includes the following accessibility features: full keyboard navigation support for all interactive elements; compatibility with popular screen readers (JAWS, NVDA, VoiceOver); descriptive alternative text for all meaningful images; sufficient color contrast ratios meeting WCAG AA standards; resizable text support — content can be scaled up to 200% without loss of functionality; clear and consistent page structure with proper heading hierarchy; visible focus indicators for keyboard users; skip navigation links to bypass repetitive content; accessible forms with proper labels and error messages; and captions and transcripts for multimedia content where applicable.',
      },
      feedback: {
        title: 'Feedback and Contact',
        content: 'We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers or have suggestions for improvement, please contact us at our support email. When contacting us, please include: a description of the accessibility issue; the page URL where you encountered the problem; your browser and assistive technology information; and any other relevant details. We will make reasonable efforts to address the issue promptly and provide the content you need in an accessible format.',
      },
    },
  },

  childSafety: {
    title: 'Child Safety Policy',
    intro: 'We take the safety and privacy of children very seriously. This Child Safety Policy outlines our practices regarding the collection and use of information from children, and our commitment to complying with the Children\'s Online Privacy Protection Act (COPPA) and other applicable child protection laws. We are committed to creating a safe online environment for all users.',
    sections: {
      ageRequirement: {
        title: 'Age Requirement',
        content: 'Our website and services are not intended for children under the age of 13 (or 16 in jurisdictions where this higher age applies, such as the European Economic Area). We do not knowingly collect personal information from children under the applicable minimum age. If you are under the minimum age, please do not use our services or provide any personal information to us. We encourage parents and guardians to monitor their children\'s online activities.',
      },
      parentalConsent: {
        title: 'Parental Consent',
        content: 'If we discover that a user is under the applicable minimum age, we will require verifiable parental consent before collecting, using, or disclosing any personal information. Methods of verifiable parental consent may include: requiring a parent or guardian to sign a consent form; accepting a credit card payment as proof of parental identity; having a parent call a toll-free number staffed by trained personnel; or using government-issued identification for verification. Parents may review, modify, or delete their child\'s personal information at any time.',
      },
      dataHandling: {
        title: 'Handling of Children\'s Data',
        content: 'If we inadvertently collect personal information from a child without proper parental consent, we will take immediate steps to delete that information from our records. We limit the collection of children\'s data to only what is reasonably necessary for the activity in which the child is participating. We do not require children to disclose more information than is reasonably necessary. We do not share children\'s personal information with third parties for marketing purposes. Children\'s data is subject to enhanced security measures and restricted access controls.',
      },
      reporting: {
        title: 'Reporting and Contact',
        content: 'If you are a parent or guardian and believe that your child has provided us with personal information without your consent, please contact us immediately at our support email. We will take prompt action to investigate and, if confirmed, delete the child\'s personal information from our systems. You may also report concerns about child safety on our platform through our dedicated reporting system. We cooperate fully with law enforcement agencies and child protection organizations to ensure the safety of children online.',
      },
    },
  },
};

export default translations;
