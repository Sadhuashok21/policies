// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../auth/AuthContext';
import { FontProvider } from '../context/FontContext';
import { I18nProvider } from '../i18n';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { HomePage } from '../pages/HomePage';
import { PrivacyPolicyPage } from '../pages/PrivacyPolicyPage';
import { TermsOfServicePage } from '../pages/TermsOfServicePage';
import { PermissionsPolicyPage } from '../pages/PermissionsPolicyPage';
import { DataCollectionPage } from '../pages/DataCollectionPage';
import { CookiePolicyPage } from '../pages/CookiePolicyPage';
import { RefundPolicyPage } from '../pages/RefundPolicyPage';
import { DisclaimerPage } from '../pages/DisclaimerPage';
import { AccessibilityPage } from '../pages/AccessibilityPage';
import { ChildSafetyPage } from '../pages/ChildSafetyPage';
import { NotFound } from '../pages/NotFound';
import { PermissionTester } from '../components/PermissionTester';

const renderAppWithRoute = (initialRoute = '/') => {
  return render(
    <AuthProvider config={{ clientId: 'policies' }}>
      <FontProvider>
        <I18nProvider>
          <MemoryRouter initialEntries={[initialRoute]}>
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
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </MemoryRouter>
        </I18nProvider>
      </FontProvider>
    </AuthProvider>
  );
};

