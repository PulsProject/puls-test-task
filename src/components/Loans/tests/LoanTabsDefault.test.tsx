import renderer from 'react-test-renderer';

import { LoansTabs } from '../LoansTabs';

// eslint-disable-next-line import/extensions
import data from '../../../data/loans.json';
import { LoanRequest } from '../LoanRequest';

it('renders <LoansTabs/> with default data', () => {
  const { loanRequests } = data as unknown as { loanRequests: LoanRequest[] };

  const tree = renderer
    .create(<LoansTabs loanRequests={loanRequests} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
