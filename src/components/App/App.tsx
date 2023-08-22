import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../../theme/theme';
import Header from '../Header/Header';
import Main from '../Main/Main';
import LoanTabs from '../LoanTabs/LoanTabs';

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Header />
        <Main>
          <LoanTabs />
        </Main>
      </ThemeProvider>
    </>
  );
}

export default App;
