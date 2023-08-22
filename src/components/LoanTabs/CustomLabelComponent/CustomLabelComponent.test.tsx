import React from 'react';
import { render } from '@testing-library/react';
import CustomLabelComponent from './CustomLabelComponent';

describe('CustomLabelComponent', () => {
  it('should render the tabName and quantity correctly', () => {
    const tabName = 'Tab 1';
    const quantity = 10;

    const { getByText } = render(
      <CustomLabelComponent tabName={tabName} quantity={quantity} />,
    );

    expect(getByText(tabName)).toBeInTheDocument();
    expect(getByText(quantity.toString())).toBeInTheDocument();
  });
});
