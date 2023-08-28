import React from 'react';
import { render } from '@testing-library/react';
import LoansTabs from './LoansTabs';

jest.mock('../Loans/LoansList', () => () => 'LoansList');

describe('<LoansTabs/>', () => {
  it('it should show 5 tabs and a LoansList component', () => {
    const { container } = render(<LoansTabs/>);
    expect(container.firstChild).toMatchSnapshot();
  });
});