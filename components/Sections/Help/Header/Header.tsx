import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import Button from 'components/Buttons/Button/Button';

import styles from './Header.module.css';

type Props = {
  setOptionSelected: React.Dispatch<
    React.SetStateAction<'sent' | 'transactional-network'>
  >;
};

const Header = ({ setOptionSelected }: Props) => {
  const { formatMessage } = useIntl();
  return (
    <header className={styles.header + ' padding-nav'}>
      <h1 className={styles.title}>
        <FormattedMessage id='help.header.title' />
      </h1>
      <h2 className={styles.subtitle}>
        <FormattedMessage id='help.header.subtitle' />
      </h2>
      <div className={styles.buttons}>
        <Button
          msg={formatMessage({ id: 'help.sent' })}
          action={() => setOptionSelected('sent')}
        />
        <Button
          msg={formatMessage({ id: 'help.transactional' })}
          color='white'
          action={() => setOptionSelected('transactional-network')}
        />
      </div>
    </header>
  );
};

export default Header;
