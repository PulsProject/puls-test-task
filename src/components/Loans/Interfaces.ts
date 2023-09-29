import { LoanRequest } from '../../data/Interfaces';

export enum LoanTab {
  WAITING = 'waiting approval',
  PENDING = 'pending loans',
  ACTIVE = 'active loans',
  CLOSED = 'closed loans',
  REJECTED = 'rejected loans',
}
export type TabType =
  | LoanTab.WAITING
  | LoanTab.PENDING
  | LoanTab.ACTIVE
  | LoanTab.CLOSED
  | LoanTab.REJECTED;

// LoansMap contains filtered loan requests for each tab
export type LoansMap = {
  [key in TabType]: LoanRequest[];
};

// TabDetails is used to pass the tab value and label to the LoansTabs component
export interface TabDetails {
  tabValue: TabType;
  tabLabel: number;
}
