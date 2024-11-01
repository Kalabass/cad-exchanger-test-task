import { Box, Typography } from '@mui/material';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <Box
      position='sticky'
      color='primary'
      sx={{
        backgroundColor: 'white',
        borderTop: '1px solid grey',
        height: '80px',
        top: 'auto',
        bottom: 0,
        textAlign: 'center',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
      }}
      component={'footer'}
    >
      <Typography color='black' fontWeight={600} fontSize={24}>
        SomeCompany, 2024
      </Typography>
    </Box>
  );
};

export default Footer;
