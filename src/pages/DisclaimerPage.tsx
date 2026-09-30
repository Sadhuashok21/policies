import React from 'react';
import { useI18n } from '../i18n';
import { PolicyLayout } from '../components/PolicyLayout';

export const DisclaimerPage: React.FC = () => {
  const { t } = useI18n();
  const d = t.disclaimer;

  return (
    <PolicyLayout
      title={d.title}
      intro={d.intro}
      badge="Legal Notice"
      icon="⚠️"
    >
      <div className="policy-section-group">
        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon">ℹ️</span>
            <h2>1. {d.sections.generalDisclaimer.title}</h2>
          </div>
          <p>{d.sections.generalDisclaimer.content}</p>
        </section>

        <section className="policy-content-block alert-block">
          <div className="section-title-wrap">
            <span className="section-icon">💼</span>
            <h2>2. {d.sections.professionalAdvice.title}</h2>
          </div>
          <p>{d.sections.professionalAdvice.content}</p>
        </section>

        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon">🔗</span>
            <h2>3. {d.sections.externalLinks.title}</h2>
          </div>
          <p>{d.sections.externalLinks.content}</p>
        </section>

        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon">🎯</span>
            <h2>4. {d.sections.accuracy.title}</h2>
          </div>
          <p>{d.sections.accuracy.content}</p>
        </section>
      </div>
    </PolicyLayout>
  );
};
