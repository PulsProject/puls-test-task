import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../theme/theme';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import LoansList from '../components/Loans/LoansList';

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Header />
        <Main>
          <LoansList />
        </Main>
      </ThemeProvider>
    </>
  );
}

export default App;
