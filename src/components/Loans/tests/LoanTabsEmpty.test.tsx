import renderer from 'react-test-renderer';

import { LoansTabs } from '../LoansTabs';

it('renders <LoansTabs/> with no data', () => {
  const tree = renderer.create(<LoansTabs loanRequests={[]} />).toJSON();
  expect(tree).toMatchSnapshot();
});
