import React from 'react';
import { render } from '@testing-library/react';
import LoanTabs from './LoanTabs';
import { ThemeProvider, createTheme } from '@mui/material/styles';

jest.mock('../../data/loans.json', () => ({
  loanRequests: [],
}));

const theme = createTheme();

describe('LoanTabs', () => {
  test('renders without error', () => {
    render(
      <ThemeProvider theme={theme}>
        <LoanTabs />
      </ThemeProvider>,
    );
  });

  test('displays "Financing" as the heading', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <LoanTabs />
      </ThemeProvider>,
    );
    expect(getByText('Financing')).toBeInTheDocument();
  });

  test(
    'displays "There is nothing to show here" message when no filtered tabs',
    () => {
      const { getByText } = render(
        <ThemeProvider theme={theme}>
          <LoanTabs />
        </ThemeProvider>,
      );
      expect(getByText('There is nothing to show here')).toBeInTheDocument();
    });
});
