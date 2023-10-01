import React from 'react';
import LoansList from '../LoansList';
import { LoanTab } from '../Interfaces';
import { renderWithTheme } from './renderWithTheme';
import { mockLoansByTabs } from './mockData';

describe('LoansList component', () => {
  it('should display one card when WAITING tab selected', () => {
    const renderer = renderWithTheme(<LoansList loanRequests={mockLoansByTabs[LoanTab.WAITING]} />);
    expect(renderer.getAllByTestId('loan-card')).toHaveLength(1);
  });

  it('should display two cards when PENDING tab selected', () => {
    const renderer = renderWithTheme(<LoansList loanRequests={mockLoansByTabs[LoanTab.PENDING]} />);
    const loanCards = renderer.getAllByTestId('loan-card');
    expect(loanCards).toHaveLength(2);
    expect(loanCards[0]).toHaveTextContent('R9ZEQCromwell Marketing50.000,00 €52.500,00€ / month');
    expect(loanCards[1]).toHaveTextContent('VZAEMCromwell Marketing19.000,00 €5.358,22€ / month');
  });

  it('should display one card when ACTIVE tab selected', () => {
    const renderer = renderWithTheme(<LoansList loanRequests={mockLoansByTabs[LoanTab.ACTIVE]} />);
    expect(renderer.getAllByTestId('loan-card')).toHaveLength(1);
  });

  it('should display one card when CLOSED tab selected', () => {
    const renderer = renderWithTheme(<LoansList loanRequests={mockLoansByTabs[LoanTab.CLOSED]} />);
    expect(renderer.getAllByTestId('loan-card')).toHaveLength(1);
  });

  it('should display one card when REJECTED tab selected', () => {
    const renderer = renderWithTheme(<LoansList loanRequests={mockLoansByTabs[LoanTab.REJECTED]} />);
    expect(renderer.getAllByTestId('loan-card')).toHaveLength(1);
  });

  it('should have no cards when no loan requests received', () => {
    const renderer = renderWithTheme(<LoansList loanRequests={[]} />);
    expect(renderer.queryByTestId('loan-card')).toBeNull();
  });
});
