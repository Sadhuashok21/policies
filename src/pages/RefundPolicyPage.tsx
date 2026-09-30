import React from 'react';
import { useI18n } from '../i18n';
import { PolicyLayout } from '../components/PolicyLayout';
import { CreditCardIcon } from '../components/Icons';

export const RefundPolicyPage: React.FC = () => {
  const { t } = useI18n();
  const r = t.refund;

  return (
    <PolicyLayout
      title={r.title}
      intro={r.intro}
      badge="Billing & Satisfaction"
      iconNode={<CreditCardIcon size={18} className="badge-svg-icon" />}
    >
      <div className="policy-section-group">
        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon-svg">
              <CreditCardIcon size={24} className="policy-header-svg" />
            </span>
            <h2>1. {r.sections.eligibility.title}</h2>
          </div>
          <p>{r.sections.eligibility.content}</p>
        </section>

        <section className="policy-content-block highlight-block">
          <div className="section-title-wrap">
            <span className="section-icon">🔄</span>
            <h2>2. {r.sections.process.title}</h2>
          </div>
          <p>{r.sections.process.content}</p>
        </section>

        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon">❌</span>
            <h2>3. {r.sections.nonRefundable.title}</h2>
          </div>
          <p>{r.sections.nonRefundable.content}</p>
        </section>

        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon">⏱️</span>
            <h2>4. {r.sections.timeline.title}</h2>
          </div>
          <p>{r.sections.timeline.content}</p>
        </section>
      </div>
    </PolicyLayout>
  );
};
