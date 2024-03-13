import React from 'react';
import { FormattedMessage } from 'react-intl';

import styles from './Footer.module.css';

const Footer = () => {
  const handleClickMail = () => {
    window.location.href = 'mailto:contacto@benky.co';
  };
  const handleClickWhatsapp = () => {
    window.open('https://wa.me/573161800514', '_blank');
  };
  return (
    <section className={styles.section + ' padding-nav'}>
      <h1 className={styles.title}>
        <FormattedMessage id='help.footer.title' />
      </h1>
      <h2 className={styles.subtitle}>
        <FormattedMessage
          id='help.footer.subtitle'
          values={{
            b: chunks => <b>{chunks}</b>,
            br: () => <br />,
            whatsapp: (
              <span className={styles.span} onClick={handleClickWhatsapp}>
                (+57) 316 180 05 14
              </span>
            ),
            email: (
              <span className={styles.span} onClick={handleClickMail}>
                contacto@benky.co
              </span>
            ),
          }}
        />
      </h2>
    </section>
  );
};

export default Footer;
