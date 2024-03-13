import benkyIsotipo from 'assets/images/benky-isotipo.svg';
import Image from 'next/image';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import styles from './FirstSection.module.css';

function FirstSection() {
  return (
    <article className={'padding-nav ' + styles.article}>
      <header className={styles.header}>
        <h1 className='title'>
          <FormattedMessage id='home.section1.title' />
        </h1>
        <h2 className='subtitle'>
          <FormattedMessage id='home.section1.subtitle' />
        </h2>
      </header>
      <div className={styles.content}>
        <Image src={benkyIsotipo} alt='benky isotipo' />
        <div>
          <h1 className={styles.content__h1}>
            <FormattedMessage id='home.section1.title2' />
          </h1>
          <p className={styles.content__p}>
            <FormattedMessage id='home.section1.paragraph1' />
          </p>
          <span className={styles.span + ' ' + styles.span__first}>
            <b>
              <FormattedMessage id='home.section1.number1' />
            </b>
            <p>
              <FormattedMessage id='home.section1.number1.text' />
            </p>
          </span>
          <span className={styles.span}>
            <b>
              <FormattedMessage id='home.section1.number2' />
            </b>
            <p>
              <FormattedMessage id='home.section1.number2.text' />
            </p>
          </span>
        </div>
      </div>
    </article>
  );
}

export default FirstSection;
