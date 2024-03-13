import { questionsHelp } from 'config';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import QuestionHelp from 'components/Cards/QuestionHelp/QuestionHelp';

import styles from './Questions.module.css';

type Props = {
  optionSelected: 'sent' | 'transactional-network';
};

const Questions = ({ optionSelected }: Props) => {
  return (
    <section className={styles.section + ' padding-nav'}>
      <h2 className={styles.title}>
        <FormattedMessage id='help.questions.title' />
      </h2>
      <div className={styles.questions}>
        {questionsHelp[optionSelected].map((option, index) => (
          <QuestionHelp
            key={`${optionSelected} ${index}`}
            question={option.question}
            answer={option.answer}
          />
        ))}
      </div>
    </section>
  );
};

export default Questions;
