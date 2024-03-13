import { render } from '@testing-library/react';
import { defaultLocale, locale } from 'config';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { messages } from 'translations';

export const renderWithHooks = (component: React.ReactNode) => {
  return render(
    <IntlProvider
      locale={locale}
      messages={messages[locale]}
      defaultLocale={defaultLocale}
    >
      {component}
    </IntlProvider>
  );
};
export const translateText = (id: string) => {
  if (!messages?.[locale]?.[id]) {
    throw new Error(`Translation for ${id} not found`);
  }
  return messages?.[locale]?.[id] ?? '';
};
