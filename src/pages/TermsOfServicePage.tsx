import React from 'react';
import { useI18n } from '../i18n';
import { PolicyLayout } from '../components/PolicyLayout';

export const TermsOfServicePage: React.FC = () => {
  const { t } = useI18n();
  const tr = t.terms;

  return (
    <PolicyLayout
      title={tr.title}
      intro={tr.intro}
      badge="Terms & Agreement"
      icon="📜"
    >
      <div className="policy-section-group">
        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon">✅</span>
            <h2>1. {tr.sections.acceptance.title}</h2>
          </div>
          <p>{tr.sections.acceptance.content}</p>
        </section>

        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon">👤</span>
            <h2>2. {tr.sections.useOfService.title}</h2>
          </div>
          <p>{tr.sections.useOfService.content}</p>
        </section>

        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon">🔑</span>
            <h2>3. {tr.sections.userAccounts.title}</h2>
          </div>
          <p>{tr.sections.userAccounts.content}</p>
        </section>

        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon">💡</span>
            <h2>4. {tr.sections.intellectualProperty.title}</h2>
          </div>
          <p>{tr.sections.intellectualProperty.content}</p>
        </section>

        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon">🚫</span>
            <h2>5. {tr.sections.prohibitedActivities.title}</h2>
          </div>
          <p>{tr.sections.prohibitedActivities.content}</p>
        </section>

        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon">⚖️</span>
            <h2>6. {tr.sections.limitation.title}</h2>
          </div>
          <p>{tr.sections.limitation.content}</p>
        </section>

        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon">🚪</span>
            <h2>7. {tr.sections.termination.title}</h2>
          </div>
          <p>{tr.sections.termination.content}</p>
        </section>

        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon">🏛️</span>
            <h2>8. {tr.sections.governingLaw.title}</h2>
          </div>
          <p>{tr.sections.governingLaw.content}</p>
        </section>
      </div>
    </PolicyLayout>
  );
};
