import iconFacebookBlue from 'assets/icons/facebook-blue.svg';
import iconFacebookWhite from 'assets/icons/facebook.svg';
import iconInstagramBlue from 'assets/icons/instagram-blue.svg';
import iconInstagramWhite from 'assets/icons/instagram.svg';
import iconLinkedinBlue from 'assets/icons/linkedin-blue.svg';
import iconLinkedinWhite from 'assets/icons/linkedin.svg';
import { TLocales } from 'types/types';

export const optionsHome = [
  {
    id: 1,
    href: '/',
    text: 'nav.benky',
  },
  {
    id: 2,
    href: '/envios',
    text: 'nav.sents',
  },
  {
    id: 3,
    href: '/transactional-network',
    text: 'nav.transactional-network',
  },
  {
    id: 4,
    href: '/help',
    text: 'nav.help',
  },
];
export const LOCALES: { [key: string]: TLocales } = {
  ENGLISH: 'en-US',
  SPANISH: 'es-ES',
};
export const locale = LOCALES.SPANISH;
export const defaultLocale = LOCALES.SPANISH;
export const CLASSNAMES_BUTTONS_COLORS = (styles: Record<string, string>) => ({
  blue: styles.button__blue,
  white: styles.button__white,
  orange: styles.button__orange,
});
export const socialNetworks = {
  facebook: {
    name: 'Facebook',
    iconWhite: iconFacebookWhite,
    iconBlue: iconFacebookBlue,
    url: 'https://web.facebook.com/profile.php?id=100064315473015',
  },
  instagram: {
    name: 'Instagram',
    iconWhite: iconInstagramWhite,
    iconBlue: iconInstagramBlue,
    url: 'https://www.instagram.com/benky__/',
  },
  linkedin: {
    name: 'Linkedin',
    iconWhite: iconLinkedinWhite,
    iconBlue: iconLinkedinBlue,
    url: 'https://www.linkedin.com/company/somosbenky/',
  },
};
export const questionsHelp = {
  sent: [
    {
      question: 'help.sent.1.title',
      answer: 'help.sent.1.text',
    },
    {
      question: 'help.sent.2.title',
      answer: 'help.sent.2.text',
    },
    {
      question: 'help.sent.3.title',
      answer: 'help.sent.3.text',
    },
    {
      question: 'help.sent.4.title',
      answer: 'help.sent.4.text',
    },
    {
      question: 'help.sent.5.title',
      answer: 'help.sent.5.text',
    },
    {
      question: 'help.sent.6.title',
      answer: 'help.sent.6.text',
    },
    {
      question: 'help.sent.7.title',
      answer: 'help.sent.7.text',
    },
  ],
  'transactional-network': [
    {
      question: 'help.transactional.1.title',
      answer: 'help.transactional.1.text',
    },
    {
      question: 'help.transactional.2.title',
      answer: 'help.transactional.2.text',
    },
    {
      question: 'help.transactional.3.title',
      answer: 'help.transactional.3.text',
    },
    {
      question: 'help.transactional.4.title',
      answer: 'help.transactional.4.text',
    },
    {
      question: 'help.transactional.5.title',
      answer: 'help.transactional.5.text',
    },
  ],
};
