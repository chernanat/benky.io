import React from 'react';

import FifthSection from 'components/Sections/TransactionalNetwork/FifthSection/FifthSection';
import FirstSection from 'components/Sections/TransactionalNetwork/FirstSection/FirstSection';
import FourthSection from 'components/Sections/TransactionalNetwork/FourthSection/FourthSection';
import SecondSection from 'components/Sections/TransactionalNetwork/SecondSection/SecondSection';
import ThirdSection from 'components/Sections/TransactionalNetwork/ThirdSection/ThirdSection';

const index = () => {
  return (
    <section>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
    </section>
  );
};

export default index;
