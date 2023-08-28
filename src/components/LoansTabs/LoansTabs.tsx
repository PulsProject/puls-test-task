import React from 'react';
import { Tabs, Tab, Box } from '@mui/material/';
import LoansList from '../Loans/LoansList';
import LoansTabPanel from '../LoansTabPanel/LoansTabPanel';
import Message from '../Message/Message';
// eslint-disable-next-line import/extensions
import data from '../../data/loans.json';

function tabProps(index: number) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

const LoansTabs: React.FC = () => {
  const { loanRequests = [] }: any = data;
  const approvedLoans = loanRequests.filter((loan: any) => loan.status === 'waiting approval');
  const requests = loanRequests.filter((loan: any) => loan.status === 'pending settlement' || loan.status === 'to be disbursed');
  const activeLoans = loanRequests.filter((loan: any) => loan.status === 'active');
  const closedLoans = loanRequests.filter((loan: any) => loan.status === 'closed');
  const rejectedLoans = loanRequests.filter((loan: any) => loan.status === 'rejected');
  const [value, setValue] = React.useState(0);

  const approvedTabLabel = `Approved Loans ${activeLoans.length}`;
  const requestsTabLabel = `Requests ${requests.length}`;
  const activeTabLabel = `Active Loans ${activeLoans.length}`;
  const closedTabLabel = `Closed Loans ${closedLoans.length}`;
  const rejectedTabLabel = `Rejected Loans ${rejectedLoans.length}`;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  if (!loanRequests.length) {
    return <Message />;
  }

  return (
        <>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="loans tabs">
                        {!!approvedLoans.length && <Tab label={approvedTabLabel} {...tabProps(0)} />}
                        {!!requests.length && <Tab label={requestsTabLabel} {...tabProps(1)} />}
                        {!!activeLoans.length && <Tab label={activeTabLabel} {...tabProps(2)} />}
                        {!!closedLoans.length && <Tab label={closedTabLabel} {...tabProps(3)} />}
                        {!!rejectedLoans.length && <Tab label={rejectedTabLabel} {...tabProps(4)} />}
                    </Tabs>
                </Box>
                <LoansTabPanel value={value} index={0}>
                    <LoansList loanRequests={approvedLoans}/>
                </LoansTabPanel>
                <LoansTabPanel value={value} index={1}>
                    <LoansList loanRequests={requests}/>
                </LoansTabPanel>
                <LoansTabPanel value={value} index={2}>
                    <LoansList loanRequests={activeLoans}/>
                </LoansTabPanel>
                <LoansTabPanel value={value} index={3}>
                    <LoansList loanRequests={closedLoans}/>
                </LoansTabPanel>
                <LoansTabPanel value={value} index={4}>
                    <LoansList loanRequests={rejectedLoans}/>
                </LoansTabPanel>
            </Box>
        </>
  );
};

export default LoansTabs;