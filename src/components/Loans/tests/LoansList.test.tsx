import React from 'react';
import LoansList from '../LoansList';
import { LoanTab } from '../Interfaces';
import { renderWithTheme } from './renderWithTheme';
import { mockLoansByTabs, mockLoansByTabsWithEmptyActiveTabList } from './mockData';

describe('LoansList component', () => {
  it('should display one card in WAITING tab', () => {
    const renderer = renderWithTheme(
      <LoansList loanRequests={mockLoansByTabs[LoanTab.WAITING]} />,
    );
    expect(renderer.getAllByTestId('loan-card')).toHaveLength(1);
  });

  it('should display two cards in PENDING tab', () => {
    const renderer = renderWithTheme(
      <LoansList loanRequests={mockLoansByTabs[LoanTab.PENDING]} />,
    );
    const loanCards = renderer.getAllByTestId('loan-card');
    expect(loanCards).toHaveLength(2);
    expect(loanCards[0]).toHaveTextContent('R9ZEQCromwell Marketing50.000,00 €52.500,00€ / month');
    expect(loanCards[1]).toHaveTextContent('VZAEMCromwell Marketing19.000,00 €5.358,22€ / month');
  });

  it('should display one card in ACTIVE tab', () => {
    const renderer = renderWithTheme(
      <LoansList loanRequests={mockLoansByTabs[LoanTab.ACTIVE]} />,
    );
    expect(renderer.getAllByTestId('loan-card')).toHaveLength(1);
  });

  it('should display one card in CLOSED tab', () => {
    const renderer = renderWithTheme(
      <LoansList loanRequests={mockLoansByTabs[LoanTab.CLOSED]} />,
    );
    expect(renderer.getAllByTestId('loan-card')).toHaveLength(1);
  });

  it('should display one card in REJECTED tab', () => {
    const renderer = renderWithTheme(
      <LoansList loanRequests={mockLoansByTabs[LoanTab.REJECTED]} />,
    );
    expect(renderer.getAllByTestId('loan-card')).toHaveLength(1);
  });

  it('should have no cards in ACTIVE tab when no loan requests with "active" status received', () => {
    const renderer = renderWithTheme(
      <LoansList loanRequests={mockLoansByTabsWithEmptyActiveTabList[LoanTab.ACTIVE]} />,
    );
    expect(renderer.queryByTestId('loan-card')).toBeNull();
  });
});
