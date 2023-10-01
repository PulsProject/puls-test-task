import { splitLoansByTabs, mapLoansToTabDetails } from '../loanMappers';
import {
  loanRequests,
  mockLoansByTabs,
  loanRequestsWithoutActiveStatus,
  mockLoansByTabsWithEmptyActiveTabList,
  mockLoansByTabsEmpty,
  mockTabDetails,
  mockTabDetailsWithoutActiveTab,
} from './mockData';

describe('splitLoansByTabs function', () => {
  it('should return loan requests split by tabs', () => {
    expect(splitLoansByTabs(loanRequests)).toEqual(mockLoansByTabs);
  });

  it('should return loan requests split by tabs with empty list for ACTIVE loan tab', () => {
    expect(splitLoansByTabs(loanRequestsWithoutActiveStatus)).toEqual(mockLoansByTabsWithEmptyActiveTabList);
  });

  it('should return loan requests split by tabs with empty lists for each tab', () => {
    expect(splitLoansByTabs([])).toEqual(mockLoansByTabsEmpty);
  });
});

describe('mapLoansToTabDetails function', () => {
  it('should return filtered out tab details', () => {
    expect(mapLoansToTabDetails(mockLoansByTabs)).toEqual(mockTabDetails);
  });

  it('should return filtered out tab details without ACTIVE loan tab', () => {
    expect(mapLoansToTabDetails(mockLoansByTabsWithEmptyActiveTabList)).toEqual(mockTabDetailsWithoutActiveTab);
  });

  it('should return empty list if no loans received', () => {
    expect(mapLoansToTabDetails(mockLoansByTabsEmpty)).toEqual([]);
  });
});
