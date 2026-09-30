import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useI18n, SUPPORTED_LANGUAGES, type LanguageCode } from '../i18n';
import { useFont, AVAILABLE_FONTS, type FontChoice } from '../context/FontContext';
import { PermissionTester } from '../components/PermissionTester';
import {
  CookieIcon,
  CameraIcon,
  ShieldIcon,
  SearchIcon,
  GlobeIcon,
  AlphabetIcon,
  CreditCardIcon,
  ChildIcon,
  AccessibilityIcon,
  DataCollectionIcon,
} from '../components/Icons';

export const HomePage: React.FC = () => {
  const { t, language, setLanguage } = useI18n();
  const { font, setFont } = useFont();
  const [searchTerm, setSearchTerm] = useState('');

  const policies = [
    {
      id: 'privacy',
      path: '/privacy',
      iconNode: <ShieldIcon size={30} className="card-svg-icon" />,
      title: t.privacy.title,
      desc: 'How we collect, use, store, protect, and share your personal data in accordance with global privacy laws.',
      badge: 'Essential',
    },
    {
      id: 'permissions',
      path: '/permissions',
      iconNode: <CameraIcon size={30} className="card-svg-icon" />,
      title: t.permissions.title,
      desc: 'Specific breakdown of Camera, Microphone, Location, Notifications, Storage, and Biometric device access.',
      badge: 'Hardware & Media',
    },
    {
      id: 'data-collection',
      path: '/data-collection',
      iconNode: <DataCollectionIcon size={30} className="card-svg-icon" />,
      title: t.dataCollection.title,
      desc: 'Detailed disclosure of personal info, tracking data, technical telemetry, and legal basis for processing.',
      badge: 'Compliance',
    },
    {
      id: 'terms',
      path: '/terms',
      iconNode: <span className="card-emoji-icon">📜</span>,
      title: t.terms.title,
      desc: 'Binding rules, acceptable use, intellectual property, account requirements, and dispute resolution.',
      badge: 'Legal Agreement',
    },
    {
      id: 'cookies',
      path: '/cookies',
      iconNode: <CookieIcon size={30} className="card-svg-icon" />,
      title: t.cookies.title,
      desc: 'Information regarding session cookies, persistent cookies, analytics, advertising, and preferences.',
      badge: 'Tracking & Storage',
    },
    {
      id: 'refund',
      path: '/refund',
      iconNode: <CreditCardIcon size={30} className="card-svg-icon" />,
      title: t.refund.title,
      desc: '30-day money-back guarantee, refund eligibility criteria, timelines, and non-refundable items.',
      badge: 'Commerce',
    },
    {
      id: 'disclaimer',
      path: '/disclaimer',
      iconNode: <span className="card-emoji-icon">⚠️</span>,
      title: t.disclaimer.title,
      desc: 'General limitations of liability, professional advice disclaimer, external links, and accuracy notices.',
      badge: 'Legal Notice',
    },
    {
      id: 'accessibility',
      path: '/accessibility',
      iconNode: <AccessibilityIcon size={30} className="card-svg-icon" />,
      title: t.accessibility.title,
      desc: 'WCAG 2.1 AA compliance, screen reader support, keyboard navigation, and accessibility features.',
      badge: 'Inclusivity',
    },
    {
      id: 'child-safety',
      path: '/child-safety',
      iconNode: <ChildIcon size={30} className="card-svg-icon" />,
      title: t.childSafety.title,
      desc: 'COPPA compliance, parental consent mechanisms, child safety measures, and data deletion procedures.',
      badge: 'Protection',
    },
  ];

  const filteredPolicies = policies.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.badge.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero-badge">
          <GlobeIcon size={14} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '6px' }} />
          <span>Ascentracore Solutions • Multilingual Compliance Center • 19 Languages</span>
        </div>
        <h1 className="home-title">
          Ascentracore Solutions Policies, Permissions & Compliance Hub
        </h1>
        <p className="home-subtitle">
          Transparent, comprehensive, and legally-sound policies for Ascentracore Solutions users. Fully translated into 19 languages including Hindi, Tamil, Telugu, Kannada, Chinese, Japanese, Korean, Arabic, Urdu, European languages, and more.
        </p>

        {/* Font Switcher Bar */}
        <div className="font-preview-bar">
          <span className="font-bar-title">
            <AlphabetIcon size={15} style={{ marginRight: '5px', verticalAlign: 'middle' }} />
            Font Style:
          </span>
          <div className="font-pills">
            {AVAILABLE_FONTS.map((f) => (
              <button
                key={f.id}
                className={`font-pill ${font === f.id ? 'active' : ''}`}
                onClick={() => setFont(f.id as FontChoice)}
                title={f.preview}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Global Language Selector Bar */}
        <div className="hero-lang-bar">
          <span className="lang-bar-title">
            <GlobeIcon size={15} style={{ marginRight: '5px', verticalAlign: 'middle' }} />
            {t.nav.selectLanguage}:
          </span>
          <div className="lang-buttons-scroll">
            {Object.entries(SUPPORTED_LANGUAGES).map(([code, name]) => (
              <button
                key={code}
                className={`lang-pill ${language === code ? 'active' : ''}`}
                onClick={() => setLanguage(code as LanguageCode)}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="search-box-wrap">
          <span className="search-icon">
            <SearchIcon size={17} />
          </span>
          <input
            type="text"
            placeholder="Search policies (e.g. camera, data, cookies, refund, privacy)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="policy-search-input"
          />
          {searchTerm && (
            <button className="clear-search" onClick={() => setSearchTerm('')} aria-label="Clear search">
              ✕
            </button>
          )}
        </div>
      </section>

      {/* Quick Highlights Grid */}
      <section className="policy-grid-section">
        <div className="section-header-wrap">
          <h2>All Website Policies ({filteredPolicies.length})</h2>
          <p>Click on any policy below to view complete details in {SUPPORTED_LANGUAGES[language]}</p>
        </div>

        <div className="policies-grid">
          {filteredPolicies.map((policy) => (
            <Link key={policy.id} to={policy.path} className="policy-card">
              <div className="card-top">
                <span className="card-icon">{policy.iconNode}</span>
                <span className="card-badge">{policy.badge}</span>
              </div>
              <h3 className="card-title">{policy.title}</h3>
              <p className="card-desc">{policy.desc}</p>
              <div className="card-footer">
                <span className="read-link">Read full policy →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Interactive Permission Demonstration */}
      <section className="tester-section">
        <PermissionTester />
      </section>

      {/* Quick Features Matrix */}
      <section className="compliance-matrix-section">
        <h2>
          <ShieldIcon size={22} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
          Comprehensive Compliance Coverage
        </h2>
        <div className="matrix-grid">
          <div className="matrix-card">
            <div className="matrix-icon">
              <CameraIcon size={32} className="matrix-svg-icon" />
            </div>
            <h3>Camera & Hardware</h3>
            <p>Full disclosures for webcams, audio recordings, geolocation tracking, local file storage, and biometric identification.</p>
          </div>
          <div className="matrix-card">
            <div className="matrix-icon">
              <ShieldIcon size={32} className="matrix-svg-icon" />
            </div>
            <h3>GDPR & Privacy</h3>
            <p>Strict data subject rights, right to be forgotten, exportable data, consent revocation, and legitimate interest outlines.</p>
          </div>
          <div className="matrix-card">
            <div className="matrix-icon">
              <CookieIcon size={32} className="matrix-svg-icon" />
            </div>
            <h3>Cookie Regulations</h3>
            <p>Granular classification for essential, analytical, functional, and targeting marketing cookies with opt-out mechanisms.</p>
          </div>
          <div className="matrix-card">
            <div className="matrix-icon">
              <ChildIcon size={32} className="matrix-svg-icon" />
            </div>
            <h3>Child Safety & COPPA</h3>
            <p>Special age restrictions (under 13/16), parental consent protocols, and strict safeguards for minor data handling.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
