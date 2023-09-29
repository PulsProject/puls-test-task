import React from 'react';
import Box from '@mui/material/Box';
import { TabDetails } from './loansUtils';

const TabLabel: React.FC<TabDetails> = ({ tabValue, tabLabel }) => (
  <Box sx={{ textTransform: 'capitalize' }}>
    {tabValue} {tabLabel}
  </Box>
);

export default TabLabel;
