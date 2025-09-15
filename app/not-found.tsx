import { useTranslations } from 'next-intl';

export default function NotFoundPage() {
  const t = useTranslations();

  return <div>{t('home.back')}</div>;
}
