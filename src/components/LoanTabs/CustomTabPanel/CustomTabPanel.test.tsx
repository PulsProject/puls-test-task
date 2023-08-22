import React from 'react';
import { render } from '@testing-library/react';
import CustomTabPanel from './CustomTabPanel';

describe('CustomTabPanel', () => {
  it('should render children when value equals index', () => {
    const { getByText } = render(
      <CustomTabPanel index={0} value={0}>
        Test Content
      </CustomTabPanel>,
    );

    expect(getByText('Test Content')).toBeInTheDocument();
  });

  it('should hide children when value does not equal index', () => {
    const { queryByText } = render(
      <CustomTabPanel index={1} value={0}>
        Test Content
      </CustomTabPanel>,
    );

    expect(queryByText('Test Content')).toBeNull();
  });
});
