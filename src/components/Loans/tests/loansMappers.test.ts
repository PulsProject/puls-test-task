import { mapLoanRequestsToTabDetails, splitLoanRequestsByTabs } from '../loansMappers';
import {
  loanRequests,
  mockLoansByTabs,
  loanRequestsWithoutActiveStatus,
  mockLoansByTabsWithEmptyActiveTabList,
  mockLoansByTabsEmpty,
  mockTabDetails,
  mockTabDetailsWithoutActiveTab,
} from './mockData';

describe('splitLoanRequestsByTabs function', () => {
  it('should return loan requests split by tabs', () => {
    expect(splitLoanRequestsByTabs(loanRequests)).toEqual(mockLoansByTabs);
  });

  it('should return loan requests split by tabs with empty array for ACTIVE loan tab', () => {
    expect(splitLoanRequestsByTabs(loanRequestsWithoutActiveStatus)).toEqual(
      mockLoansByTabsWithEmptyActiveTabList,
    );
  });

  it('should return loan requests split by tabs with empty arrays', () => {
    expect(splitLoanRequestsByTabs([])).toEqual(mockLoansByTabsEmpty);
  });
});

describe('mapLoanRequestsToTabDetails function', () => {
  it('should return filtered out tab details', () => {
    expect(mapLoanRequestsToTabDetails(mockLoansByTabs)).toEqual(mockTabDetails);
  });

  it('should return filtered out tab details without ACTIVE loan tab', () => {
    expect(mapLoanRequestsToTabDetails(mockLoansByTabsWithEmptyActiveTabList)).toEqual(
      mockTabDetailsWithoutActiveTab,
    );
  });

  it('should return empty array if no loans received', () => {
    expect(mapLoanRequestsToTabDetails(mockLoansByTabsEmpty)).toEqual([]);
  });
});
