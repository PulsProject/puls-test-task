import { LoansTabs } from './LoansTabs';

// eslint-disable-next-line import/extensions
import data from '../../data/loans.json';
import { LoanRequest } from './LoanRequest';

export const LoansView = () => {
  // can add run type validation using libs like Zod, simple-runtypes, io-ts etc.
  const { loanRequests } = data as unknown as { loanRequests: LoanRequest[] };

  return <LoansTabs loanRequests={loanRequests} />;
};
