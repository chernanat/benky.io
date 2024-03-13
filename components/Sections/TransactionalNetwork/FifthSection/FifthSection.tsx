import phoneImage from 'assets/images/women-phone.svg';
import Image from 'next/image';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import styles from './FifthSection.module.css';

const FifthSection = () => {
  return (
    <article className={styles.article + ' padding-nav'}>
      <h1 className={styles.title}>
        <FormattedMessage
          id='transactional.section5.title'
          values={{
            br: <br />,
          }}
        />
      </h1>
      <Image src={phoneImage} alt='phone and women image' />
    </article>
  );
};

export default FifthSection;
