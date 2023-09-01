import React from 'react';
import { render } from '@testing-library/react';
import LoansList from './LoansList';

/**
 * test failed because of bug with material ui and replaceAll function. I googled it, seems like the pr of fix was created
 */
test('renders the loans list', () => {
  render(<LoansList/>);
});
