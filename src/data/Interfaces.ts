export enum LoanStatus {
  WAITING_APPROVAL = 'waiting approval',
  PENDING_SETTLEMENT = 'pending settlement',
  TO_BE_DISBURSED = 'to be disbursed',
  ACTIVE = 'active',
  REJECTED = 'rejected',
  CLOSED = 'closed',
}

export type StatusType =
  | LoanStatus.WAITING_APPROVAL
  | LoanStatus.PENDING_SETTLEMENT
  | LoanStatus.TO_BE_DISBURSED
  | LoanStatus.ACTIVE
  | LoanStatus.REJECTED
  | LoanStatus.CLOSED;

export interface LoanRequest {
  id: number;
  externalId: string;
  amount: number;
  duration: number;
  status: StatusType;
  monthlyPayment: number;
  interestRate: number;
  externalProductId: number;
  createdAt: string | null;
  updatedAt: string | null;
  rejectedAt: string | null;
  approvedAt: string | null;
  rejectionReason: string | null;
  closedAt: string | null;
  activatedAt: string | null;
  account: Account;
}

export interface Account {
  id: number;
  providerId: string;
  accountNumber: string;
  iban: string;
  currency: string;
  type: string;
  holder: string;
  holderType: string;
  isCompanyPublished: boolean;
  createdAt: string | null;
  loanLimit: number;
  company: Company;
}

export interface Company {
  id: number;
  legalForm: string;
  name: string;
  registrationNumber: string;
  registrationDistrict: string;
  registrationDate: string;
  riskClass: string | null;
  loanLimit: number | null;
  country: string;
  street: string;
  state: string;
  postcode: string;
  city: string;
  employees: Employee;
  isDataComplete: boolean;
}

export interface Employee {
  id: number;
  name: string;
  roleName: string;
}
