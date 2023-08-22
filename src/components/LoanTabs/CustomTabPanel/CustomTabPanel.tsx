import React from 'react';
import { Box } from '@mui/material';

interface CustomTabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel: React.FC<CustomTabPanelProps> = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`loan-tabpanel-${index}`}
      aria-labelledby={`loan-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>{children}</Box>
      )}
    </Box>
  );
};

export default CustomTabPanel;
