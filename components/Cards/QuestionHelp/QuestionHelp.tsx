import boomerangImg from 'assets/icons/boomerang.svg';
import Image from 'next/image';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import styles from './QuestionHelp.module.css';

type Props = {
  question: string;
  answer: string;
};

const QuestionHelp = ({ question, answer }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <article className={styles.article}>
      <Image
        src={boomerangImg}
        alt='boomerang'
        onClick={handleClick}
        className={styles.image + ' ' + (!isOpen ? styles.rotate : '')}
      />
      <div className={styles.question}>
        <h3 className={styles.question__title}>
          <FormattedMessage id={question} />
        </h3>
        {isOpen && (
          <p className={styles.question__answer}>
            <FormattedMessage
              id={answer}
              values={{
                br: <br />,
                b: chunks => <b>{chunks}</b>,
              }}
            />
          </p>
        )}
      </div>
    </article>
  );
};

export default QuestionHelp;
