import FirstSection from 'components/Sections/Home/FirstSection/FirstSection';
import FourthSection from 'components/Sections/Home/FourthSection/FourthSection';
import SecondSection from 'components/Sections/Home/SecondSection/SecondSection';
import ThridSection from 'components/Sections/Home/ThirdSection/ThirdSection';

export default function Home() {
  return (
    <section>
      <FirstSection />
      <SecondSection />
      <ThridSection />
      <FourthSection />
    </section>
  );
}
