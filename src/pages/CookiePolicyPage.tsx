import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n';
import { PolicyLayout } from '../components/PolicyLayout';
import {
  CookieIcon,
  DocumentListIcon,
  CircleDotIcon,
  GearIcon,
  GlobeIcon,
} from '../components/Icons';

export const CookiePolicyPage: React.FC = () => {
  const { t } = useI18n();
  const c = t.cookies;

  return (
    <PolicyLayout
      title={c.title}
      intro={c.intro}
      badge="Cookies & Tracking"
      iconNode={<CookieIcon size={18} className="badge-svg-icon" />}
    >
      <div className="policy-section-group">
        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon-svg">
              <CookieIcon size={24} className="policy-header-svg" />
            </span>
            <h2>1. {c.sections.whatAreCookies.title}</h2>
          </div>
          <p>{c.sections.whatAreCookies.content}</p>
        </section>

        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon-svg">
              <DocumentListIcon size={24} className="policy-header-svg" />
            </span>
            <h2>2. {c.sections.typesOfCookies.title}</h2>
          </div>
          <div className="cookie-types-grid">
            <div className="cookie-type-card">
              <h4>
                <CircleDotIcon size={12} color="#ef4444" style={{ flexShrink: 0 }} />
                Essential Cookies
              </h4>
              <p>{c.sections.typesOfCookies.essential}</p>
            </div>
            <div className="cookie-type-card">
              <h4>
                <CircleDotIcon size={12} color="#f59e0b" style={{ flexShrink: 0 }} />
                Performance & Analytics
              </h4>
              <p>{c.sections.typesOfCookies.performance}</p>
            </div>
            <div className="cookie-type-card">
              <h4>
                <CircleDotIcon size={12} color="#10b981" style={{ flexShrink: 0 }} />
                Functional Cookies
              </h4>
              <p>{c.sections.typesOfCookies.functional}</p>
            </div>
            <div className="cookie-type-card">
              <h4>
                <CircleDotIcon size={12} color="#3b82f6" style={{ flexShrink: 0 }} />
                Marketing & Advertising
              </h4>
              <p>{c.sections.typesOfCookies.advertising}</p>
            </div>
          </div>
        </section>

        <section className="policy-content-block highlight-block">
          <div className="section-title-wrap">
            <span className="section-icon-svg">
              <GearIcon size={24} className="policy-header-svg" />
            </span>
            <h2>3. {c.sections.managingCookies.title}</h2>
          </div>
          <p>{c.sections.managingCookies.content}</p>
        </section>

        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon-svg">
              <GlobeIcon size={24} className="policy-header-svg" />
            </span>
            <h2>4. {c.sections.thirdPartyCookies.title}</h2>
          </div>
          <p>{c.sections.thirdPartyCookies.content}</p>
          <div className="product-pill-row" style={{ marginTop: '12px' }}>
            <Link to="/skiltrix/privacy-policy" className="pref-btn-secondary">
              SkilTrix Advertising &amp; Cookie Disclosures →
            </Link>
            <Link to="/privacy-settings" className="pref-btn-primary">
              Manage Privacy Preferences
            </Link>
          </div>
        </section>
      </div>
    </PolicyLayout>
  );
};
