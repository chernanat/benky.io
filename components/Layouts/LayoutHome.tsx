import Head from 'next/head';
import React from 'react';

import FooterHome from 'components/Footers/FooterHome/FooterHome';
import NavHome from 'components/Navs/NavHome/NavHome';

import styles from './LayoutHome.module.css';

type Props = {
  children: React.ReactNode;
};

function LayoutHome({ children }: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Benky</title>
        <meta name='description' content='Benky Web Page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className={styles.header}>
        <NavHome />
      </header>
      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <FooterHome />
      </footer>
    </div>
  );
}

export default LayoutHome;
