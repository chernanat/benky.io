import imagePhone from 'assets/images/3-phones.svg';
import Image from 'next/image';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import styles from './FourthSection.module.css';

const FourthSection = () => {
  return (
    <article className={styles.article + ' padding-nav'}>
      <Image src={imagePhone} alt='cellphones image' className={styles.image} />
      <header className={styles.header}>
        <h1 className={styles.title}>
          <FormattedMessage id='transactional.section4.title' />
        </h1>
        <h2 className={styles.subtitle}>
          <FormattedMessage
            id='transactional.section4.paragraph1'
            values={{
              br: <br />,
            }}
          />
        </h2>
      </header>
    </article>
  );
};

export default FourthSection;