describe('Policy App - Links and Buttons Functionality Tests', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    localStorage.clear();
    document.documentElement.lang = 'en';
    document.documentElement.setAttribute('data-font', 'jakarta');
  });

  afterEach(() => {
    cleanup();
  });

  it('1. Header desktop navigation links render with correct hrefs', () => {
    renderAppWithRoute('/');
    const desktopNav = document.querySelector('.desktop-nav');
    expect(desktopNav).toBeTruthy();

    const links = desktopNav?.querySelectorAll('a');
    expect(links?.length).toBe(5);

    const hrefs = Array.from(links || []).map((a) => a.getAttribute('href'));
    expect(hrefs).toEqual(['/', '/privacy', '/permissions', '/data-collection', '/cookies']);
  });

  it('2. Header mobile hamburger menu toggles mobile drawer and renders links', () => {
    renderAppWithRoute('/');
    const toggleBtn = document.querySelector('.mobile-menu-toggle') as HTMLButtonElement;
    expect(toggleBtn).toBeTruthy();
    expect(toggleBtn.getAttribute('aria-expanded')).toBe('false');

    const drawer = document.querySelector('.mobile-menu-drawer');
    expect(drawer?.classList.contains('open')).toBe(false);

    // Click hamburger button to open
    fireEvent.click(toggleBtn);
    expect(toggleBtn.getAttribute('aria-expanded')).toBe('true');
    expect(drawer?.classList.contains('open')).toBe(true);

    // Verify mobile links (10 policy destinations + 1 sign in button)
    const mobileLinks = drawer?.querySelectorAll('.mobile-nav-link');
    expect(mobileLinks?.length).toBe(11);

    // Click hamburger button to close
    fireEvent.click(toggleBtn);
    expect(toggleBtn.getAttribute('aria-expanded')).toBe('false');
    expect(drawer?.classList.contains('open')).toBe(false);
  });

  it('3. Header Font selector switches the font style', () => {
    renderAppWithRoute('/');
    const fontSelect = document.querySelector('.font-select') as HTMLSelectElement;
    expect(fontSelect).toBeTruthy();

    // Default is jakarta
    expect(fontSelect.value).toBe('jakarta');

    // Change to outfit
    fireEvent.change(fontSelect, { target: { value: 'outfit' } });
    expect(fontSelect.value).toBe('outfit');
    expect(document.documentElement.getAttribute('data-font')).toBe('outfit');

    // Change to poppins
    fireEvent.change(fontSelect, { target: { value: 'poppins' } });
    expect(document.documentElement.getAttribute('data-font')).toBe('poppins');
  });

  it('4. Header Language selector switches the language dynamically', async () => {
    renderAppWithRoute('/');
    const langSelect = document.querySelector('#language-select') as HTMLSelectElement;
    expect(langSelect).toBeTruthy();
    expect(langSelect.value).toBe('en');

    // Change to Spanish
    fireEvent.change(langSelect, { target: { value: 'es' } });
    await waitFor(() => {
      expect(document.documentElement.getAttribute('lang')).toBe('es');
    });

    // Verify header nav translated to Spanish in desktop nav
    expect(screen.getAllByText('Inicio').length).toBeGreaterThan(0);

    // Switch back to English
    fireEvent.change(langSelect, { target: { value: 'en' } });
    await waitFor(() => {
      expect(document.documentElement.getAttribute('lang')).toBe('en');
    });
  });

  it('5. HomePage font style pills switch fonts on click', () => {
    renderAppWithRoute('/');
    const fontPills = document.querySelectorAll('.font-pill');
    expect(fontPills.length).toBe(5);

    const interBtn = Array.from(fontPills).find((el) => el.textContent === 'Inter') as HTMLButtonElement;
    expect(interBtn).toBeTruthy();

    fireEvent.click(interBtn);
    expect(document.documentElement.getAttribute('data-font')).toBe('inter');
    expect(interBtn.classList.contains('active')).toBe(true);

    const lexendBtn = Array.from(fontPills).find((el) => el.textContent === 'Lexend') as HTMLButtonElement;
    fireEvent.click(lexendBtn);
    expect(document.documentElement.getAttribute('data-font')).toBe('lexend');
    expect(lexendBtn.classList.contains('active')).toBe(true);
  });

  it('6. HomePage language pills switch language on click', async () => {
    renderAppWithRoute('/');
    const langPills = document.querySelectorAll('.hero-lang-bar .lang-pill');
    expect(langPills.length).toBe(19);

    const frenchPill = Array.from(langPills).find((el) => el.textContent === 'Français') as HTMLButtonElement;
    expect(frenchPill).toBeTruthy();

    fireEvent.click(frenchPill);
    await waitFor(() => {
      expect(document.documentElement.getAttribute('lang')).toBe('fr');
    });
    expect(frenchPill.classList.contains('active')).toBe(true);

    const englishPill = Array.from(langPills).find((el) => el.textContent === 'English') as HTMLButtonElement;
    fireEvent.click(englishPill);
    await waitFor(() => {
      expect(document.documentElement.getAttribute('lang')).toBe('en');
    });
  });

  it('7. HomePage search input filters policy cards and clear button resets it', () => {
    renderAppWithRoute('/');
    const searchInput = document.querySelector('.policy-search-input') as HTMLInputElement;
    expect(searchInput).toBeTruthy();

    // Initially 9 cards
    let cards = document.querySelectorAll('.policy-card');
    expect(cards.length).toBe(9);

    // Type "cookies"
    fireEvent.change(searchInput, { target: { value: 'cookies' } });
    cards = document.querySelectorAll('.policy-card');
    expect(cards.length).toBe(1);
    expect(cards[0].getAttribute('href')).toBe('/cookies');

    // Clear search button should appear
    const clearBtn = document.querySelector('.clear-search') as HTMLButtonElement;
    expect(clearBtn).toBeTruthy();

    // Click clear search button
    fireEvent.click(clearBtn);
    expect(searchInput.value).toBe('');

    // All 9 cards restored
    cards = document.querySelectorAll('.policy-card');
    expect(cards.length).toBe(9);
  });

  it('8. HomePage policy grid contains all 9 policy cards with valid paths', () => {
    renderAppWithRoute('/');
    const cards = document.querySelectorAll('.policy-card');
    expect(cards.length).toBe(9);

    const paths = Array.from(cards).map((c) => c.getAttribute('href'));
    expect(paths).toEqual([
      '/privacy',
      '/permissions',
      '/data-collection',
      '/terms',
      '/cookies',
      '/refund',
      '/disclaimer',
      '/accessibility',
      '/child-safety',
    ]);
  });

  it('9. PermissionTester buttons handle user clicks and update state', async () => {
    render(
      <I18nProvider>
        <PermissionTester />
      </I18nProvider>
    );

    const buttons = document.querySelectorAll('.tester-btn');
    expect(buttons.length).toBe(4);

    // Mock mediaDevices
    const stopMock = vi.fn();
    const getUserMediaMock = vi.fn().mockResolvedValue({
      getTracks: () => [{ stop: stopMock }],
    });
    Object.defineProperty(globalThis.navigator, 'mediaDevices', {
      value: { getUserMedia: getUserMediaMock },
      configurable: true,
      writable: true,
    });

    // 1. Camera test button
    const cameraBtn = buttons[0] as HTMLButtonElement;
    expect(cameraBtn.textContent).toContain('Request Camera');
    await fireEvent.click(cameraBtn);
    expect(getUserMediaMock).toHaveBeenCalledWith({ video: true });

    // 2. Microphone test button
    const micBtn = buttons[1] as HTMLButtonElement;
    expect(micBtn.textContent).toContain('Request Mic');
    await fireEvent.click(micBtn);
    expect(getUserMediaMock).toHaveBeenCalledWith({ audio: true });

    // 3. Geolocation button
    const getCurrentPositionMock = vi.fn((success) =>
      success({ coords: { latitude: 37.7749, longitude: -122.4194 } })
    );
    Object.defineProperty(globalThis.navigator, 'geolocation', {
      value: { getCurrentPosition: getCurrentPositionMock },
      configurable: true,
      writable: true,
    });
    const geoBtn = buttons[2] as HTMLButtonElement;
    expect(geoBtn.textContent).toContain('Request Location');
    await fireEvent.click(geoBtn);
    expect(getCurrentPositionMock).toHaveBeenCalled();

    // 4. Notification button
    const requestPermissionMock = vi.fn().mockResolvedValue('granted');
    globalThis.Notification = {
      requestPermission: requestPermissionMock,
    } as unknown as typeof Notification;

    const notifBtn = buttons[3] as HTMLButtonElement;
    expect(notifBtn.textContent).toContain('Request Notifications');
    await fireEvent.click(notifBtn);
    expect(requestPermissionMock).toHaveBeenCalled();
  });

  it('10. PolicyLayout back-to-home link points to /', () => {
    renderAppWithRoute('/privacy');
    const backLink = document.querySelector('.back-link');
    expect(backLink).toBeTruthy();
    expect(backLink?.getAttribute('href')).toBe('/');
  });

  it('11. PolicyLayout inline language selector changes language', async () => {
    renderAppWithRoute('/privacy');
    const inlineLangSelect = document.querySelector('.policy-lang-inline') as HTMLSelectElement;
    expect(inlineLangSelect).toBeTruthy();

    fireEvent.change(inlineLangSelect, { target: { value: 'de' } });
    await waitFor(() => {
      expect(document.documentElement.getAttribute('lang')).toBe('de');
    });
  });

  it('12. PolicyLayout mobile sidebar pill toggles sidebar expansion', () => {
    renderAppWithRoute('/terms');
    const pillBtn = document.querySelector('.mobile-nav-pill-btn') as HTMLButtonElement;
    expect(pillBtn).toBeTruthy();

    const sidebar = document.querySelector('.policy-sidebar');
    expect(sidebar?.classList.contains('mobile-expanded')).toBe(false);

    fireEvent.click(pillBtn);
    expect(sidebar?.classList.contains('mobile-expanded')).toBe(true);

    fireEvent.click(pillBtn);
    expect(sidebar?.classList.contains('mobile-expanded')).toBe(false);
  });

  it('13. PolicyLayout sidebar language chips change language', async () => {
    renderAppWithRoute('/terms');
    const langChips = document.querySelectorAll('.lang-chips .lang-chip');
    expect(langChips.length).toBe(19);

    const hiChip = Array.from(langChips).find((c) => c.textContent === 'हिन्दी') as HTMLButtonElement;
    expect(hiChip).toBeTruthy();

    fireEvent.click(hiChip);
    await waitFor(() => {
      expect(document.documentElement.getAttribute('lang')).toBe('hi');
    });
  });

  it('14. PolicyLayout sidebar navigation links render all 9 policy destinations', () => {
    renderAppWithRoute('/terms');
    const sidebarLinks = document.querySelectorAll('.sidebar-policy-nav a');
    expect(sidebarLinks.length).toBe(9);

    const hrefs = Array.from(sidebarLinks).map((a) => a.getAttribute('href'));
    expect(hrefs).toEqual([
      '/privacy',
      '/terms',
      '/permissions',
      '/data-collection',
      '/cookies',
      '/refund',
      '/disclaimer',
      '/accessibility',
      '/child-safety',
    ]);
  });

  it('15. Footer links render valid hrefs for legal and data sections', async () => {
    renderAppWithRoute('/');
    const footer = document.querySelector('.site-footer');
    expect(footer).toBeTruthy();

    const links = footer?.querySelectorAll('.footer-links a');
    expect(links?.length).toBe(9);

    const hrefs = Array.from(links || []).map((a) => a.getAttribute('href'));
    expect(hrefs).toEqual([
      '/privacy',
      '/terms',
      '/cookies',
      '/disclaimer',
      '/permissions',
      '/data-collection',
      '/refund',
      '/accessibility',
      '/child-safety',
    ]);

    // Footer language select
    const footerLangSelect = footer?.querySelector('.language-select-footer') as HTMLSelectElement;
    expect(footerLangSelect).toBeTruthy();
    fireEvent.change(footerLangSelect, { target: { value: 'it' } });
    await waitFor(() => {
      expect(document.documentElement.getAttribute('lang')).toBe('it');
    });
  });

  it('16. 404 NotFound page renders with Go to Policies Home link and Go Back button', () => {
    renderAppWithRoute('/random-invalid-page');

    // Verify 404 message
    expect(screen.getByText("404 That's an error")).toBeTruthy();

    // Verify "Go to Policies Home" link
    const homeLink = screen.getByRole('link', { name: /Go to Policies Home/i });
    expect(homeLink).toBeTruthy();
    expect(homeLink.getAttribute('href')).toBe('/');

    // Verify "Go Back" button
    const backSpy = vi.spyOn(window.history, 'back').mockImplementation(() => {});
    const backBtn = screen.getByRole('button', { name: /Go Back/i });
    expect(backBtn).toBeTruthy();
    fireEvent.click(backBtn);
    expect(backSpy).toHaveBeenCalled();
  });

  it('17. TermsOfServicePage renders all 8 sections with SVG icons', () => {
    renderAppWithRoute('/terms');
    const headerSvgs = document.querySelectorAll('.policy-header-svg');
    expect(headerSvgs.length).toBe(8);

    const sections = document.querySelectorAll('.policy-content-block');
    expect(sections.length).toBe(8);
  });

  it('18. DisclaimerPage renders all 4 sections with SVG icons', () => {
    renderAppWithRoute('/disclaimer');
    const headerSvgs = document.querySelectorAll('.policy-header-svg');
    expect(headerSvgs.length).toBe(4);
  });

  it('19. CookiePolicyPage renders all 4 cookie category cards with SVG circle dots', () => {
    renderAppWithRoute('/cookies');
    const cookieCards = document.querySelectorAll('.cookie-type-card');
    expect(cookieCards.length).toBe(4);

    const dots = document.querySelectorAll('.cookie-type-card svg');
    expect(dots.length).toBe(4);
  });

  it('20. PermissionsPolicyPage renders all hardware sections and lock icons', () => {
    renderAppWithRoute('/permissions');
    const headerSvgs = document.querySelectorAll('.policy-header-svg');
    // 7 permission sections have header svgs
    expect(headerSvgs.length).toBe(7);

    // Callouts have lock and shield icons
    const callouts = document.querySelectorAll('.callout');
    expect(callouts.length).toBe(4);
  });
});
