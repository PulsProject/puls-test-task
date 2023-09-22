import { Status } from '../interfaces/loans';
import useTabs from './useTabs';

const waitingApproval = {
  id: 1,
  externalId: 'loan1',
  amount: 1000,
  duration: 12,
  status: Status.WAITING_APPROVAL,
  monthlyPayment: 3715.63,
  interestRate: 0,
  externalProductId: 12345,
  createdAt: '2023-09-22T12:00:00Z',
  updatedAt: '2023-09-23T10:30:00Z',
  rejectedAt: null,
  approvedAt: '2023-09-23T09:00:00Z',
  rejectionReason: null,
  closedAt: null,
  activatedAt: '2023-09-22T14:30:00Z',
  account: {
    id: 101,
    providerId: 'prov123',
    accountNumber: '1234567890',
    iban: 'IBAN1234567890',
    currency: 'USD',
    type: 'savings',
    holder: 'John Doe',
    holderType: 'individual',
    isCompanyPublished: false,
    createdAt: '2023-09-22T13:15:00Z',
    loanLimit: 20000,
    company: {
      id: 201,
      legalForm: 'LLC',
      name: 'Example Company',
      registrationNumber: '123-456-789',
      registrationDistrict: 'District ABC',
      registrationDate: '2020-01-15',
      riskClass: null,
      loanLimit: null,
      country: 'USA',
      street: '123 Main St',
      state: 'CA',
      postcode: '90210',
      city: 'Los Angeles',
      employees: [
        { id: 1, name: 'Employee 1', roleName: 'Manager' },
        { id: 2, name: 'Employee 2', roleName: 'Developer' },
      ],
      isDataComplete: true,
    },
  },
};

const toBeDisbursed = {
  id: 2,
  externalId: 'loan2',
  amount: 2000,
  duration: 24,
  status: Status.TO_BE_DISBURSED,
  monthlyPayment: 3715.63,
  interestRate: 0,
  externalProductId: 12345,
  createdAt: '2023-09-22T12:00:00Z',
  updatedAt: '2023-09-23T10:30:00Z',
  rejectedAt: null,
  approvedAt: '2023-09-23T09:00:00Z',
  rejectionReason: null,
  closedAt: null,
  activatedAt: '2023-09-22T14:30:00Z',
  account: {
    id: 101,
    providerId: 'prov123',
    accountNumber: '1234567890',
    iban: 'IBAN1234567890',
    currency: 'USD',
    type: 'savings',
    holder: 'John Doe',
    holderType: 'individual',
    isCompanyPublished: false,
    createdAt: '2023-09-22T13:15:00Z',
    loanLimit: 20000,
    company: {
      id: 201,
      legalForm: 'LLC',
      name: 'Example Company',
      registrationNumber: '123-456-789',
      registrationDistrict: 'District ABC',
      registrationDate: '2020-01-15',
      riskClass: null,
      loanLimit: null,
      country: 'USA',
      street: '123 Main St',
      state: 'CA',
      postcode: '90210',
      city: 'Los Angeles',
      employees: [
        { id: 1, name: 'Employee 1', roleName: 'Manager' },
        { id: 2, name: 'Employee 2', roleName: 'Developer' },
      ],
      isDataComplete: true,
    },
  },
};

const closed = {
  id: 3,
  externalId: 'loan2',
  amount: 2000,
  duration: 24,
  status: Status.CLOSED,
  monthlyPayment: 3715.63,
  interestRate: 0,
  externalProductId: 12345,
  createdAt: '2023-09-22T12:00:00Z',
  updatedAt: '2023-09-23T10:30:00Z',
  rejectedAt: null,
  approvedAt: '2023-09-23T09:00:00Z',
  rejectionReason: null,
  closedAt: null,
  activatedAt: '2023-09-22T14:30:00Z',
  account: {
    id: 101,
    providerId: 'prov123',
    accountNumber: '1234567890',
    iban: 'IBAN1234567890',
    currency: 'USD',
    type: 'savings',
    holder: 'John Doe',
    holderType: 'individual',
    isCompanyPublished: false,
    createdAt: '2023-09-22T13:15:00Z',
    loanLimit: 20000,
    company: {
      id: 201,
      legalForm: 'LLC',
      name: 'Example Company',
      registrationNumber: '123-456-789',
      registrationDistrict: 'District ABC',
      registrationDate: '2020-01-15',
      riskClass: null,
      loanLimit: null,
      country: 'USA',
      street: '123 Main St',
      state: 'CA',
      postcode: '90210',
      city: 'Los Angeles',
      employees: [
        { id: 1, name: 'Employee 1', roleName: 'Manager' },
        { id: 2, name: 'Employee 2', roleName: 'Developer' },
      ],
      isDataComplete: true,
    },
  },
};

const pendingSettlement = {
  id: 4,
  externalId: 'loan2',
  amount: 2000,
  duration: 24,
  status: Status.PENDING_SETTLEMENT,
  monthlyPayment: 3715.63,
  interestRate: 0,
  externalProductId: 12345,
  createdAt: '2023-09-22T12:00:00Z',
  updatedAt: '2023-09-23T10:30:00Z',
  rejectedAt: null,
  approvedAt: '2023-09-23T09:00:00Z',
  rejectionReason: null,
  closedAt: null,
  activatedAt: '2023-09-22T14:30:00Z',
  account: {
    id: 101,
    providerId: 'prov123',
    accountNumber: '1234567890',
    iban: 'IBAN1234567890',
    currency: 'USD',
    type: 'savings',
    holder: 'John Doe',
    holderType: 'individual',
    isCompanyPublished: false,
    createdAt: '2023-09-22T13:15:00Z',
    loanLimit: 20000,
    company: {
      id: 201,
      legalForm: 'LLC',
      name: 'Example Company',
      registrationNumber: '123-456-789',
      registrationDistrict: 'District ABC',
      registrationDate: '2020-01-15',
      riskClass: null,
      loanLimit: null,
      country: 'USA',
      street: '123 Main St',
      state: 'CA',
      postcode: '90210',
      city: 'Los Angeles',
      employees: [
        { id: 1, name: 'Employee 1', roleName: 'Manager' },
        { id: 2, name: 'Employee 2', roleName: 'Developer' },
      ],
      isDataComplete: true,
    },
  },
};

