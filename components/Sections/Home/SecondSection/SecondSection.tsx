import sentView from 'assets/images/sent-view.svg';
import Image from 'next/image';
import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import Button from 'components/Buttons/Button/Button';

import styles from './SecondSection.module.css';

function SecondSection() {
  const { formatMessage } = useIntl();
  const handleClick = () => {
    window.location.replace('https://benky.co/envios');
  };

  return (
    <article className={'padding-nav ' + styles.article}>
      <div className={styles.section}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            <FormattedMessage id='home.section2.title' />
          </h2>
          <p className={styles.paragraph}>
            <FormattedMessage id='home.section2.paragraph1' />
          </p>
          <div className={styles.button}>
            <Button
              msg={formatMessage({ id: 'home.section2.button' })}
              action={handleClick}
            />
          </div>
        </div>
        <Image src={sentView} alt='Sent view' className={styles.img} />
      </div>
    </article>
  );
}

export default SecondSection;
