import { mapLoanRequestsToTabDetails, splitLoanRequestsByTabs } from '../loansUtils';
// eslint-disable-next-line import/extensions
import data from '../../../data/loans.json';
import { mockLoansByTabs, mockTabDetails } from './mockData';
import { LoanRequest } from '../../../data/Interfaces';

const { loanRequests } = data as unknown as { loanRequests: LoanRequest[] };
const loanRequestsWithoutActiveStatus = loanRequests.filter(
  (loanRequest) => loanRequest.status !== 'active',
);
const mockLoansByTabsWithEmptyActiveTabList = { ...mockLoansByTabs };
mockLoansByTabsWithEmptyActiveTabList['active loans'] = [];
const mockTabDetailsWithoutActiveTab = mockTabDetails.filter(
  (tabDetail) => tabDetail.tabValue !== 'active loans',
);
const mockLoansByTabsEmpty = { ...mockLoansByTabs };
mockLoansByTabsEmpty['waiting approval'] = [];
mockLoansByTabsEmpty['pending requests'] = [];
mockLoansByTabsEmpty['active loans'] = [];
mockLoansByTabsEmpty['closed loans'] = [];
mockLoansByTabsEmpty['rejected loans'] = [];

it('splitLoanRequestsByTabs function should return loan requests split by tabs', () => {
  expect(splitLoanRequestsByTabs(loanRequests)).toEqual(mockLoansByTabs);
});

it('splitLoanRequestsByTabs function should return loan requests split by tabs with empty array for ACTIVE loan tab', () => {
  expect(splitLoanRequestsByTabs(loanRequestsWithoutActiveStatus)).toEqual(
    mockLoansByTabsWithEmptyActiveTabList,
  );
});

it('splitLoanRequestsByTabs function should return loan requests split by tabs with empty arrays', () => {
  expect(splitLoanRequestsByTabs([])).toEqual(mockLoansByTabsEmpty);
});

it('mapLoanRequestsToTabDetails function should return filtered out tab details', () => {
  expect(mapLoanRequestsToTabDetails(mockLoansByTabs)).toEqual(mockTabDetails);
});

it('mapLoanRequestsToTabDetails function should return filtered out tab details without ACTIVE loan tab', () => {
  expect(mapLoanRequestsToTabDetails(mockLoansByTabsWithEmptyActiveTabList)).toEqual(
    mockTabDetailsWithoutActiveTab,
  );
});

it('mapLoanRequestsToTabDetails function should return empty array if no loans received', () => {
  expect(mapLoanRequestsToTabDetails(mockLoansByTabsEmpty)).toEqual([]);
});
