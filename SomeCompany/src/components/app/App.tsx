import '@/assets/style/cssReset.css';
import { ThemeProvider } from '@mui/material';
import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import { muiTheme } from '../lib/muiTheme';
import { AppRouter } from './AppRouter';
const App: FC = () => {
  return (
    <ThemeProvider theme={muiTheme}>
      <RouterProvider router={AppRouter} />
    </ThemeProvider>
  );
};

export default App;
