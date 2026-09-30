import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useI18n, SUPPORTED_LANGUAGES, type LanguageCode } from '../i18n';
import {
  ShieldIcon,
  CameraIcon,
  CookieIcon,
  CreditCardIcon,
  ChildIcon,
  AccessibilityIcon,
  DataCollectionIcon,
} from './Icons';

interface PolicyLayoutProps {
  title: string;
  intro: string;
  badge?: string;
  icon?: string;
  iconNode?: React.ReactNode;
  children: React.ReactNode;
}

export const PolicyLayout: React.FC<PolicyLayoutProps> = ({
  title,
  intro,
  badge = 'Official Policy',
  icon = '📄',
  iconNode,
  children,
}) => {
  const { t, language, setLanguage } = useI18n();
  const location = useLocation();
  const [mobileSidebarExpanded, setMobileSidebarExpanded] = useState(false);

  const policyList = [
    { path: '/privacy', iconNode: <ShieldIcon size={16} className="sidebar-svg-icon" />, label: t.nav.privacyPolicy },
    { path: '/terms', iconNode: <span>📜</span>, label: t.nav.termsOfService },
    { path: '/permissions', iconNode: <CameraIcon size={16} className="sidebar-svg-icon" />, label: t.nav.permissionsPolicy },
    { path: '/data-collection', iconNode: <DataCollectionIcon size={16} className="sidebar-svg-icon" />, label: t.nav.dataCollection },
    { path: '/cookies', iconNode: <CookieIcon size={16} className="sidebar-svg-icon" />, label: t.nav.cookiePolicy },
    { path: '/refund', iconNode: <CreditCardIcon size={16} className="sidebar-svg-icon" />, label: t.nav.refundPolicy },
    { path: '/disclaimer', iconNode: <span>⚠️</span>, label: t.nav.disclaimerPolicy },
    { path: '/accessibility', iconNode: <AccessibilityIcon size={16} className="sidebar-svg-icon" />, label: t.nav.accessibilityPolicy },
    { path: '/child-safety', iconNode: <ChildIcon size={16} className="sidebar-svg-icon" />, label: t.nav.childSafetyPolicy },
  ];

  return (
    <div className="policy-page">
      <div className="policy-hero">
        <div className="policy-hero-content">
          <Link to="/" className="back-link">
            {t.common.backToHome}
          </Link>
          <div className="policy-badge">
            <span className="badge-icon">{iconNode || icon}</span> {badge}
          </div>
          <h1 className="policy-title">{title}</h1>
          <p className="policy-intro">{intro}</p>

          <div className="policy-meta-bar">
            <div className="meta-item">
              <span className="meta-label">{t.common.lastUpdated}:</span>
              <span className="meta-value">September 2026</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">{t.common.effectiveDate}:</span>
              <span className="meta-value">January 1, 2026</span>
            </div>
            <div className="meta-item lang-badge">
              <span className="meta-label">Language:</span>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as LanguageCode)}
                className="policy-lang-inline"
                aria-label={t.nav.selectLanguage}
              >
                {Object.entries(SUPPORTED_LANGUAGES).map(([code, name]) => (
                  <option key={code} value={code}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Policy Quick Navigator bar */}
      <div className="mobile-policy-nav-bar">
        <button
          className="mobile-nav-pill-btn"
          onClick={() => setMobileSidebarExpanded(!mobileSidebarExpanded)}
        >
          <span>📑 Switch Policy or Language</span>
          <span className="chevron-icon">{mobileSidebarExpanded ? '▲' : '▼'}</span>
        </button>
      </div>

      <div className="policy-body-wrapper">
        <aside className={`policy-sidebar ${mobileSidebarExpanded ? 'mobile-expanded' : ''}`}>
          <div className="sidebar-sticky">
            <h3>{t.nav.selectLanguage}</h3>
            <div className="lang-chips">
              {Object.entries(SUPPORTED_LANGUAGES).map(([code, name]) => (
                <button
                  key={code}
                  className={`lang-chip ${language === code ? 'active' : ''}`}
                  onClick={() => setLanguage(code as LanguageCode)}
                >
                  {name}
                </button>
              ))}
            </div>

            <h3 style={{ marginTop: '24px' }}>All Policies</h3>
            <ul className="sidebar-policy-nav">
              {policyList.map((p) => (
                <li key={p.path}>
                  <Link
                    to={p.path}
                    className={location.pathname === p.path ? 'active-sidebar-link' : ''}
                    onClick={() => setMobileSidebarExpanded(false)}
                  >
                    <span className="sidebar-icon-wrap">{p.iconNode}</span> {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <main className="policy-content">
          {children}

          <div className="policy-footer-card">
            <h3>{t.common.contactUs}</h3>
            <p>
              If you have any questions, concerns, or requests regarding this policy, please reach out to the Ascentracore Solutions legal and compliance team at <strong>privacy@ascentracore.com</strong>.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};
