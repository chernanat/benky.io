import React, { useState } from 'react';

import Footer from './Footer/Footer';
import Header from './Header/Header';
import Questions from './Questions/Questions';

const Help = () => {
  const [optionSelected, setOptionSelected] = useState<
    'sent' | 'transactional-network'
  >('sent');

  return (
    <div>
      <Header setOptionSelected={setOptionSelected} />
      <Questions optionSelected={optionSelected} />
      <Footer />
    </div>
  );
};

export default Help;
