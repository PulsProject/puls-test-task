import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@mui/material';
import { Theme } from '@mui/material/styles';
import defaultTheme from '../../../theme/theme';

export function renderWithTheme(children: React.ReactElement, theme?: Theme) {
  return render(<ThemeProvider theme={theme ? theme : defaultTheme}>{children}</ThemeProvider>);
}
