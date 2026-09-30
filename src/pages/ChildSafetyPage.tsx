import React from 'react';
import { useI18n } from '../i18n';
import { PolicyLayout } from '../components/PolicyLayout';
import { ChildIcon } from '../components/Icons';

export const ChildSafetyPage: React.FC = () => {
  const { t } = useI18n();
  const cs = t.childSafety;

  return (
    <PolicyLayout
      title={cs.title}
      intro={cs.intro}
      badge="COPPA & Minor Protection"
      iconNode={<ChildIcon size={18} className="badge-svg-icon" />}
    >
      <div className="policy-section-group">
        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon-svg">
              <ChildIcon size={24} className="policy-header-svg" />
            </span>
            <h2>1. {cs.sections.ageRequirement.title}</h2>
          </div>
          <p>{cs.sections.ageRequirement.content}</p>
        </section>

        <section className="policy-content-block highlight-block">
          <div className="section-title-wrap">
            <span className="section-icon">👨‍👩‍👧</span>
            <h2>2. {cs.sections.parentalConsent.title}</h2>
          </div>
          <p>{cs.sections.parentalConsent.content}</p>
        </section>

        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon">🛡️</span>
            <h2>3. {cs.sections.dataHandling.title}</h2>
          </div>
          <p>{cs.sections.dataHandling.content}</p>
        </section>

        <section className="policy-content-block alert-block">
          <div className="section-title-wrap">
            <span className="section-icon">🚨</span>
            <h2>4. {cs.sections.reporting.title}</h2>
          </div>
          <p>{cs.sections.reporting.content}</p>
        </section>
      </div>
    </PolicyLayout>
  );
};
