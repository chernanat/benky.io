import ImagePerson from 'assets/images/person-cellphone.svg';
import Image from 'next/image';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import styles from './FirstSection.module.css';

const FirstSection = () => {
  return (
    <article className={styles.article + ' padding-nav'}>
      <h1 className={styles.title}>
        <FormattedMessage id='transactional.section1.title' />
      </h1>
      <Image src={ImagePerson} alt='person image' className={styles.image} />
    </article>
  );
};

export default FirstSection;
