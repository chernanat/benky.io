import { optionsHome } from 'config';
import Link from 'next/link';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import styles from './MenuModal.module.css';

type Props = {
  modalRef: React.RefObject<HTMLDivElement>;
};

function MenuModal({ modalRef }: Props) {
  return (
    <div className={styles.menu} ref={modalRef}>
      <ul className={styles.menuList}>
        {optionsHome.map(option => (
          <li key={option.id} className={styles.menuItem}>
            <Link href={option.href}>
              <FormattedMessage id={option.text} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuModal;
