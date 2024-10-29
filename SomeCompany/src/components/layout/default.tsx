import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../ui/Footer';
import Header from '../ui/Header';

const DefaultLayout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default DefaultLayout;
