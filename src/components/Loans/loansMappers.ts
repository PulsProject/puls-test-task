import { LoanRequest, LoanStatus } from '../../data/Interfaces';
import { LoanRequestsByTabs, LoanTab, TabType, TabDetails } from './Interfaces';

export const splitLoanRequestsByTabs = (loans: LoanRequest[]): LoanRequestsByTabs =>
  loans.reduce(
    (loansByTabs: LoanRequestsByTabs, loan: LoanRequest) => {
      let tab!: TabType;

      switch (loan.status) {
        case LoanStatus.WAITING_APPROVAL:
          tab = LoanTab.WAITING;
          break;
        case LoanStatus.PENDING_SETTLEMENT:
        case LoanStatus.TO_BE_DISBURSED:
          tab = LoanTab.PENDING;
          break;
        case LoanStatus.ACTIVE:
          tab = LoanTab.ACTIVE;
          break;
        case LoanStatus.CLOSED:
          tab = LoanTab.CLOSED;
          break;
        case LoanStatus.REJECTED:
          tab = LoanTab.REJECTED;
          break;
        default:
          console.warn(`Unknown status: ${loan.status}`); // Here we can send a log to the server that loanRequest with unknown status received.
          return loansByTabs;
      }
      loansByTabs[tab].push(loan);
      return loansByTabs;
    },
    {
      [LoanTab.WAITING]: [],
      [LoanTab.PENDING]: [],
      [LoanTab.ACTIVE]: [],
      [LoanTab.CLOSED]: [],
      [LoanTab.REJECTED]: [],
    },
  );

/** This function is used to map the loan requests to the tab details and filter out the tabs with no loan requests */
export const mapLoanRequestsToTabDetails = (loanRequestsByTabs: LoanRequestsByTabs): TabDetails[] =>
  Object.keys(loanRequestsByTabs)
    .map((key) => ({
      tabValue: key as TabType,
      tabLabel: loanRequestsByTabs[key as TabType].length,
    }))
    .filter((details) => details.tabLabel > 0);
