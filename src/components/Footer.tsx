import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n, SUPPORTED_LANGUAGES, type LanguageCode } from '../i18n';
import { GlobeIcon } from './Icons';
import logoImg from '../assets/logo.webp';

export const Footer: React.FC = () => {
  const { language, setLanguage, t } = useI18n();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-brand">
            <img src={logoImg} alt="Ascentracore Solutions Logo" className="footer-logo" />
            <h3 className="footer-brand-title">Ascentracore Solutions</h3>
          </div>
          <p>
            Complete, multilingual legal policies, compliance documents, and device permission guidelines for Ascentracore Solutions products and services.
          </p>
          <div className="footer-lang-picker">
            <span className="lang-icon">
              <GlobeIcon size={15} />
            </span>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as LanguageCode)}
              className="language-select-footer"
              aria-label={t.nav.selectLanguage}
            >
              {Object.entries(SUPPORTED_LANGUAGES).map(([code, name]) => (
                <option key={code} value={code}>
                  {name} ({code.toUpperCase()})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="footer-section">
          <h4>Legal Policies</h4>
          <ul className="footer-links">
            <li><Link to="/privacy">{t.nav.privacyPolicy}</Link></li>
            <li><Link to="/terms">{t.nav.termsOfService}</Link></li>
            <li><Link to="/cookies">{t.nav.cookiePolicy}</Link></li>
            <li><Link to="/disclaimer">{t.nav.disclaimerPolicy}</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Data & Permissions</h4>
          <ul className="footer-links">
            <li><Link to="/permissions">{t.nav.permissionsPolicy}</Link></li>
            <li><Link to="/data-collection">{t.nav.dataCollection}</Link></li>
            <li><Link to="/refund">{t.nav.refundPolicy}</Link></li>
            <li><Link to="/accessibility">{t.nav.accessibilityPolicy}</Link></li>
            <li><Link to="/child-safety">{t.nav.childSafetyPolicy}</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>{t.common.contactUs}</h4>
          <p>Questions about our policies? Contact our legal and privacy team:</p>
          <p className="contact-info">
            <strong>{t.common.email}:</strong> privacy@ascentracore.com
          </p>
          <p className="contact-info">
            <strong>{t.common.effectiveDate}:</strong> January 1, 2026
          </p>
          <p className="contact-info">
            <strong>{t.common.lastUpdated}:</strong> September 2026
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Ascentracore Solutions. All rights reserved. Available in 19 languages.</p>
      </div>
    </footer>
  );
};
