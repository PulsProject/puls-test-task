export type Status =
  | 'waiting approval'
  | 'pending settlement'
  | 'to be disbursed'
  | 'active'
  | 'rejected'
  | 'closed';

export interface LoanRequest {
  id: number;
  externalId: string;
  amount: number;
  duration: number;
  status: Status;
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
