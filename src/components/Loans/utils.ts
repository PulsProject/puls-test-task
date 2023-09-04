import { ILoan, ILoansTab } from './types';

export enum STATUSES {
  WAITING_APPRUVAL = 'waiting approval',
  TO_BE_DISBURSED = 'to be disbursed',
  CLOSED = 'closed',
  PENDING_SETTLEMENT = 'pending settlement',
  REJECTED = 'rejected',
  ACTIVE = 'active',
}

export const LOAN_STATUS_TABS: Array<ILoansTab> = [
  {
    title: 'Approved Loans',
    value: STATUSES.WAITING_APPRUVAL,
  },
  {
    title: 'Requests',
    value: STATUSES.PENDING_SETTLEMENT,
  },
  {
    title: 'Active Loans',
    value: STATUSES.ACTIVE,
  },
  {
    title: 'Closed Loans',
    value: STATUSES.CLOSED,
  },
  {
    title: 'Rejected Loans',
    value: STATUSES.REJECTED,
  },
];

export const getLoansByStatus = (
  loans: Array<ILoan>,
  status: string,
): Array<ILoan> => {
  switch (status) {
    case STATUSES.WAITING_APPRUVAL:
      return loans.filter(
        (loan: ILoan) => loan.status === STATUSES.WAITING_APPRUVAL,
      );
    case STATUSES.CLOSED:
      return loans.filter((loan: ILoan) => loan.status === STATUSES.CLOSED);
    case STATUSES.PENDING_SETTLEMENT:
      return loans.filter(
        (loan: ILoan) =>
          loan.status === STATUSES.PENDING_SETTLEMENT ||
          loan.status === STATUSES.TO_BE_DISBURSED,
      );
    case STATUSES.REJECTED:
      return loans.filter((loan: ILoan) => loan.status === STATUSES.REJECTED);
    case STATUSES.ACTIVE:
      return loans.filter((loan: ILoan) => loan.status === STATUSES.ACTIVE);
    default:
      return loans;
  }
};
