import { LoanRequestsByTabs, LoanTab, TabDetails } from '../loansUtils';
// eslint-disable-next-line import/extensions
import data from '../../../data/loans.json';
import { LoanRequest, LoanStatus } from '../../../data/Interfaces';

export const mockLoansByTabs = {
  [LoanTab.WAITING]: [
    {
      id: 34,
      externalId: 'G81FV',
      amount: 1000,
      duration: 1,
      status: 'waiting approval',
      monthlyPayment: 1050,
      interestRate: 5,
      externalProductId: 1,
      createdAt: '2021-09-14T13:59:52.895Z',
      updatedAt: null,
      rejectedAt: null,
      approvedAt: null,
      rejectionReason: null,
      closedAt: null,
      activatedAt: null,
      account: {
        id: 123,
        providerId: 'A675345978112114692.1',
        accountNumber: '4711951501',
        iban: 'DE40••••••••••••951501',
        currency: 'EUR',
        type: 'Savings account',
        holder: 'Demo Demo',
        holderType: 'business',
        isCompanyPublished: true,
        createdAt: '2021-07-13T10:09:22.032Z',
        loanLimit: 3,
        company: {
          id: 76,
          legalForm: 'GmbH',
          name: 'Nancy Logan',
          registrationNumber: 'HRB 178881 B',
          registrationDistrict: 'Charlottenburg',
          registrationDate: '2021-07-06T00:00:00.000Z',
          riskClass: null,
          loanLimit: null,
          country: 'Germany',
          street: 'Alley Street 8',
          state: 'state',
          postcode: '56789',
          city: 'Berlin',
          employees: [
            {
              id: 10,
              name: 'Nancy Logan',
              roleName: 'Director',
            },
            {
              id: 11,
              name: 'test',
              roleName: 'test',
            },
          ],
          isDataComplete: true,
        },
      },
    },
  ],
  [LoanTab.PENDING]: [
    {
      id: 23,
      externalId: 'R9ZEQ',
      amount: 50000,
      duration: 1,
      status: 'to be disbursed',
      monthlyPayment: 52500,
      interestRate: 5,
      externalProductId: 1,
      createdAt: '2021-09-06T12:56:40.342Z',
      updatedAt: '2021-10-04T07:45:58.000Z',
      rejectedAt: null,
      approvedAt: '2021-10-04T07:45:54.315Z',
      rejectionReason: null,
      closedAt: null,
      activatedAt: null,
      account: {
        id: 132,
        providerId: 'A679558195993313283.3',
        accountNumber: '4711951501',
        iban: 'DE40••••••••••••951501',
        currency: 'EUR',
        type: 'Savings account',
        holder: 'Demo Demo',
        holderType: 'business',
        isCompanyPublished: true,
        createdAt: '2021-07-28T06:52:27.999Z',
        loanLimit: 3,
        company: {
          id: 44,
          legalForm: 'GmbH',
          name: 'Cromwell Marketing',
          registrationNumber: 'HRB 178881 B',
          registrationDistrict: 'Charlottenburg',
          registrationDate: '2021-06-01T00:00:00.000Z',
          riskClass: 'A',
          loanLimit: 30,
          country: 'Germany',
          street: 'Gewerbehof 10',
          state: 'Berlin',
          postcode: '13597',
          city: 'Berlin',
          employees: [
            {
              id: 8,
              name: 'Irene Crocket',
              roleName: 'Manager',
            },
            {
              id: 4,
              name: 'Ashley Cromwell',
              roleName: 'Director',
            },
          ],
          isDataComplete: true,
        },
      },
    },
    {
      id: 7,
      externalId: 'VZAEM',
      amount: 19000,
      duration: 4,
      status: 'pending settlement',
      monthlyPayment: 5358.22,
      interestRate: 5,
      externalProductId: 1,
      createdAt: '2021-07-27T08:25:28.046Z',
      updatedAt: null,
      rejectedAt: null,
      approvedAt: null,
      rejectionReason: null,
      closedAt: null,
      activatedAt: null,
      account: {
        id: 113,
        providerId: 'A550856033602961410.23',
        accountNumber: '4711951501',
        iban: 'DE40••••••••••••951501',
        currency: 'EUR',
        type: 'Savings account',
        holder: 'Demo Demo',
        holderType: 'business',
        isCompanyPublished: true,
        createdAt: null,
        loanLimit: 3,
        company: {
          id: 44,
          legalForm: 'GmbH',
          name: 'Cromwell Marketing',
          registrationNumber: 'HRB 178881 B',
          registrationDistrict: 'Charlottenburg',
          registrationDate: '2021-06-01T00:00:00.000Z',
          riskClass: 'A',
          loanLimit: 30,
          country: 'Germany',
          street: 'Gewerbehof 10',
          state: 'Berlin',
          postcode: '13597',
          city: 'Berlin',
          employees: [
            {
              id: 4,
              name: 'Ashley Cromwell',
              roleName: 'Director',
            },
            {
              id: 8,
              name: 'Irene Crocket',
              roleName: 'Manager',
            },
          ],
          isDataComplete: true,
        },
      },
    },
  ],
  [LoanTab.ACTIVE]: [
    {
      id: 1,
      externalId: 'R9ZE2',
      amount: 21500,
      duration: 7,
      status: 'active',
      monthlyPayment: 3715.63,
      interestRate: 0,
      externalProductId: 1,
      createdAt: '2021-07-26T16:11:40.953Z',
      updatedAt: null,
      rejectedAt: null,
      approvedAt: null,
      rejectionReason: null,
      closedAt: null,
      activatedAt: null,
      account: {
        id: 113,
        providerId: 'A550856033602961410.23',
        accountNumber: '4711951501',
        iban: 'DE40••••••••••••951501',
        currency: 'EUR',
        type: 'Savings account',
        holder: 'Demo Demo',
        holderType: 'business',
        isCompanyPublished: true,
        createdAt: null,
        loanLimit: 3,
        company: {
          id: 44,
          legalForm: 'GmbH',
          name: 'Cromwell Marketing',
          registrationNumber: 'HRB 178881 B',
          registrationDistrict: 'Charlottenburg',
          registrationDate: '2021-06-01T00:00:00.000Z',
          riskClass: 'A',
          loanLimit: 30,
          country: 'Germany',
          street: 'Gewerbehof 10',
          state: 'Berlin',
          postcode: '13597',
          city: 'Berlin',
          employees: [
            {
              id: 4,
              name: 'Ashley Cromwell',
              roleName: 'Director',
            },
            {
              id: 8,
              name: 'Irene Crocket',
              roleName: 'Manager',
            },
          ],
          isDataComplete: true,
        },
      },
    },
  ],
  [LoanTab.CLOSED]: [
    {
      id: 33,
      externalId: '7G4PP',
      amount: 17500,
      duration: 7,
      status: 'closed',
      monthlyPayment: 3024.35,
      interestRate: 5,
      externalProductId: 1,
      createdAt: '2021-09-10T08:37:56.654Z',
      updatedAt: '2021-09-15T15:04:58.000Z',
      rejectedAt: null,
      approvedAt: '2021-09-15T14:56:47.045Z',
      rejectionReason: null,
      closedAt: '2021-09-15T00:00:00.000Z',
      activatedAt: '2021-09-15T00:00:00.000Z',
      account: {
        id: 113,
        providerId: 'A550856033602961410.23',
        accountNumber: '4711951501',
        iban: 'DE40••••••••••••951501',
        currency: 'EUR',
        type: 'Savings account',
        holder: 'Demo Demo',
        holderType: 'business',
        isCompanyPublished: true,
        createdAt: null,
        loanLimit: 3,
        company: {
          id: 44,
          legalForm: 'GmbH',
          name: 'Cromwell Marketing',
          registrationNumber: 'HRB 178881 B',
          registrationDistrict: 'Charlottenburg',
          registrationDate: '2021-06-01T00:00:00.000Z',
          riskClass: 'A',
          loanLimit: 30,
          country: 'Germany',
          street: 'Gewerbehof 10',
          state: 'Berlin',
          postcode: '13597',
          city: 'Berlin',
          employees: [
            {
              id: 4,
              name: 'Ashley Cromwell',
              roleName: 'Director',
            },
            {
              id: 8,
              name: 'Irene Crocket',
              roleName: 'Manager',
            },
          ],
          isDataComplete: true,
        },
      },
    },
  ],
  [LoanTab.REJECTED]: [
    {
      id: 2,
      externalId: 'R9ZE1',
      amount: 29000,
      duration: 6,
      status: 'rejected',
      monthlyPayment: 5713.51,
      interestRate: 0,
      externalProductId: 1,
      createdAt: '2021-07-26T16:16:45.959Z',
      updatedAt: null,
      rejectedAt: null,
      approvedAt: null,
      rejectionReason: null,
      closedAt: null,
      activatedAt: null,
      account: {
        id: 113,
        providerId: 'A550856033602961410.23',
        accountNumber: '4711951501',
        iban: 'DE40••••••••••••951501',
        currency: 'EUR',
        type: 'Savings account',
        holder: 'Demo Demo',
        holderType: 'business',
        isCompanyPublished: true,
        createdAt: null,
        loanLimit: 3,
        company: {
          id: 44,
          legalForm: 'GmbH',
          name: 'Cromwell Marketing',
          registrationNumber: 'HRB 178881 B',
          registrationDistrict: 'Charlottenburg',
          registrationDate: '2021-06-01T00:00:00.000Z',
          riskClass: 'A',
          loanLimit: 30,
          country: 'Germany',
          street: 'Gewerbehof 10',
          state: 'Berlin',
          postcode: '13597',
          city: 'Berlin',
          employees: [
            {
              id: 4,
              name: 'Ashley Cromwell',
              roleName: 'Director',
            },
            {
              id: 8,
              name: 'Irene Crocket',
              roleName: 'Manager',
            },
          ],
          isDataComplete: true,
        },
      },
    },
  ],
} as unknown as LoanRequestsByTabs;

