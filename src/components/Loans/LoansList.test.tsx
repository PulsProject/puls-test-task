import React, { FC } from 'react';
import { render } from '@testing-library/react';
import LoansList from './LoansList';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../../theme/theme';
import { Loans } from '../../interfaces/loans';
// eslint-disable-next-line import/extensions
import data from '../../data/loans.json';

const { loanRequests }: any = data;

const AppProvider = (Component: FC<{ loansList: Loans[] }>, list: Loans[]) => (
  <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Component loansList={list}/>
    </ThemeProvider>
  </>
);

describe('loansList tests', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: !(query === '(max-width: 599px)'),
        addListener: jest.fn(),
        removeListener: jest.fn(),
      })),
    });
  });
  describe('loans switch', () => {
    it('should display all the routes', () => {
      const { getByText } = render(AppProvider(LoansList, loanRequests));
      expect(getByText('Approved Loans 2')).toBeInTheDocument();
      expect(getByText('Requests 1')).toBeInTheDocument();
      expect(getByText('Active Loans 1')).toBeInTheDocument();
      expect(getByText('Closed Loans 1')).toBeInTheDocument();
      expect(getByText('Rejected Loans 1')).toBeInTheDocument();
    });
    it('should display 2 approved loans', () => {
      const { getByText } = render(AppProvider(LoansList, loanRequests));
      expect(getByText('to be disbursed')).toBeInTheDocument();
      expect(getByText('pending settlement')).toBeInTheDocument();
    });
    it('should display 1 requested loan', () => {
      const { getByText } = render(AppProvider(LoansList, loanRequests));
      getByText('Requests 1').click();
      expect(getByText('waiting approval')).toBeInTheDocument();
    });
    it('should display 1 active loan', () => {
      const { getByText } = render(AppProvider(LoansList, loanRequests));
      getByText('Active Loans 1').click();
      expect(getByText('active')).toBeInTheDocument();
    });
    it('should display 1 closed loan', () => {
      const { getByText } = render(AppProvider(LoansList, loanRequests));
      getByText('Closed Loans 1').click();
      expect(getByText('closed')).toBeInTheDocument();
    });
    it('should display 1 rejected loan', () => {
      const { getByText } = render(AppProvider(LoansList, loanRequests));
      getByText('Rejected Loans 1').click();
      expect(getByText('rejected')).toBeInTheDocument();
    });
    it('should display no loans state', () => {
      const { getByText } = render(AppProvider(LoansList, []));
      expect(getByText('There are no loans')).toBeInTheDocument();
    });
  });
});