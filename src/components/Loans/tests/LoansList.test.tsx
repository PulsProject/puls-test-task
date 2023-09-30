import React from 'react';
import LoansList from '../LoansList';
import { LoanTab } from '../loansUtils';
import { renderWithTheme } from './testUtils';
import { mockLoansByTabs, mockLoansByTabsWithEmptyActiveTabList } from './mockData';

describe('LoansList component', () => {
  it('should display one card in WAITING tab', () => {
    const renderer = renderWithTheme(
      <LoansList loanRequests={mockLoansByTabs} tabValue={LoanTab.WAITING} />,
    );
    expect(renderer.getAllByTestId(`loan-tabcard-${LoanTab.WAITING}`)).toHaveLength(1);
  });

  it('should display two cards in PENDING tab', () => {
    const renderer = renderWithTheme(
      <LoansList loanRequests={mockLoansByTabs} tabValue={LoanTab.PENDING} />,
    );
    const loanCards = renderer.getAllByTestId(`loan-tabcard-${LoanTab.PENDING}`);
    expect(loanCards).toHaveLength(2);
    expect(loanCards[0]).toHaveTextContent('R9ZEQCromwell Marketing50.000,00 €52.500,00€ / month');
    expect(loanCards[1]).toHaveTextContent('VZAEMCromwell Marketing19.000,00 €5.358,22€ / month');
  });

  it('should display one card in ACTIVE tab', () => {
    const renderer = renderWithTheme(
      <LoansList loanRequests={mockLoansByTabs} tabValue={LoanTab.ACTIVE} />,
    );
    expect(renderer.getAllByTestId(`loan-tabcard-${LoanTab.ACTIVE}`)).toHaveLength(1);
  });

  it('should display one card in CLOSED tab', () => {
    const renderer = renderWithTheme(
      <LoansList loanRequests={mockLoansByTabs} tabValue={LoanTab.CLOSED} />,
    );
    expect(renderer.getAllByTestId(`loan-tabcard-${LoanTab.CLOSED}`)).toHaveLength(1);
  });

  it('should display one card in REJECTED tab', () => {
    const renderer = renderWithTheme(
      <LoansList loanRequests={mockLoansByTabs} tabValue={LoanTab.REJECTED} />,
    );
    expect(renderer.getAllByTestId(`loan-tabcard-${LoanTab.REJECTED}`)).toHaveLength(1);
  });

  it('should have no cards in ACTIVE tab when no loan requests with "active" status received', () => {
    const renderer = renderWithTheme(
      <LoansList loanRequests={mockLoansByTabsWithEmptyActiveTabList} tabValue={LoanTab.ACTIVE} />,
    );
    expect(renderer.queryByTestId(`loan-tabcard-${LoanTab.ACTIVE}`)).toBeNull();
  });
});
