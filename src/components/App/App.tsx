import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../../theme/theme';

import Header from '../Header/Header';
import Main from '../Main/Main';
import { LoansView } from '../Loans/LoansView';

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Header />
        <Main>
          <LoansView />
        </Main>
      </ThemeProvider>
    </>
  );
}

export default App;
