import React, { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// eslint-disable-next-line import/extensions
import LoansList from '../Loans/LoansList';
import Typography from '@mui/material/Typography';

const LoansTabs: React.FC<{ loanRequests: any[] }> = ({ loanRequests }) => {
  const [tabName, setTabName] = useState('Approved Loans');

  const approvedLoan = loanRequests.filter((loan: { status: string }) => loan.status === 'waiting approval');
  const requestLoan = loanRequests.filter((loan: { status: string }) =>['pending settlement', 'to be disbursed'].includes(loan.status));
  const activeLoan = loanRequests.filter((loan: { status: string }) => loan.status === 'active');
  const closedLoan = loanRequests.filter((loan: { status: string }) => loan.status === 'closed');
  const rejectedLoan = loanRequests.filter((loan: { status: string }) => loan.status === 'rejected');

  const tabs: { [key: string]: unknown[] } = {
    'Approved Loans': approvedLoan,
    'Requests': requestLoan,
    'Active Loans': activeLoan,
    'Closed Loans': closedLoan,
    'Rejected Loans': rejectedLoan,
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    const firstTabName = Object.entries(tabs).find(([, value]) => value.length > 0)?.[0];
    if (firstTabName) setTabName(firstTabName);
  }, []);

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setTabName(newValue);
  };
  const activeTabLoan = tabs[tabName];

  return (
    <>
      <Tabs value={tabName} onChange={handleTabChange}>
        {Object.entries(tabs).map(
          ([key, value]) =>
            value.length > 0 && (
              <Tab value={key} key={key} label={`${key} ${value.length}`} />
            ))}
      </Tabs>
      <div role="tabpanel">
        {activeTabLoan.length !== 0 ? <LoansList loanRequests={activeTabLoan} /> : <Typography>There&apos;s nothing to show here</Typography>}
      </div>
    </>
  );
};

export default LoansTabs;
