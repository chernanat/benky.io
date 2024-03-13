import imageTeam from 'assets/images/team-messages.svg';
import Image from 'next/image';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import styles from './FourthSection.module.css';

function FourthSection() {
  return (
    <article className={`${styles.article} padding-nav`}>
      <header className={styles.header}>
        <h1>
          <FormattedMessage id='home.section4.title' />
        </h1>
      </header>
      <p className={styles.paragraph}>
        <FormattedMessage id='home.section4.paragraph1' />
      </p>
      <Image
        src={imageTeam}
        alt='messages team image'
        className={styles.image}
      />
    </article>
  );
}

export default FourthSection;
