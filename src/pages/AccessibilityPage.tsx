import React from 'react';
import { useI18n } from '../i18n';
import { PolicyLayout } from '../components/PolicyLayout';
import { AccessibilityIcon } from '../components/Icons';

export const AccessibilityPage: React.FC = () => {
  const { t } = useI18n();
  const a = t.accessibility;

  return (
    <PolicyLayout
      title={a.title}
      intro={a.intro}
      badge="Digital Inclusivity"
      iconNode={<AccessibilityIcon size={18} className="badge-svg-icon" />}
    >
      <div className="policy-section-group">
        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon-svg">
              <AccessibilityIcon size={24} className="policy-header-svg" />
            </span>
            <h2>1. {a.sections.commitment.title}</h2>
          </div>
          <p>{a.sections.commitment.content}</p>
        </section>

        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon">📐</span>
            <h2>2. {a.sections.standards.title}</h2>
          </div>
          <p>{a.sections.standards.content}</p>
        </section>

        <section className="policy-content-block highlight-block">
          <div className="section-title-wrap">
            <span className="section-icon">✨</span>
            <h2>3. {a.sections.features.title}</h2>
          </div>
          <p>{a.sections.features.content}</p>
        </section>

        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon">💬</span>
            <h2>4. {a.sections.feedback.title}</h2>
          </div>
          <p>{a.sections.feedback.content}</p>
        </section>
      </div>
    </PolicyLayout>
  );
};
