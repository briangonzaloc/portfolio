'use client';

import React from 'react';
import styles from './page.module.scss';
import { useTranslations } from 'next-intl';
import Cookies from 'js-cookie';
import { CookieConstants } from '@utils/cookies';
import { usePathname, useRouter } from '@i18n/routing';
import { useSearchParams } from 'next/navigation';
import { useTheme } from '@hooks/useTheme';

export default function Home() {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { theme, toggleTheme } = useTheme();

  /* TODO: This is just a placeholder to test language switching, will be properly reimplemented later */
  const handleChangeLanguage = () => {
    const isEnglish = Cookies.get(CookieConstants.PORTFOLIO_LOCALE) === 'en';
    const newLocale = isEnglish ? 'es' : 'en';

    Cookies.set(CookieConstants.PORTFOLIO_LOCALE, newLocale);
    const params = new URLSearchParams(searchParams);
    router.push(`${pathname}?${params.toString()}`, { scroll: false, locale: newLocale });

    router.refresh();
  };

  return (
    <div className={styles.page}>
      <header>
        <button onClick={handleChangeLanguage}>EN | ES</button>
        <button onClick={toggleTheme}>{theme === 'dark' ? '🌞 Change to Light Mode' : '🌙 Change to Dark Mode'}</button>
      </header>
      <main className={styles.main}>{t('home.welcome')}</main>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}
