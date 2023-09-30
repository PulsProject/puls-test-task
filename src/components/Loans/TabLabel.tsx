import React from 'react';
import Box from '@mui/material/Box';
import { TabDetails } from './loansUtils';

const TabLabel: React.FC<TabDetails> = ({ tabValue, tabLabel }) => (
  <Box sx={{ textTransform: 'capitalize' }}>
    {tabValue.split('_').join(' ')} {tabLabel}
  </Box>
);

export default TabLabel;
