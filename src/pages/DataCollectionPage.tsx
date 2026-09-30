import React from 'react';
import { useI18n } from '../i18n';
import { PolicyLayout } from '../components/PolicyLayout';
import { DataCollectionIcon } from '../components/Icons';

export const DataCollectionPage: React.FC = () => {
  const { t } = useI18n();
  const d = t.dataCollection;

  return (
    <PolicyLayout
      title={d.title}
      intro={d.intro}
      badge="Transparency & Processing"
      iconNode={<DataCollectionIcon size={18} className="badge-svg-icon" />}
    >
      <div className="policy-section-group">
        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon-svg">
              <DataCollectionIcon size={24} className="policy-header-svg" />
            </span>
            <h2>1. {d.sections.whatWeCollect.title}</h2>
          </div>
          <p>{d.sections.whatWeCollect.content}</p>
        </section>

        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon">🔄</span>
            <h2>2. {d.sections.howWeCollect.title}</h2>
          </div>
          <p>{d.sections.howWeCollect.content}</p>
        </section>

        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon">🎯</span>
            <h2>3. {d.sections.purpose.title}</h2>
          </div>
          <p>{d.sections.purpose.content}</p>
        </section>

        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon">⚖️</span>
            <h2>4. {d.sections.legalBasis.title}</h2>
          </div>
          <p>{d.sections.legalBasis.content}</p>
        </section>

        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon">🏢</span>
            <h2>5. {d.sections.storage.title}</h2>
          </div>
          <p>{d.sections.storage.content}</p>
        </section>

        <section className="policy-content-block highlight-block">
          <div className="section-title-wrap">
            <span className="section-icon">👤</span>
            <h2>6. {d.sections.userControl.title}</h2>
          </div>
          <p>{d.sections.userControl.content}</p>
        </section>
      </div>
    </PolicyLayout>
  );
};