export const mockTabDetails = [
  { tabValue: LoanTab.WAITING, tabLabel: 1 },
  { tabValue: LoanTab.PENDING, tabLabel: 2 },
  { tabValue: LoanTab.ACTIVE, tabLabel: 1 },
  { tabValue: LoanTab.CLOSED, tabLabel: 1 },
  { tabValue: LoanTab.REJECTED, tabLabel: 1 },
] as unknown as TabDetails[];

export const loanRequests = (data as unknown as { loanRequests: LoanRequest[] }).loanRequests;
export const loanRequestsWithoutActiveStatus = loanRequests.filter(
  (loanRequest) => loanRequest.status !== LoanStatus.ACTIVE,
);
export const mockLoansByTabsWithEmptyActiveTabList = { ...mockLoansByTabs };
mockLoansByTabsWithEmptyActiveTabList[LoanTab.ACTIVE] = [];

export const mockTabDetailsWithoutActiveTab = mockTabDetails.filter(
  (tabDetail) => tabDetail.tabValue !== LoanTab.ACTIVE,
);
export const mockLoansByTabsEmpty = { ...mockLoansByTabs };
mockLoansByTabsEmpty[LoanTab.WAITING] = [];
mockLoansByTabsEmpty[LoanTab.PENDING] = [];
mockLoansByTabsEmpty[LoanTab.ACTIVE] = [];
mockLoansByTabsEmpty[LoanTab.CLOSED] = [];
mockLoansByTabsEmpty[LoanTab.REJECTED] = [];
