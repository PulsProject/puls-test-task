import { LoanRequest } from '../../data/Interfaces';

export enum LoanTab {
  WAITING = 'waiting_approval',
  PENDING = 'pending_requests',
  ACTIVE = 'active_loans',
  CLOSED = 'closed_loans',
  REJECTED = 'rejected_loans',
}

export type TabType =
  | LoanTab.WAITING
  | LoanTab.PENDING
  | LoanTab.ACTIVE
  | LoanTab.CLOSED
  | LoanTab.REJECTED;

/** LoanRequestsByTabs contains filtered loan requests for each tab */
export type LoanRequestsByTabs = {
  [key in TabType]: LoanRequest[];
};

/** TabDetails is used to pass the tab value and label to the LoansTabs component */
export interface TabDetails {
  tabValue: TabType;
  tabLabel: number;
}
