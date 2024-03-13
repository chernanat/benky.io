import { defaultLocale, locale } from 'config';
import type { AppProps } from 'next/app';
import { IntlProvider } from 'react-intl';
import { messages } from 'translations';

import LayoutHome from 'components/Layouts/LayoutHome';

import '../assets/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <IntlProvider
      locale={locale}
      messages={messages[locale]}
      defaultLocale={defaultLocale}
    >
      <LayoutHome>
        <Component {...pageProps} />
      </LayoutHome>
    </IntlProvider>
  );
}
