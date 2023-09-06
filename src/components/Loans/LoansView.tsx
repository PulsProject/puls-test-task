import { useMemo, useState } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { LoansList } from './LoansList';

import { type LoanRequest } from './LoanRequest';
// eslint-disable-next-line import/extensions
import data from '../../data/loans.json';

function TabPanel(props: {
  children?: React.ReactNode;
  index: number;
  value: number;
}) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`loans-tabpanel-${index}`}
      aria-labelledby={`loans-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `loans-tab-${index}`,
    'aria-controls': `loans-tabpanel-${index}`,
  };
}

export const LoansView = () => {
  const [value, setValue] = useState(0);

  const { loanRequests } = data as unknown as { loanRequests: LoanRequest[] };

  const waitingApprovalLoans = useMemo(() => {
    return loanRequests.filter((loan) => loan.status === 'waiting approval');
  }, [loanRequests]);
  const pendingSettlementLoans = useMemo(() => {
    return loanRequests.filter((loan) => loan.status === 'pending settlement');
  }, [loanRequests]);
  const toBeDisbursedLoans = useMemo(() => {
    return loanRequests.filter((loan) => loan.status === 'to be disbursed');
  }, [loanRequests]);
  const activeLoans = useMemo(() => {
    return loanRequests.filter((loan) => loan.status === 'active');
  }, [loanRequests]);
  const rejectedLoans = useMemo(() => {
    return loanRequests.filter((loan) => loan.status === 'rejected');
  }, [loanRequests]);
  const closedLoans = useMemo(() => {
    return loanRequests.filter((loan) => loan.status === 'closed');
  }, [loanRequests]);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // eslint-disable-next-line no-console
  console.log(loanRequests);

  return (
    <Box>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="loans tabs"
          textColor="secondary"
          indicatorColor="secondary"
        >
          {/* TODO: add tab component */}
          {/* TODO: add hidden prop ???? dunno how to do it */}
          {waitingApprovalLoans.length > 0 && (
            <Tab
              value={value}
              // TODO: add count prop
              label={`Approved Loans 3`}
              sx={{ fontWeight: 700, py: 2, px: 0 }}
              {...a11yProps(0)}
            />
          )}
          {pendingSettlementLoans.length > 0 && (
            <Tab
              value={value}
              // TODO: add count prop
              label={`Pending Settlement Loans 2`}
              sx={{ fontWeight: 700, py: 2, px: 0 }}
              {...a11yProps(1)}
            />
          )}
          {toBeDisbursedLoans.length > 0 && (
            <Tab
              value={value}
              // TODO: add count prop
              label={`To Be Disbursed Loans 2`}
              sx={{ fontWeight: 700, py: 2, px: 0 }}
              {...a11yProps(2)}
            />
          )}
          {activeLoans.length > 0 && (
            <Tab
              value={value}
              // TODO: add count prop
              label={`Active Loans 2`}
              sx={{ fontWeight: 700, py: 2, px: 0 }}
              {...a11yProps(3)}
            />
          )}
          {rejectedLoans.length > 0 && (
            <Tab
              value={value}
              // TODO: add count prop
              label={`Rejected Loans 2`}
              sx={{ fontWeight: 700, py: 2, px: 0 }}
              {...a11yProps(4)}
            />
          )}
          {closedLoans.length > 0 && (
            <Tab
              value={value}
              // TODO: add count prop
              label={`Closed Loans 2`}
              sx={{ fontWeight: 700, py: 2, px: 0 }}
              {...a11yProps(5)}
            />
          )}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <LoansList loans={waitingApprovalLoans} />
      </TabPanel>
    </Box>
  );
};
