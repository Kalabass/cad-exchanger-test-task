import { Routes } from '@/components/const/routes';
import { AppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/system';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import ContactUsButton from '../ContactUsButton';

const Header: FC = () => {
  return (
    <StyledAppBar>
      <StyledToolBar>
        <Link to={Routes.HOME}>
          <StyledTypography>SomeCompany</StyledTypography>
        </Link>
        <ContactUsButton />
      </StyledToolBar>
    </StyledAppBar>
  );
};

export default Header;

const StyledTypography = styled('span')(({ theme }) => ({
  color: 'black',
  fontWeight: 600,
  fontSize: '2.125rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
}));

const StyledAppBar = styled(AppBar)(() => ({
  height: '80px',
  backgroundColor: 'white',
  borderBottom: '1px solid grey',
  position: 'sticky',
  boxShadow: 'none',
}));

const StyledToolBar = styled(Toolbar)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  margin: 'auto',
}));
