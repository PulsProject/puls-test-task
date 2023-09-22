import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../../theme/theme';
import Header from '../Header/Header';
import Loans from '../Loans/Loans';

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Header />
        <Loans />
      </ThemeProvider>
    </>
  );
}

export default App;