const rejected = {
  id: 5,
  externalId: 'loan2',
  amount: 2000,
  duration: 24,
  status: Status.REJECTED,
  monthlyPayment: 3715.63,
  interestRate: 0,
  externalProductId: 12345,
  createdAt: '2023-09-22T12:00:00Z',
  updatedAt: '2023-09-23T10:30:00Z',
  rejectedAt: null,
  approvedAt: '2023-09-23T09:00:00Z',
  rejectionReason: null,
  closedAt: null,
  activatedAt: '2023-09-22T14:30:00Z',
  account: {
    id: 101,
    providerId: 'prov123',
    accountNumber: '1234567890',
    iban: 'IBAN1234567890',
    currency: 'USD',
    type: 'savings',
    holder: 'John Doe',
    holderType: 'individual',
    isCompanyPublished: false,
    createdAt: '2023-09-22T13:15:00Z',
    loanLimit: 20000,
    company: {
      id: 201,
      legalForm: 'LLC',
      name: 'Example Company',
      registrationNumber: '123-456-789',
      registrationDistrict: 'District ABC',
      registrationDate: '2020-01-15',
      riskClass: null,
      loanLimit: null,
      country: 'USA',
      street: '123 Main St',
      state: 'CA',
      postcode: '90210',
      city: 'Los Angeles',
      employees: [
        { id: 1, name: 'Employee 1', roleName: 'Manager' },
        { id: 2, name: 'Employee 2', roleName: 'Developer' },
      ],
      isDataComplete: true,
    },
  },
};

const active = {
  id: 6,
  externalId: 'loan2',
  amount: 2000,
  duration: 24,
  status: Status.ACTIVE,
  monthlyPayment: 3715.63,
  interestRate: 0,
  externalProductId: 12345,
  createdAt: '2023-09-22T12:00:00Z',
  updatedAt: '2023-09-23T10:30:00Z',
  rejectedAt: null,
  approvedAt: '2023-09-23T09:00:00Z',
  rejectionReason: null,
  closedAt: null,
  activatedAt: '2023-09-22T14:30:00Z',
  account: {
    id: 101,
    providerId: 'prov123',
    accountNumber: '1234567890',
    iban: 'IBAN1234567890',
    currency: 'USD',
    type: 'savings',
    holder: 'John Doe',
    holderType: 'individual',
    isCompanyPublished: false,
    createdAt: '2023-09-22T13:15:00Z',
    loanLimit: 20000,
    company: {
      id: 201,
      legalForm: 'LLC',
      name: 'Example Company',
      registrationNumber: '123-456-789',
      registrationDistrict: 'District ABC',
      registrationDate: '2020-01-15',
      riskClass: null,
      loanLimit: null,
      country: 'USA',
      street: '123 Main St',
      state: 'CA',
      postcode: '90210',
      city: 'Los Angeles',
      employees: [
        { id: 1, name: 'Employee 1', roleName: 'Manager' },
        { id: 2, name: 'Employee 2', roleName: 'Developer' },
      ],
      isDataComplete: true,
    },
  },
};

describe('useTabs', () => {
  it('should return 5 tabs based on 6 loans', () => {
    const tabs = useTabs([
      waitingApproval,
      toBeDisbursed,
      closed,
      pendingSettlement,
      rejected,
      active,
    ]);

    expect(tabs).toHaveLength(5);

    expect(tabs[0].label).toBe('Approved Loans 2'); // PENDING_SETTLEMENT and TO_BE_DISBURSED
    expect(tabs[1].label).toBe('Requests 1'); // WAITING_APPROVAL
    expect(tabs[2].label).toBe('Active Loans 1'); // ACTIVE
    expect(tabs[3].label).toBe('Closed Loans 1'); // CLOSED
    expect(tabs[4].label).toBe('Rejected Loans 1'); // REJECTED
  });
  it('should return 4 tabs based on 4 loans and keep the order without Approved Loans', () => {
    const tabs = useTabs([
      waitingApproval,
      closed,
      rejected,
      active,
    ]);

    expect(tabs).toHaveLength(4);

    expect(tabs[0].label).toBe('Requests 1'); // WAITING_APPROVAL
    expect(tabs[1].label).toBe('Active Loans 1'); // ACTIVE
    expect(tabs[2].label).toBe('Closed Loans 1'); // CLOSED
    expect(tabs[3].label).toBe('Rejected Loans 1'); // REJECTED
  });
  it('should return 3 tabs based on 4 loans and keep the order without Closed and Active', () => {
    const tabs = useTabs([
      waitingApproval,
      toBeDisbursed,
      pendingSettlement,
      rejected,
    ]);

    expect(tabs).toHaveLength(3);

    expect(tabs[0].label).toBe('Approved Loans 2'); // PENDING_SETTLEMENT and TO_BE_DISBURSED
    expect(tabs[1].label).toBe('Requests 1'); // WAITING_APPROVAL
    expect(tabs[2].label).toBe('Rejected Loans 1'); // REJECTED
  });

  it('should return empty array based on no no loans', () => {
    const tabs = useTabs([]);
    expect(tabs).toHaveLength(0);
  });
});
