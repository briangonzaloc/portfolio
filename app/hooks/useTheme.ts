import { useState, useEffect } from 'react';

const PORTFOLIO_THEME = 'portfolio-theme';
type THEME_VARIANT = 'light' | 'dark';

interface UseThemeProps {
  theme: THEME_VARIANT;
  toggleTheme: () => void;
}

export function useTheme(): UseThemeProps {
  const [theme, setTheme] = useState<THEME_VARIANT>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem(PORTFOLIO_THEME) as THEME_VARIANT;
    if (savedTheme === 'dark' || savedTheme === 'light') {
      applyTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      applyTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  const applyTheme = (newTheme: THEME_VARIANT) => {
    setTheme(newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
    localStorage.setItem(PORTFOLIO_THEME, newTheme);
  };

  const toggleTheme = () => {
    applyTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return { theme, toggleTheme };
}
