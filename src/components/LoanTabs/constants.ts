export const WAITING_APPROVAL = 'waiting approval';
export const PENDING_SETTLEMENT = 'pending settlement';
export const TO_BE_DISBURSED = 'to be disbursed';
export const ACTIVE = 'active';
export const REJECTED = 'rejected';
export const CLOSED = 'closed';
export const APPROVED = 'approved';

export interface ITab {
  name: string;
  status: string;
}

export const TABS: ITab[] = [
  { name: 'Approved Loans', status: APPROVED },
  { name: 'Requests', status: WAITING_APPROVAL },
  { name: 'Active Loans', status: ACTIVE },
  { name: 'Closed Loans', status: CLOSED },
  { name: 'Rejected Loans', status: REJECTED },
];
