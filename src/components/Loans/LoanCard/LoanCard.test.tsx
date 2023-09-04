import React from 'react';
import { render } from '@testing-library/react';
import { LoanCard } from './LoanCard';
import { ILoan } from '../types';
import theme from '../../../theme/theme';
import { ThemeProvider } from '@mui/material';

test('renders Loan Card info', () => {
  const loan = {
    id: 1,
    externalId: 'ABC123',
    status: 'Active',
    account: {
      company: {
        name: 'Company Name',
      },
    },
    createdAt: '2021-09-14T13:59:52.895Z',
    duration: 12,
    amount: 10000,
    monthlyPayment: 52500,
  };

  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <LoanCard loan={loan as ILoan} />
    </ThemeProvider>,
  );

  expect(getByText('ABC123')).toBeInTheDocument();
  expect(getByText('Company Name')).toBeInTheDocument(); 
  expect(getByText('10.000,00 €')).toBeInTheDocument();
  expect(getByText('52.500,00€ / month')).toBeInTheDocument(); 
});
