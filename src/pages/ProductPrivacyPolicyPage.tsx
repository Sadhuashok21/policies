import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductPolicy } from '../data/productPolicies';
import { PolicyLayout } from '../components/PolicyLayout';
import { AdvertisingDisclosureSection } from '../components/AdvertisingDisclosureSection';
import { NotFound } from './NotFound';
import {
  ShieldIcon,
  InboxIcon,
  GearIcon,
  HandshakeIcon,
  ScaleIcon,
  HourglassIcon,
  FileEditIcon,
} from '../components/Icons';

export const ProductPrivacyPolicyPage: React.FC = () => {
  const { productSlug } = useParams<{ productSlug: string }>();
  const product = getProductPolicy(productSlug);

  if (!product) {
    return <NotFound />;
  }

  return (
    <PolicyLayout
      title={`${product.name} Privacy Policy & Advertising Disclosures`}
      intro={`${product.tagline} Effective ${product.effectiveDate} • Last updated ${product.lastUpdated}.`}
      badge={`${product.category} • Product Policy`}
      iconNode={<ShieldIcon size={18} className="badge-svg-icon" />}
    >
      <div className="policy-section-group">
        {/* Product Metadata Summary */}
        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon-svg">
              <ShieldIcon size={24} className="policy-header-svg" />
            </span>
            <h2>1. Application &amp; Website Scope</h2>
          </div>
          <div className="product-meta-grid">
            <div>
              <strong>Product Name:</strong> {product.name}
            </div>
            <div>
              <strong>Website Domain:</strong>{' '}
              <a href={product.websiteDomain} target="_blank" rel="noopener noreferrer">
                {product.websiteDomain}
              </a>
            </div>
            {product.packageName && (
              <div>
                <strong>Android Package Name:</strong> {product.packageName}
              </div>
            )}
            <div>
              <strong>Privacy Contact:</strong>{' '}
              <a href={`mailto:${product.privacyContact}`}>{product.privacyContact}</a>
            </div>
          </div>
          {product.packageStatusNote && (
            <p className="meta-status-note">{product.packageStatusNote}</p>
          )}
          <div style={{ marginTop: '12px' }}>
            <Link to={`/${product.slug}/privacy-settings`} className="pref-btn-primary">
              Open {product.name} Privacy Settings &amp; Rights →
            </Link>
          </div>
        </section>

        {/* Data Collected */}
        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon-svg">
              <InboxIcon size={24} className="policy-header-svg" />
            </span>
            <h2>2. Information We Collect</h2>
          </div>
          <div className="subsection">
            <h3>Personal &amp; Account Information</h3>
            <ul className="compliance-bullet-list">
              {product.dataCollected.personalInfo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="subsection">
            <h3>Device Information &amp; Identifiers</h3>
            <ul className="compliance-bullet-list">
              {product.dataCollected.deviceAndIdentifiers.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="subsection">
            <h3>IP Addresses &amp; Network Metadata</h3>
            <ul className="compliance-bullet-list">
              {product.dataCollected.ipAndNetwork.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="subsection">
            <h3>Usage &amp; Telemetry Information</h3>
            <ul className="compliance-bullet-list">
              {product.dataCollected.usageAndTelemetry.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="subsection">
            <h3>Cookies &amp; Local Storage Technologies</h3>
            <ul className="compliance-bullet-list">
              {product.dataCollected.cookiesAndStorage.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Reusable Advertising Disclosure Section */}
        <AdvertisingDisclosureSection product={product} />

        {/* Data Collection & Sharing */}
        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon-svg">
              <HandshakeIcon size={24} className="policy-header-svg" />
            </span>
            <h2>3. Data Sharing &amp; Third-Party Service Providers</h2>
          </div>
          <p>{product.dataSharing.summary}</p>
          <ul className="compliance-bullet-list" style={{ marginTop: '10px' }}>
            {product.dataSharing.serviceProviders.map((sp) => (
              <li key={sp}>{sp}</li>
            ))}
          </ul>
        </section>

        {/* Consent Management Architecture */}
        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon-svg">
              <GearIcon size={24} className="policy-header-svg" />
            </span>
            <h2>4. Consent Management &amp; Platform Controls</h2>
          </div>
          <p>
            <strong>Important Distinction:</strong> {product.consentManagement.importantDistinction}
          </p>
          <ul className="compliance-bullet-list" style={{ marginTop: '10px' }}>
            <li>
              <strong>Web Consent Management:</strong> {product.consentManagement.webCmpSummary}
            </li>
            <li>
              <strong>Android Consent Management:</strong> {product.consentManagement.androidCmpSummary}
            </li>
            <li>
              <strong>Revisit Preferences:</strong> {product.consentManagement.revisitPreferencesGuide}
            </li>
          </ul>
        </section>

        {/* GDPR & US State Rights */}
        <section className="policy-content-block highlight-block">
          <div className="section-title-wrap">
            <span className="section-icon-svg">
              <ScaleIcon size={24} className="policy-header-svg" />
            </span>
            <h2>5. Your GDPR &amp; US State Privacy Rights</h2>
          </div>
          <div className="subsection">
            <h3>GDPR / UK GDPR Rights (EEA &amp; UK Residents)</h3>
            <ul className="compliance-bullet-list">
              {product.rights.gdpr.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
          <div className="subsection">
            <h3>Applicable US State Privacy Rights (CCPA/CPRA &amp; State Laws)</h3>
            <ul className="compliance-bullet-list">
              {product.rights.usState.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Data Deletion & Withdrawal */}
        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon-svg">
              <HourglassIcon size={24} className="policy-header-svg" />
            </span>
            <h2>6. Data Deletion, Consent Withdrawal &amp; Retention</h2>
          </div>
          <p>
            <strong>Account &amp; Data Deletion:</strong>{' '}
            {product.dataDeletionAndWithdrawal.accountDeletionSteps}
          </p>
          <p style={{ marginTop: '8px' }}>
            <strong>Withdrawing Advertising Consent:</strong>{' '}
            {product.dataDeletionAndWithdrawal.consentWithdrawalSteps}
          </p>
          <p style={{ marginTop: '8px' }}>
            <strong>Data Retention:</strong> {product.dataDeletionAndWithdrawal.retentionSummary}
          </p>
        </section>

        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon-svg">
              <FileEditIcon size={24} className="policy-header-svg" />
            </span>
            <h2>7. Updates &amp; Privacy Contact</h2>
          </div>
          <p>
            We update this product policy whenever integrated SDKs, advertising partners, or legal
            requirements change. For privacy inquiries or deletion requests, contact{' '}
            <strong>{product.privacyContact}</strong>.
          </p>
        </section>
      </div>
    </PolicyLayout>
  );
};
