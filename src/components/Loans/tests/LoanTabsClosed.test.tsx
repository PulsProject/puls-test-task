import renderer from 'react-test-renderer';

import { LoansTabs } from '../LoansTabs';

// eslint-disable-next-line import/extensions
import data from '../../../data/loans.json';
import { LoanRequest } from '../LoanRequest';

it('renders <LoansTabs/> with closed only data', () => {
  const { loanRequests } = data as unknown as { loanRequests: LoanRequest[] };

  const testData = loanRequests.filter((loan) => loan.status === 'closed');

  const tree = renderer.create(<LoansTabs loanRequests={testData} />).toJSON();
  expect(tree).toMatchSnapshot();
});
