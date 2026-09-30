import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { I18nProvider } from './i18n';
import { FontProvider } from './context/FontContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';
import { PermissionsPolicyPage } from './pages/PermissionsPolicyPage';
import { DataCollectionPage } from './pages/DataCollectionPage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import { RefundPolicyPage } from './pages/RefundPolicyPage';
import { DisclaimerPage } from './pages/DisclaimerPage';
import { AccessibilityPage } from './pages/AccessibilityPage';
import { ChildSafetyPage } from './pages/ChildSafetyPage';
import './policies.css';

export function App() {
  return (
    <FontProvider>
      <I18nProvider>
        <BrowserRouter>
          <div className="app-container">
            <Header />
            <div className="main-content-wrapper">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/privacy" element={<PrivacyPolicyPage />} />
                <Route path="/terms" element={<TermsOfServicePage />} />
                <Route path="/permissions" element={<PermissionsPolicyPage />} />
                <Route path="/data-collection" element={<DataCollectionPage />} />
                <Route path="/cookies" element={<CookiePolicyPage />} />
                <Route path="/refund" element={<RefundPolicyPage />} />
                <Route path="/disclaimer" element={<DisclaimerPage />} />
                <Route path="/accessibility" element={<AccessibilityPage />} />
                <Route path="/child-safety" element={<ChildSafetyPage />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </I18nProvider>
    </FontProvider>
  );
}

export default App;
