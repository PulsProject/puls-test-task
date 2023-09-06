import { useMemo, useState } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { LoansList } from './LoansList';

import { type LoanRequest } from './LoanRequest';
import { styled, useMediaQuery, useTheme } from '@mui/material';

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const StyledTab = styled(Tab)(({ theme }) => ({
  fontWeight: 700,
  padding: `${theme.spacing(2)} ${theme.spacing(0)}`,
}));

const Label = ({ label, count }: { label: string; count: number }) => (
  <Box sx={{ textTransform: 'capitalize' }}>
    {label}{' '}
    <Box component={'span'} sx={{ color: 'text.secondary' }}>
      {count}
    </Box>
  </Box>
);

function a11yProps(index: number) {
  return {
    id: `loans-tab-${index}`,
    'aria-controls': `loans-tabpanel-${index}`,
  };
}

export const LoansTabs = ({
  loanRequests,
}: {
  loanRequests: LoanRequest[];
}) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  // here probably some mistake status is `waiting approval` but Tab name `Approved Loans`
  const waitingApprovalLoans = useMemo(() => {
    return loanRequests.filter((loan) => loan.status === 'waiting approval');
  }, [loanRequests]);
  const loanIssuing = useMemo(() => {
    return loanRequests.filter(
      (loan) =>
        loan.status === 'pending settlement' ||
        loan.status === 'to be disbursed'
    );
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

  const [tab, setTab] = useState(() => {
    if (waitingApprovalLoans.length !== 0) {
      return 0;
    }
    if (loanIssuing.length !== 0) {
      return 1;
    }
    if (rejectedLoans.length !== 0) {
      return 2;
    }
    if (closedLoans.length !== 0) {
      return 3;
    }

    return -1;
  });

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  if (loanRequests.length === 0) {
    return <Box>There&apos;s nothing to show here</Box>;
  }

  return (
    <Box>
      <Box>
        <Tabs
          value={tab}
          onChange={handleChange}
          aria-label="loans tabs"
          textColor="secondary"
          indicatorColor="secondary"
          variant="scrollable"
          scrollButtons={mobile}
          allowScrollButtonsMobile={mobile}
          sx={{
            '& button:not(:last-child)': {
              mr: 3,
            },
          }}
        >
          {waitingApprovalLoans.length > 0 && (
            <StyledTab
              label={
                <Label
                  count={waitingApprovalLoans.length}
                  label="approved loans"
                />
              }
              value={0}
              {...a11yProps(0)}
            />
          )}
          {loanIssuing.length > 0 && (
            <StyledTab
              label={<Label count={loanIssuing.length} label="requests" />}
              value={1}
              {...a11yProps(1)}
            />
          )}
          {activeLoans.length > 0 && (
            <StyledTab
              label={<Label count={activeLoans.length} label="active loans" />}
              value={2}
              {...a11yProps(2)}
            />
          )}
          {closedLoans.length > 0 && (
            <StyledTab
              label={<Label count={closedLoans.length} label="closed loans" />}
              value={3}
              {...a11yProps(3)}
            />
          )}
          {rejectedLoans.length > 0 && (
            <StyledTab
              label={
                <Label count={rejectedLoans.length} label="rejected loans" />
              }
              value={4}
              {...a11yProps(4)}
            />
          )}
        </Tabs>
      </Box>
      <TabPanel value={tab} index={0}>
        <LoansList loans={waitingApprovalLoans} />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <LoansList loans={loanIssuing} />
      </TabPanel>
      <TabPanel value={tab} index={2}>
        <LoansList loans={activeLoans} />
      </TabPanel>
      <TabPanel value={tab} index={3}>
        <LoansList loans={closedLoans} />
      </TabPanel>
      <TabPanel value={tab} index={4}>
        <LoansList loans={rejectedLoans} />
      </TabPanel>
    </Box>
  );
};
