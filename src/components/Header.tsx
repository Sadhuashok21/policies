import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useI18n, SUPPORTED_LANGUAGES, type LanguageCode } from '../i18n';
import { useFont, AVAILABLE_FONTS, type FontChoice } from '../context/FontContext';
import {
  ShieldIcon,
  CameraIcon,
  CookieIcon,
  CreditCardIcon,
  GlobeIcon,
  AlphabetIcon,
  ChildIcon,
  AccessibilityIcon,
  DataCollectionIcon,
} from './Icons';
import logoImg from '../assets/logo.webp';

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useI18n();
  const { font, setFont } = useFont();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as LanguageCode);
  };

  const handleFontChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFont(e.target.value as FontChoice);
  };

  const allNavLinks = [
    { path: '/', label: t.nav.home, iconNode: <GlobeIcon size={16} /> },
    { path: '/privacy', label: t.nav.privacyPolicy, iconNode: <ShieldIcon size={16} /> },
    { path: '/permissions', label: t.nav.permissionsPolicy, iconNode: <CameraIcon size={16} /> },
    { path: '/data-collection', label: t.nav.dataCollection, iconNode: <DataCollectionIcon size={16} /> },
    { path: '/cookies', label: t.nav.cookiePolicy, iconNode: <CookieIcon size={16} /> },
    { path: '/terms', label: t.nav.termsOfService, iconNode: <span>📜</span> },
    { path: '/refund', label: t.nav.refundPolicy, iconNode: <CreditCardIcon size={16} /> },
    { path: '/disclaimer', label: t.nav.disclaimerPolicy, iconNode: <span>⚠️</span> },
    { path: '/accessibility', label: t.nav.accessibilityPolicy, iconNode: <AccessibilityIcon size={16} /> },
    { path: '/child-safety', label: t.nav.childSafetyPolicy, iconNode: <ChildIcon size={16} /> },
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="site-brand">
          <img src={logoImg} alt="Ascentracore Solutions Logo" className="site-logo" />
          <span className="brand-text">Ascentracore Solutions</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="header-nav desktop-nav">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            {t.nav.home}
          </Link>
          <Link to="/privacy" className={`nav-link ${location.pathname === '/privacy' ? 'active' : ''}`}>
            {t.nav.privacyPolicy}
          </Link>
          <Link to="/permissions" className={`nav-link ${location.pathname === '/permissions' ? 'active' : ''}`}>
            {t.nav.permissionsPolicy}
          </Link>
          <Link to="/data-collection" className={`nav-link ${location.pathname === '/data-collection' ? 'active' : ''}`}>
            {t.nav.dataCollection}
          </Link>
          <Link to="/cookies" className={`nav-link ${location.pathname === '/cookies' ? 'active' : ''}`}>
            {t.nav.cookiePolicy}
          </Link>
        </nav>

        {/* Desktop Controls */}
        <div className="header-controls desktop-controls">
          {/* Font Selector */}
          <div className="font-selector-wrap" title="Change typography / font">
            <span className="control-icon">
              <AlphabetIcon size={15} />
            </span>
            <select
              value={font}
              onChange={handleFontChange}
              className="font-select"
              aria-label="Select Font"
            >
              {AVAILABLE_FONTS.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.label}
                </option>
              ))}
            </select>
          </div>

          {/* Language Selector */}
          <div className="language-selector-wrap" title="Change language">
            <label htmlFor="language-select" className="sr-only">
              {t.nav.selectLanguage}
            </label>
            <span className="control-icon">
              <GlobeIcon size={15} />
            </span>
            <select
              id="language-select"
              value={language}
              onChange={handleLanguageChange}
              className="language-select"
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

        {/* Mobile Hamburger Button */}
        <button
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-controls-bar">
            {/* Font Selector Mobile */}
            <div className="mobile-control-item">
              <span className="mobile-control-label">
                <AlphabetIcon size={13} style={{ marginRight: '4px' }} /> Font:
              </span>
              <select
                value={font}
                onChange={handleFontChange}
                className="mobile-select-input"
                aria-label="Select Font"
              >
                {AVAILABLE_FONTS.map((f) => (
                  <option key={f.id} value={f.id}>
                    {f.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Language Selector Mobile */}
            <div className="mobile-control-item">
              <span className="mobile-control-label">
                <GlobeIcon size={13} style={{ marginRight: '4px' }} /> Language:
              </span>
              <select
                value={language}
                onChange={handleLanguageChange}
                className="mobile-select-input"
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

          <nav className="mobile-nav-list">
            <span className="mobile-nav-heading">Navigate Policies</span>
            {allNavLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="nav-icon">{link.iconNode}</span>
                <span className="nav-text">{link.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
