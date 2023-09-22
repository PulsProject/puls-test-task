import { Loans, Tabs, Status } from '../interfaces/loans';

const TABS = [
  { label: (loadsAmount: number) => `Approved Loans ${loadsAmount}`, status: [Status.PENDING_SETTLEMENT, Status.TO_BE_DISBURSED], id: `${Status.PENDING_SETTLEMENT}${Status.TO_BE_DISBURSED}` },
  { label: (loadsAmount: number) => `Requests ${loadsAmount}`, status: [Status.WAITING_APPROVAL], id: Status.WAITING_APPROVAL  },
  { label: (loadsAmount: number) => `Active Loans ${loadsAmount}`, status: [Status.ACTIVE], id: Status.ACTIVE },
  { label: (loadsAmount: number) => `Closed Loans ${loadsAmount}`, status: [Status.CLOSED], id: Status.CLOSED },
  { label: (loadsAmount: number) => `Rejected Loans ${loadsAmount}`, status: [Status.REJECTED], id: Status.REJECTED },
];

const useTabs = (loans: Loans[]): Tabs[] => {
  return TABS.reduce((acc: Tabs[], tab) => {
    const loadsAmount = loans.reduce((count, loanElement: Loans) => tab.status.includes(loanElement.status) ? count + 1 : count, 0);
    return loadsAmount > 0 ? [...acc, { ...tab, label: tab.label(loadsAmount) }] : acc;
  }, []);
};


export default useTabs;
