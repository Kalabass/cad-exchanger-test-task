import { Routes } from '@/components/lib/routes';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const Header: FC = () => {
  return (
    <AppBar
      position='sticky'
      elevation={0}
      sx={{
        backgroundColor: 'white',
        borderBottom: '1px solid grey',
        height: '64px',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to={Routes.HOME}>
          <Typography color='black'>SomeCompany</Typography>
        </Link>
        <Link to={'./contacts'}>
          <Button variant='contained'>Contact us</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
