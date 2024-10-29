import { AppBar, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <AppBar
      position='sticky'
      color='primary'
      elevation={0}
      sx={{
        backgroundColor: 'white',
        borderTop: '1px solid grey',
        height: '128px',
        top: 'auto',
        bottom: 0,
        textAlign: 'center',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
      }}
      component={'footer'}
    >
      <Toolbar>
        <Typography color='black' fontWeight={600} fontSize={24}>
          SomeCompany 2024
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
