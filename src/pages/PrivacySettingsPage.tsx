import React from 'react';
import { useParams } from 'react-router-dom';
import { PolicyLayout } from '../components/PolicyLayout';
import { PrivacyPreferencesPanel } from '../components/PrivacyPreferencesPanel';
import { getProductPolicy } from '../data/productPolicies';
import { GearIcon } from '../components/Icons';

export const PrivacySettingsPage: React.FC = () => {
  const { productSlug } = useParams<{ productSlug?: string }>();
  const product = getProductPolicy(productSlug);

  return (
    <PolicyLayout
      title={
        product
          ? `${product.name} Privacy Settings & Consent Guide`
          : 'Centralized Privacy Settings & Rights Hub'
      }
      intro="Review product-specific privacy policies, advertising disclosures, GDPR/US state privacy rights, and where to manage or withdraw consent on each AscentraCore platform."
      badge="Privacy Preferences"
      iconNode={<GearIcon size={18} className="badge-svg-icon" />}
    >
      <div className="policy-section-group">
        <section className="policy-content-block">
          <PrivacyPreferencesPanel initialProductSlug={product?.slug || 'skiltrix'} />
        </section>
      </div>
    </PolicyLayout>
  );
};
