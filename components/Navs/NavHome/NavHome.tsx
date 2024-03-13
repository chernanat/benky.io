import iconThreeLines from 'assets/icons/three-lines.svg';
import BenkyLogo from 'assets/images/benky-logo.svg';
import { optionsHome } from 'config';
import useOutsideClickModal from 'hooks/useOutsideClickModal';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import Button from 'components/Buttons/Button/Button';
import MenuModal from 'components/Modals/MenuModal/MenuModal';

import styles from './NavHome.module.css';

function NavHome() {
  const router = useRouter();
  const [refIcon, modalRef, handleOpen, isOpen] = useOutsideClickModal();
  const { formatMessage } = useIntl();
  const handleClickLogo = () => {
    router.push('/');
  };
  const onClickButton = () => {
    router.push('/register');
  };
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__lines} ref={refIcon}>
        <Image
          src={iconThreeLines}
          alt='three lines icon'
          onClick={handleOpen}
          className={styles.nav__icon}
        />
      </div>
      <Image
        src={BenkyLogo}
        alt='Benky Logo'
        className={styles.nav__logo}
        onClick={handleClickLogo}
      />
      <ul className={styles.nav__links}>
        {optionsHome.map(option => (
          <li
            key={option.id}
            className={router.pathname === option.href ? styles.selected : ' '}
          >
            <Link href={option.href}>
              <FormattedMessage id={option.text} />
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.nav__button}>
        <Button
          msg={formatMessage({ id: 'nav.button.register' })}
          action={onClickButton}
        />
      </div>
      {isOpen && <MenuModal modalRef={modalRef} />}
    </nav>
  );
}

export default NavHome;
