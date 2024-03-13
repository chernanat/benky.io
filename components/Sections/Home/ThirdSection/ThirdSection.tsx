import imgBoomerang from 'assets/images/boomerang.svg';
import qrImage from 'assets/images/qr-transactional-network.png';
import { socialNetworks } from 'config';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import Button from 'components/Buttons/Button/Button';

import styles from './ThirdSection.module.css';

function ThirdSection() {
  const { formatMessage } = useIntl();
  const router = useRouter();
  const handleClickButton = () => {
    router.push('/transactional-network');
  };
  const handleClickSocialNetworks = (path: string) => {
    window.open(path, '_blank');
  };
  return (
    <article className={styles.article}>
      <div className={`padding-nav ${styles.section}`}>
        <div className={styles.qr__section}>
          <div className={styles.qr}>
            <Image src={qrImage} alt='qr transactional network' />
          </div>
          <div className={styles.section__social_networks}>
            <Image
              src={socialNetworks['facebook'].iconWhite}
              alt='icon facebook'
              onClick={() => {
                handleClickSocialNetworks(socialNetworks['facebook'].url);
              }}
            />
            <Image
              src={socialNetworks['instagram'].iconWhite}
              alt='icon instagram'
              onClick={() => {
                handleClickSocialNetworks(socialNetworks['instagram'].url);
              }}
            />
            <Image
              src={socialNetworks['linkedin'].iconWhite}
              alt='icon linkedin'
              onClick={() => {
                handleClickSocialNetworks(socialNetworks['linkedin'].url);
              }}
            />
          </div>
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>
            <FormattedMessage id='home.section3.title' />
          </h2>
          <h4 className={styles.subtitle}>
            <FormattedMessage id='home.section3.subtitle' />
          </h4>
          <p className={styles.paragraph}>
            <FormattedMessage
              id='home.section3.paragraph1'
              values={{
                payment: (
                  <b>pago o dispersión en su moneda local en 24 horas</b>
                ),
                qr: <b>con solo un clic en su teléfono móvil</b>,
                lineBreak: <br />,
              }}
            />
          </p>
          <div className={styles.button}>
            <Button
              msg={formatMessage({ id: 'home.section3.button' })}
              action={handleClickButton}
              color='white'
            />
          </div>
        </div>
      </div>
      <Image src={imgBoomerang} alt='boomerang' className={styles.boomerang} />
    </article>
  );
}

export default ThirdSection;
