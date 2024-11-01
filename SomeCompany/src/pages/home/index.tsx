import { FC } from 'react';
import ArticleSection from './ArticleSection';
import FooterSection from './FooterSection';
import MainSection from './MainSection';

const HomePage: FC = () => {
  return (
    <>
      <MainSection />
      <ArticleSection />
      <FooterSection />
    </>
  );
};

export default HomePage;
