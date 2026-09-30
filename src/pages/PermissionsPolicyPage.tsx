import React from 'react';
import { useI18n } from '../i18n';
import { PolicyLayout } from '../components/PolicyLayout';
import { PermissionTester } from '../components/PermissionTester';
import { CameraIcon, MicIcon, LocationIcon, BellIcon } from '../components/Icons';

export const PermissionsPolicyPage: React.FC = () => {
  const { t } = useI18n();
  const p = t.permissions;

  return (
    <PolicyLayout
      title={p.title}
      intro={p.intro}
      badge="Device & Hardware"
      iconNode={<CameraIcon size={18} className="badge-svg-icon" />}
    >
      <div className="policy-section-group">
        {/* Interactive Permission Sandbox */}
        <section className="policy-content-block highlight-block">
          <h2>Live Permission Testing Tool</h2>
          <p>
            You can test the actual browser prompts and permission requests for your camera, microphone, location, and notifications directly below:
          </p>
          <PermissionTester />
        </section>

        {/* Camera Permission Section */}
        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon-svg">
              <CameraIcon size={24} className="policy-header-svg" />
            </span>
            <h2>1. {p.sections.camera.title}</h2>
          </div>
          <div className="subsection">
            <h3>Why We Request Camera Access</h3>
            <p>{p.sections.camera.why}</p>
          </div>
          <div className="subsection">
            <h3>How to Manage or Revoke Camera Access</h3>
            <p>{p.sections.camera.howToManage}</p>
          </div>
          <div className="callout info">
            <strong>🔒 Privacy Guarantee:</strong> Your camera feed is processed in real time and is NEVER continuously recorded, stored, or broadcast without your direct action and visual feedback.
          </div>
        </section>

        {/* Microphone Permission Section */}
        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon-svg">
              <MicIcon size={24} className="policy-header-svg" />
            </span>
            <h2>2. {p.sections.microphone.title}</h2>
          </div>
          <div className="subsection">
            <h3>Why We Request Microphone Access</h3>
            <p>{p.sections.microphone.why}</p>
          </div>
          <div className="subsection">
            <h3>How to Manage or Revoke Microphone Access</h3>
            <p>{p.sections.microphone.howToManage}</p>
          </div>
          <div className="callout info">
            <strong>🔒 Audio Protection:</strong> Audio inputs are captured only when an active voice feature is triggered. Audio data is discarded immediately after processing unless you explicitly save a voice message.
          </div>
        </section>

        {/* Location Permission Section */}
        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon-svg">
              <LocationIcon size={24} className="policy-header-svg" />
            </span>
            <h2>3. {p.sections.location.title}</h2>
          </div>
          <div className="subsection">
            <h3>Why We Request Location Access</h3>
            <p>{p.sections.location.why}</p>
          </div>
          <div className="subsection">
            <h3>How to Manage Location Access</h3>
            <p>{p.sections.location.howToManage}</p>
          </div>
        </section>

        {/* Notifications Permission Section */}
        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon-svg">
              <BellIcon size={24} className="policy-header-svg" />
            </span>
            <h2>4. {p.sections.notifications.title}</h2>
          </div>
          <div className="subsection">
            <h3>Why We Request Notification Access</h3>
            <p>{p.sections.notifications.why}</p>
          </div>
          <div className="subsection">
            <h3>How to Manage Notification Access</h3>
            <p>{p.sections.notifications.howToManage}</p>
          </div>
        </section>

        {/* Local Storage & Cache */}
        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon">💾</span>
            <h2>5. {p.sections.storage.title}</h2>
          </div>
          <div className="subsection">
            <h3>Why We Access Local Storage</h3>
            <p>{p.sections.storage.why}</p>
          </div>
          <div className="subsection">
            <h3>How to Clear Storage</h3>
            <p>{p.sections.storage.howToManage}</p>
          </div>
        </section>

        {/* Contacts Access */}
        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon">👥</span>
            <h2>6. {p.sections.contacts.title}</h2>
          </div>
          <div className="subsection">
            <h3>Why We Request Contacts Access</h3>
            <p>{p.sections.contacts.why}</p>
          </div>
          <div className="subsection">
            <h3>How to Manage Contacts Access</h3>
            <p>{p.sections.contacts.howToManage}</p>
          </div>
        </section>

        {/* Biometric Authentication */}
        <section className="policy-content-block">
          <div className="section-title-wrap">
            <span className="section-icon">👆</span>
            <h2>7. {p.sections.biometric.title}</h2>
          </div>
          <div className="subsection">
            <h3>Why We Support Biometrics (Fingerprint / Face ID)</h3>
            <p>{p.sections.biometric.why}</p>
          </div>
          <div className="subsection">
            <h3>How to Manage Biometrics</h3>
            <p>{p.sections.biometric.howToManage}</p>
          </div>
          <div className="callout security">
            <strong>🛡️ Hardware Enclave:</strong> Biometric raw templates never leave your device's Secure Enclave / Trusted Execution Environment (TEE). We receive only cryptographic pass/fail verification tokens.
          </div>
        </section>

        {/* Core Guarantee */}
        <section className="policy-content-block callout alert">
          <h2>8. Fundamental Policy Guarantee</h2>
          <p>{p.sections.dataNotStored}</p>
        </section>
      </div>
    </PolicyLayout>
  );
};
