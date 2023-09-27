import React from 'react';
import { render, screen } from '@testing-library/react';
import LoansList from './LoansList';
import { ThemeProvider, createTheme } from '@mui/material';

describe('LoansList Component', () => {
  it('renders loan items based on the selected tab (approved loans)', () => {
    render(
      <ThemeProvider theme={createTheme()}>
        <LoansList />
      </ThemeProvider>,
    );
    const approvedLoans = screen.getAllByTestId('loan-item');
    expect(approvedLoans).toHaveLength(2);
  });
});
