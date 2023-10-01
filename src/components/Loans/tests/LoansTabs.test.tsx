import React from 'react';
import { fireEvent } from '@testing-library/react';
import LoansTabs from '../LoansTabs';
import { renderWithTheme } from './renderWithTheme';
import { mockTabDetails } from './mockData';
import { LoanTab } from '../Interfaces';

describe('LoansTabs component', () => {
  it('renders Tabs with correct labels and attributes', () => {
    const { queryByTestId } = renderWithTheme(
      <LoansTabs tabs={mockTabDetails} activeTabValue={LoanTab.PENDING} setTabValue={() => {}} />,
    );

    mockTabDetails.forEach(({ tabValue, tabLabel }) => {
      const tabElement = queryByTestId(`loan-tab-${tabValue}`);
      expect(tabElement).toBeInTheDocument();
      expect(tabElement).toHaveTextContent(`${tabValue.split('_').join(' ')} ${tabLabel}`);
      expect(tabElement).toHaveAttribute('aria-controls', `loans-list-${tabValue}`);
    });
  });

  it('calls setTabValue with correct value on tab change', () => {
    const setTabValueMock = jest.fn();
    const { queryByTestId } = renderWithTheme(
      <LoansTabs tabs={mockTabDetails} activeTabValue={LoanTab.ACTIVE} setTabValue={setTabValueMock} />,
    );

    fireEvent.click(queryByTestId(`loan-tab-${LoanTab.PENDING}`) as HTMLElement);

    expect(setTabValueMock).toHaveBeenCalledWith(LoanTab.PENDING);
  });

  it('does not call setTabValue if clicking on the active tab', () => {
    const setTabValueMock = jest.fn();
    const { queryByTestId } = renderWithTheme(
      <LoansTabs tabs={mockTabDetails} activeTabValue={LoanTab.REJECTED} setTabValue={setTabValueMock} />,
    );
    const activeTabElement = queryByTestId(`loan-tab-${LoanTab.REJECTED}`);

    expect(activeTabElement).toHaveAttribute('aria-selected', 'true');

    fireEvent.click(activeTabElement as HTMLElement);

    expect(setTabValueMock).not.toHaveBeenCalled();
  });
});
