import React from 'react';
import { FormattedMessage } from 'react-intl';

import styles from './ThirdSection.module.css';

const ThirdSection = () => {
  return (
    <article className={styles.article + ' padding-nav'}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <FormattedMessage id='transactional.section3.title' />
        </h1>
        <h2 className={styles.subtitle}>
          <FormattedMessage id='transactional.section3.subtitle' />
        </h2>
      </header>
      <div className={styles.filter}></div>
      <div className={styles.pos}></div>
    </article>
  );
};

export default ThirdSection;
