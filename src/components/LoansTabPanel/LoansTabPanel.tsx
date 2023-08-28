import React from 'react';
import { Typography, Box } from '@mui/material';

interface LoansTabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const LoansTabPanel: React.FC<LoansTabPanelProps> =  (props: LoansTabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
  );
};

export default LoansTabPanel;