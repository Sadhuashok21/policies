import React from 'react';
import { type ProductPolicyConfig } from '../data/productPolicies';
import { GlobeIcon, ShieldIcon, CookieIcon, ScaleIcon } from './Icons';

interface AdvertisingDisclosureSectionProps {
  product: ProductPolicyConfig;
}

export const AdvertisingDisclosureSection: React.FC<AdvertisingDisclosureSectionProps> = ({
  product,
}) => {
  const { advertising, dataCollected, consentManagement } = product;

  return (
    <section
      className="policy-content-block highlight-block ad-disclosure-section"
      id="advertising-disclosure"
    >
      <div className="section-title-wrap">
        <span className="section-icon-svg">
          <GlobeIcon size={24} className="policy-header-svg" />
        </span>
        <h2>Advertising &amp; Monetization Disclosure — {product.name}</h2>
      </div>

      {!advertising.usesAdvertising ? (
        <div className="subsection">
          <p>
            <strong>No Third-Party Advertising Currently Integrated:</strong> {product.name} does not
            currently integrate third-party advertising networks or serve behavioral advertisements.{' '}
            {advertising.thirdPartyPartnerNote}
          </p>
        </div>
      ) : (
        <>
          <p>
            {product.name} displays advertisements on supported surfaces to help keep educational
            resources accessible. Only advertising providers that are actually integrated or in
            authorized onboarding for {product.name} are listed below.
          </p>
          <span id="ezoic-privacy-policy-embed" className="ezoic-embed-slot"></span>

          <div className="ad-providers-list">
            {advertising.providers.map((provider) => (
              <div key={provider.name} className="ad-provider-card">
                <div className="ad-provider-header">
                  <h4>{provider.name}</h4>
                  <span
                    className={`status-pill ${
                      provider.status === 'active' ? 'status-active' : 'status-pending'
                    }`}
                  >
                    {provider.status === 'active'
                      ? 'Verified Integration'
                      : 'Pending External Dashboard Setup'}
                  </span>
                </div>
                <p className="ad-provider-role">{provider.role}</p>
                <p className="ad-provider-note">{provider.statusNote}</p>
                <ul className="compliance-bullet-list">
                  {provider.identifiersOrCookies.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="ad-provider-links">
                  <a href={provider.privacyPolicyUrl} target="_blank" rel="noopener noreferrer">
                    Partner Privacy Policy ↗
                  </a>
                  <a href={provider.optOutUrl} target="_blank" rel="noopener noreferrer">
                    Ad Settings / Opt-Out ↗
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="subsection">
            <h3>
              <CookieIcon size={16} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
              Information Advertising Partners May Collect &amp; Identifiers Used
            </h3>
            <ul className="compliance-bullet-list">
              {advertising.identifiersUsed.map((id) => (
                <li key={id}>{id}</li>
              ))}
              {dataCollected.ipAndNetwork.map((ip) => (
                <li key={ip}>{ip}</li>
              ))}
            </ul>
          </div>

          <div className="subsection">
            <h3>
              <ShieldIcon size={16} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
              Personalized vs. Non-Personalized Advertising
            </h3>
            <p>
              <strong>Personalized Advertising ({advertising.supportsPersonalizedAds ? 'Consent-Gated' : 'Disabled'}):</strong>{' '}
              When permitted by regional law and your explicit consent in the platform&apos;s local
              Consent Management Platform (CMP), advertising partners may use cookies or device
              advertising identifiers to deliver ads relevant to your interests.
            </p>
            <p style={{ marginTop: '8px' }}>
              <strong>Non-Personalized Advertising ({advertising.supportsNonPersonalizedAds ? 'Supported' : 'N/A'}):</strong>{' '}
              If you decline personalized advertising or reside in a region requiring prior consent
              where consent has not been granted, only non-personalized (contextual) ads are shown,
              relying solely on current page/screen context rather than cross-site behavioral
              profiles.
            </p>
          </div>

          <div className="subsection">
            <h3>
              <ScaleIcon size={16} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
              Managing Preferences &amp; Withdrawing Consent
            </h3>
            <p>{advertising.thirdPartyPartnerNote}</p>
            <p style={{ marginTop: '8px' }}>{consentManagement.revisitPreferencesGuide}</p>
            <ul className="compliance-bullet-list" style={{ marginTop: '8px' }}>
              <li>
                <strong>Google Ads Preferences:</strong>{' '}
                <a
                  href="https://www.google.com/settings/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.google.com/settings/ads
                </a>
              </li>
              <li>
                <strong>Digital Advertising Alliance (US Opt-Out):</strong>{' '}
                <a
                  href="https://optout.aboutads.info/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://optout.aboutads.info/
                </a>
              </li>
              <li>
                <strong>Your Online Choices (EU/EEA):</strong>{' '}
                <a
                  href="https://www.youronlinechoices.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.youronlinechoices.com/
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </section>
  );
};
