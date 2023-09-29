import { LoanRequest, LoanStatus } from '../../data/Interfaces';
import { LoanTab, TabType, LoansMap, TabDetails } from './Interfaces';

export const getLoansMap = (loans: LoanRequest[]): LoansMap =>
  loans.reduce(
    (map: LoansMap, loan: LoanRequest) => {
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
          return map;
      }
      map[tab].push(loan);
      console.log('loansMap –> map:', map); // TODO: remove this line
      return map;
    },
    {
      [LoanTab.WAITING]: [],
      [LoanTab.PENDING]: [],
      [LoanTab.ACTIVE]: [],
      [LoanTab.CLOSED]: [],
      [LoanTab.REJECTED]: [],
    },
  );

export const getTabDetails = (loansMap: LoansMap): TabDetails[] =>
  Object.keys(loansMap)
    .map((key) => ({ tabValue: key as TabType, tabLabel: loansMap[key as TabType].length }))
    .filter((details) => details.tabLabel > 0);
