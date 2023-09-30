import React from 'react';
import Box from '@mui/material/Box';
import { TabDetails } from './loansUtils';

const TabLabel: React.FC<TabDetails> = ({ tabValue, tabLabel }) => {
  const value = tabValue.split('_').join(' ');

  return (
    <Box sx={{ textTransform: 'capitalize' }}>
      {value} {tabLabel}
    </Box>
  )
};

export default TabLabel;
