import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../../theme/theme';
import Header from '../Header/Header';
import Main from '../Main/Main';
import LoansList from '../Loans/LoansList';
// eslint-disable-next-line import/extensions
import data from '../../data/loans.json';

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Header />
        <Main>
          <LoansList loanRequests={(data as any).loanRequests}/>
        </Main>
      </ThemeProvider>
    </>
  );
}

export default App;
