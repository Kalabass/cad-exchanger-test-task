import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../const/routes';
import CustomButton from '../CustomButton';
const ContactUsButton: FC = () => {
  return (
    <Link to={Routes.CONTACTS}>
      <CustomButton text='Contact us' />
    </Link>
  );
};

export default ContactUsButton;
