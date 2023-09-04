export interface ILoan {
  id: number;
  externalId: string;
  amount: number;
  duration: number;
  status: string;
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
  account: IAccount;
}

export interface IAccount {
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
  company: ICompany;
}

export interface ICompany {
  id: number;
  legalForm: string;
  name: string;
  registrationNumber: string;
  registrationDistrict: string;
  registrationDate: string;
  riskClass: string;
  loanLimit: number;
  country: string;
  street: string;
  state: string;
  postcode: string;
  city: string;
  employees: Array<IEmployer>;
  isDataComplete: boolean;
}

export interface IEmployer {
  id: number;
  name: string;
  roleName: string;
}

export interface ILoansTab {
  value: string;
  title: string;
}
