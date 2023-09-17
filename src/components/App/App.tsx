import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../../theme/theme';
import Header from '../Header/Header';
import Main from '../Main/Main';
import LoansTabs from '../LoansTabs/LoansTabs';
// eslint-disable-next-line import/extensions
import data from '../../data/loans.json';

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Header />
        <Main>
          <LoansTabs loanRequests={(data as any).loanRequests} />
        </Main>
      </ThemeProvider>
    </>
  );
}

export default App;
