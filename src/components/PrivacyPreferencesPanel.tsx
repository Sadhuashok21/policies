import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCT_POLICIES, type ProductPolicyConfig } from '../data/productPolicies';
import { ShieldIcon, GearIcon, ScaleIcon, GlobeIcon } from './Icons';

interface PrivacyPreferencesPanelProps {
  initialProductSlug?: string;
}

export const PrivacyPreferencesPanel: React.FC<PrivacyPreferencesPanelProps> = ({
  initialProductSlug = 'skiltrix',
}) => {
  const [selectedSlug, setSelectedSlug] = useState(initialProductSlug);
  const [cmpNotice, setCmpNotice] = useState<string | null>(null);

  const product: ProductPolicyConfig =
    PRODUCT_POLICIES.find((p) => p.slug === selectedSlug) || PRODUCT_POLICIES[0];

  const handleOpenLocalCmpInfo = () => {
    setCmpNotice(
      `Consent for ${product.name} is collected locally on ${product.websiteDomain} (via Ezoic CMP / Google Funding Choices on Web, or Google UMP SDK in the Android app). Visiting policies.ascentracoresolutions.com provides legal documentation only and does not record cross-domain GDPR/CCPA consent.`
    );
  };

  return (
    <div className="privacy-preferences-panel">
      <div className="preferences-notice-callout">
        <ShieldIcon size={20} className="policy-header-svg" />
        <div>
          <strong>Important Architectural Distinction: Centralized Documentation vs. Local Consent</strong>
          <p>
            {product.consentManagement.importantDistinction}
          </p>
        </div>
      </div>

      <div className="preferences-product-selector">
        <label htmlFor="privacy-product-select" className="preferences-label">
          Select AscentraCore Product:
        </label>
        <div className="product-pill-row" id="privacy-product-select">
          {PRODUCT_POLICIES.map((item) => (
            <button
              key={item.slug}
              type="button"
              className={`lang-pill ${product.slug === item.slug ? 'active' : ''}`}
              onClick={() => {
                setSelectedSlug(item.slug);
                setCmpNotice(null);
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      <div className="preferences-cards-grid">
        <div className="preference-card">
          <h4>
            <GlobeIcon size={16} /> Legal Documentation &amp; Disclosures
          </h4>
          <p>Review the complete product-specific policy, data categories, and advertising disclosures for {product.name}.</p>
          <div className="preference-actions">
            <Link to={`/${product.slug}/privacy-policy`} className="pref-btn-primary">
              Read {product.name} Privacy Policy →
            </Link>
            <Link to="/cookies" className="pref-btn-secondary">
              Cookie Policy
            </Link>
          </div>
        </div>

        <div className="preference-card">
          <h4>
            <GearIcon size={16} /> Consent &amp; Advertising Preferences
          </h4>
          <p>{product.consentManagement.revisitPreferencesGuide}</p>
          <div className="preference-actions">
            <button type="button" className="pref-btn-primary" onClick={handleOpenLocalCmpInfo}>
              How to Change {product.name} Consent
            </button>
            {product.advertising.usesAdvertising && (
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="pref-btn-secondary"
              >
                Google Ad Settings ↗
              </a>
            )}
          </div>
        </div>

        <div className="preference-card">
          <h4>
            <ScaleIcon size={16} /> Data Deletion &amp; Privacy Rights
          </h4>
          <p>{product.dataDeletionAndWithdrawal.accountDeletionSteps}</p>
          <p style={{ marginTop: '6px', fontSize: '0.86rem', color: 'var(--text-muted)' }}>
            <strong>Retention:</strong> {product.dataDeletionAndWithdrawal.retentionSummary}
          </p>
          <div className="preference-actions">
            <a
              href={`mailto:${product.privacyContact}?subject=${encodeURIComponent(
                `${product.name} Privacy / Data Deletion Request`
              )}`}
              className="pref-btn-secondary"
            >
              Email {product.privacyContact}
            </a>
          </div>
        </div>
      </div>

      {cmpNotice && (
        <div className="cmp-info-banner" role="status">
          {cmpNotice}
        </div>
      )}
    </div>
  );
};
