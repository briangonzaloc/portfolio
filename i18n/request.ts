import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import fs from 'fs';
import path from 'path';

async function loadMessages(locale: string) {
  const dirPath = path.join(process.cwd(), 'public/dictionaries', locale);
  const files = fs.readdirSync(dirPath);
  const messages: Record<string, any> = {};

  files.forEach(file => {
    if (file.endsWith('.json')) {
      const key = file.replace('.json', '');
      const filePath = path.join(dirPath, file);
      messages[key] = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }
  });

  return messages;
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  const messages = await loadMessages(locale);

  return {
    locale,
    messages,
  };
});
