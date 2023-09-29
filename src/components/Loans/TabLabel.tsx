import React from 'react';
import Box from '@mui/material/Box';
import { TabDetails } from './Interfaces';

const TabLabel = ({ tabValue, tabLabel }: TabDetails) => (
  <Box sx={{ textTransform: 'capitalize' }}>
    {tabValue} {tabLabel}
  </Box>
);

export default TabLabel;
