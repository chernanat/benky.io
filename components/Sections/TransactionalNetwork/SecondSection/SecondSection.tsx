import React from 'react';
import { FormattedMessage } from 'react-intl';

import styles from './SecondSection.module.css';

const SecondSection = () => {
  return (
    <article className={styles.article + ' padding-nav'}>
      <h2 className={styles.title}>
        <FormattedMessage id='transactional.section2.title' />
      </h2>
      <div className={styles.images}></div>
    </article>
  );
};

export default SecondSection;
