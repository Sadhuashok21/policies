import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { Translations } from './en';
import en from './en';

// Supported languages
export const SUPPORTED_LANGUAGES = {
  en: 'English',
  hi: 'हिन्दी',
  ta: 'தமிழ்',
  te: 'తెలుగు',
  kn: 'ಕನ್ನಡ',
  zh: '中文',
  ja: '日本語',
  ko: '한국어',
  fr: 'Français',
  de: 'Deutsch',
  es: 'Español',
  pt: 'Português',
  ru: 'Русский',
  it: 'Italiano',
  ar: 'العربية',
  ur: 'اردو',
  bn: 'বাংলা',
  th: 'ไทย',
  ms: 'Bahasa Melayu',
} as const;

export type LanguageCode = keyof typeof SUPPORTED_LANGUAGES;

// RTL languages
export const RTL_LANGUAGES: LanguageCode[] = ['ar', 'ur'];

// Lazy load translations for non-English languages
const translationLoaders: Record<Exclude<LanguageCode, 'en'>, () => Promise<{ default: Translations }>> = {
  hi: () => import('./hi'),
  ta: () => import('./ta'),
  te: () => import('./te'),
  kn: () => import('./kn'),
  zh: () => import('./zh'),
  ja: () => import('./ja'),
  ko: () => import('./ko'),
  fr: () => import('./fr'),
  de: () => import('./de'),
  es: () => import('./es'),
  pt: () => import('./pt'),
  ru: () => import('./ru'),
  it: () => import('./it'),
  ar: () => import('./ar'),
  ur: () => import('./ur'),
  bn: () => import('./bn'),
  th: () => import('./th'),
  ms: () => import('./ms'),
};

// Cache loaded translations
const translationCache: Partial<Record<LanguageCode, Translations>> = { en };

interface I18nContextType {
  language: LanguageCode;
  t: Translations;
  setLanguage: (lang: LanguageCode) => Promise<void>;
  isRTL: boolean;
}

const I18nContext = createContext<I18nContextType>({
  language: 'en',
  t: en,
  setLanguage: async () => {},
  isRTL: false,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    const saved = localStorage.getItem('policy-language');
    return (saved && saved in SUPPORTED_LANGUAGES) ? saved as LanguageCode : 'en';
  });
  const [translations, setTranslations] = useState<Translations>(
    translationCache[language] || en
  );

  const setLanguage = useCallback(async (lang: LanguageCode) => {
    if (lang === 'en') {
      setTranslations(en);
      setLanguageState('en');
      localStorage.setItem('policy-language', 'en');
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
      return;
    }

    if (translationCache[lang]) {
      setTranslations(translationCache[lang]!);
      setLanguageState(lang);
      localStorage.setItem('policy-language', lang);
      document.documentElement.dir = RTL_LANGUAGES.includes(lang) ? 'rtl' : 'ltr';
      document.documentElement.lang = lang;
      return;
    }

    try {
      const loader = translationLoaders[lang as Exclude<LanguageCode, 'en'>];
      const module = await loader();
      translationCache[lang] = module.default;
      setTranslations(module.default);
      setLanguageState(lang);
      localStorage.setItem('policy-language', lang);
      document.documentElement.dir = RTL_LANGUAGES.includes(lang) ? 'rtl' : 'ltr';
      document.documentElement.lang = lang;
    } catch (error) {
      console.error(`Failed to load translations for ${lang}:`, error);
      // Fallback to English
      setTranslations(en);
      setLanguageState('en');
    }
  }, []);

  return (
    <I18nContext.Provider
      value={{
        language,
        t: translations,
        setLanguage,
        isRTL: RTL_LANGUAGES.includes(language),
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

export type { Translations };
