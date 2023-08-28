import React from 'react';
import { render } from '@testing-library/react';
import Message from './Message';

jest.mock('../../theme/theme', () => jest.fn());
jest.mock('../../data/loans.json', () => jest.fn(() => ({ loanRequests: [] })));

describe('<Message />', () => {
  it('it should show "There is nothing to show here!" message', () => {
    const { container } = render(<Message />);
    expect(container.firstChild).toMatchSnapshot();
  });
});