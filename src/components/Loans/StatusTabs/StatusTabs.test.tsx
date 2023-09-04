import React from 'react';
import { render } from '@testing-library/react';
import theme from '../../../theme/theme';
import { ThemeProvider } from '@mui/material';
import StatusTabs from './StatusTabs';
// eslint-disable-next-line import/extensions
import data from '../../../data/loans.json';
import { LOAN_STATUS_TABS } from '../utils';

test('LoanCard відображає інформацію про позику', () => {
  const { loanRequests }: any = data;

  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <StatusTabs
        currentValue={LOAN_STATUS_TABS[0].value}
        handleChange={() => undefined}
        loans={loanRequests}
      />
    </ThemeProvider>,
  );

  expect(getByText('Approved Loans')).toBeInTheDocument();
  expect(getByText('Requests')).toBeInTheDocument();
  expect(getByText('Active Loans')).toBeInTheDocument();
  expect(getByText('Closed Loans')).toBeInTheDocument();
  expect(getByText('Rejected Loans')).toBeInTheDocument();
});
