export interface ILoanRequest {
  id: number;
  externalId: string;
  amount: number;
  duration: number;
  status: string;
  monthlyPayment: number;
  interestRate: number;
  externalProductId: number;
  createdAt: string;
  updatedAt: string | null;
  rejectedAt: string | null;
  approvedAt: string | null;
  rejectionReason: string | null;
  closedAt: string | null;
  activatedAt: string | null;
  account: {
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
    company: {
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
      employees: {
        id: number;
        name: string;
        roleName: string;
      }[];
      isDataComplete: boolean;
    };
  };
}
