import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type FontChoice = 'jakarta' | 'inter' | 'outfit' | 'poppins' | 'lexend';

export const AVAILABLE_FONTS: { id: FontChoice; label: string; preview: string }[] = [
  { id: 'jakarta', label: 'Plus Jakarta Sans', preview: 'Modern & Crisp' },
  { id: 'inter', label: 'Inter', preview: 'Clean & Neutral' },
  { id: 'outfit', label: 'Outfit', preview: 'Elegant & Geometric' },
  { id: 'poppins', label: 'Poppins', preview: 'Friendly & Rounded' },
  { id: 'lexend', label: 'Lexend', preview: 'High Legibility' },
];

interface FontContextType {
  font: FontChoice;
  setFont: (font: FontChoice) => void;
}

const FontContext = createContext<FontContextType>({
  font: 'jakarta',
  setFont: () => {},
});

export const FontProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [font, setFontState] = useState<FontChoice>(() => {
    const saved = localStorage.getItem('policy-font');
    if (saved && AVAILABLE_FONTS.some((f) => f.id === saved)) {
      return saved as FontChoice;
    }
    return 'jakarta';
  });

  const setFont = (newFont: FontChoice) => {
    setFontState(newFont);
    localStorage.setItem('policy-font', newFont);
    document.documentElement.setAttribute('data-font', newFont);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-font', font);
  }, [font]);

  return (
    <FontContext.Provider value={{ font, setFont }}>
      {children}
    </FontContext.Provider>
  );
};

export const useFont = () => useContext(FontContext);
