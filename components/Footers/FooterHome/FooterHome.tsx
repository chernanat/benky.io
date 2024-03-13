import benkyIsotipo from 'assets/images/benky-isotipo.svg';
import { socialNetworks } from 'config';
import Image from 'next/image';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import styles from './FooterHome.module.css';

const FooterHome = () => {
  const handleClickSocialNetworks = (path: string) => {
    window.open(path, '_blank');
  };
  const handleClickMail = () => {
    window.location.href = 'mailto:contacto@benky.co';
  };
  return (
    <div className={`${styles.footer} padding-nav`}>
      <section className={styles.firstSection}>
        <div className={styles.leftSection}>
          <Image
            src={benkyIsotipo}
            alt='isotipo benky'
            className={styles.image__isotipo}
            width={23.9}
            height={36.5}
          />
          <b className={styles.b__text}>
            <FormattedMessage id='footer.benky' />
          </b>
          <p className={styles.text}>
            <FormattedMessage id='footer.nit' />
          </p>
          <p className={styles.text}>
            <FormattedMessage id='footer.address' />
          </p>
        </div>
        <div className={styles.rightSection}>
          <b className={styles.link}>
            <FormattedMessage id='footer.t_c' />
          </b>
          <b className={styles.link}>
            <FormattedMessage id='footer.data.policy' />
          </b>
          <b className={styles.link}>
            <FormattedMessage id='footer.code.t_c' />
          </b>
          <b className={styles.link}>
            <FormattedMessage id='footer.prevention.policy' />
          </b>
          <div className={styles.social_networks}>
            <Image
              src={socialNetworks.linkedin.iconBlue}
              alt='linkedin icon'
              onClick={() => {
                handleClickSocialNetworks(socialNetworks.linkedin.url);
              }}
            />
            <Image
              src={socialNetworks.facebook.iconBlue}
              alt='facebook icon'
              onClick={() => {
                handleClickSocialNetworks(socialNetworks.facebook.url);
              }}
            />
            <Image
              src={socialNetworks.instagram.iconBlue}
              alt='instagram icon'
              onClick={() => {
                handleClickSocialNetworks(socialNetworks.instagram.url);
              }}
            />
          </div>
        </div>
      </section>
      <div className={styles.line}></div>
      <section className={styles.secondSection}>
        <div className={styles.secondfLeftSection}>
          <p className={styles.text}>
            <FormattedMessage id='footer.copyright' />
          </p>
        </div>
        <div className={styles.secondRightSection}>
          <p className={styles.text}>
            <FormattedMessage
              id='footer.contact'
              values={{
                contact: <b>Contacto:</b>,
                mail: <span onClick={handleClickMail}>contacto@benky.co</span>,
              }}
            />
          </p>
        </div>
      </section>
    </div>
  );
};

export default FooterHome;
