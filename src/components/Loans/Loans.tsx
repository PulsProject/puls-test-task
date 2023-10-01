import React from 'react';
import { Box, Typography } from '@mui/material';
import LoansTabs from '../Loans/LoansTabs';
import LoansList from '../Loans/LoansList';
import { splitLoansByTabs, mapLoansByTabsToTabDetails } from './loanMappers';
import { LoansByTabs, TabDetails } from './Interfaces';
import { LoanRequest } from '../../data/Interfaces';
// eslint-disable-next-line import/extensions
import data from '../../data/loans.json';

const Loans: React.FC = () => {
  const { loanRequests } = data as unknown as { loanRequests: LoanRequest[] };
  const loansByTabs: LoansByTabs = React.useMemo(() => splitLoansByTabs(loanRequests), [loanRequests]);
  const tabDetailsList: TabDetails[] = mapLoansByTabsToTabDetails(loansByTabs);
  const [tabValue, setTabValue] = React.useState(tabDetailsList[0]?.tabValue);
  const filteredLoans = loansByTabs[tabValue];

  return (
    <Box sx={{ width: '800px', maxWidth: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
      <Typography variant="h2" sx={{ marginBottom: 8 }}>Financing</Typography>

      {!loanRequests.length ? (
        <Box>Currently, there are no loan requests to display.</Box>
      ) : (
        <Box>
          <LoansTabs tabs={tabDetailsList} activeTabValue={tabValue} setTabValue={setTabValue} />
          <LoansList
            loanRequests={filteredLoans}
            role="tabpanel"
            id={`loans-list-${tabValue}`}
            aria-labelledby={`loan-tab-${tabValue}`}
          />
        </Box>
      )}
    </Box>
  );
};

export default Loans;
