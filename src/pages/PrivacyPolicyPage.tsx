import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n';
import { PolicyLayout } from '../components/PolicyLayout';
import { PRODUCT_POLICIES } from '../data/productPolicies';
import {
  ShieldIcon,
  InboxIcon,
  GearIcon,
  HandshakeIcon,
  ScaleIcon,
  HourglassIcon,
  LinkIcon,
  FileEditIcon,
  GlobeIcon,
} from '../components/Icons';

export const PrivacyPolicyPage: React.FC = () => {
  const { t } = useI18n();
  const p = t.privacy;

  return (
    <PolicyLayout
      title={p.title}
      intro={p.intro}
      badge="Core Legal Policy"
      iconNode={<ShieldIcon size={18} className="badge-svg-icon" />}
    >
      <div className="policy-section-group">
        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon-svg">
              <InboxIcon size={24} className="policy-header-svg" />
            </span>
            <h2>1. {p.sections.informationWeCollect.title}</h2>
          </div>
          <div className="subsection">
            <p>{p.sections.informationWeCollect.personal}</p>
          </div>
          <div className="subsection">
            <p>{p.sections.informationWeCollect.usage}</p>
          </div>
          <div className="subsection">
            <p>{p.sections.informationWeCollect.device}</p>
          </div>
        </section>

        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon-svg">
              <GearIcon size={24} className="policy-header-svg" />
            </span>
            <h2>2. {p.sections.howWeUse.title}</h2>
          </div>
          <p>{p.sections.howWeUse.content}</p>
        </section>

        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon-svg">
              <HandshakeIcon size={24} className="policy-header-svg" />
            </span>
            <h2>3. {p.sections.dataSharing.title}</h2>
          </div>
          <p>{p.sections.dataSharing.content}</p>
        </section>

        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon-svg">
              <ShieldIcon size={24} className="policy-header-svg" />
            </span>
            <h2>4. {p.sections.dataSecurity.title}</h2>
          </div>
          <p>{p.sections.dataSecurity.content}</p>
        </section>

        <section className="policy-content-block highlight-block">
          <div className="section-title-wrap">
            <span className="section-icon-svg">
              <ScaleIcon size={24} className="policy-header-svg" />
            </span>
            <h2>5. {p.sections.yourRights.title}</h2>
          </div>
          <p>{p.sections.yourRights.content}</p>
        </section>

        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon-svg">
              <HourglassIcon size={24} className="policy-header-svg" />
            </span>
            <h2>6. {p.sections.retention.title}</h2>
          </div>
          <p>{p.sections.retention.content}</p>
        </section>

        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon-svg">
              <LinkIcon size={24} className="policy-header-svg" />
            </span>
            <h2>7. {p.sections.thirdPartyLinks.title}</h2>
          </div>
          <p>{p.sections.thirdPartyLinks.content}</p>
        </section>

        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon-svg">
              <FileEditIcon size={24} className="policy-header-svg" />
            </span>
            <h2>8. {p.sections.changes.title}</h2>
          </div>
          <p>{p.sections.changes.content}</p>
        </section>

        <section className="policy-content-block highlight-block">
          <div className="section-title-wrap">
            <span className="section-icon-svg">
              <GlobeIcon size={24} className="policy-header-svg" />
            </span>
            <h2>9. Product-Specific Policies &amp; Advertising Disclosures</h2>
          </div>
          <p>
            Each AscentraCore Solutions application and website maintains its own product-specific
            privacy policy and advertising disclosure detailing integrated SDKs, cookies, and
            platform-local consent controls:
          </p>
          <span id="ezoic-privacy-policy-embed" className="ezoic-embed-slot"></span>
          <div className="product-pill-row" style={{ marginTop: '12px' }}>
            {PRODUCT_POLICIES.map((prod) => (
              <Link
                key={prod.slug}
                to={`/${prod.slug}/privacy-policy`}
                className="pref-btn-secondary"
              >
                {prod.name} Privacy Policy →
              </Link>
            ))}
            <Link to="/privacy-settings" className="pref-btn-primary">
              Privacy Settings Hub
            </Link>
          </div>
        </section>
      </div>
    </PolicyLayout>
  );
};
