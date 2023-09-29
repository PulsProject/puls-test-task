import React from 'react';
import { Box, Typography } from '@mui/material';
import LoansTabs from '../Loans/LoansTabs';
import LoansList from '../Loans/LoansList';
import {
  splitLoanRequestsByTabs,
  mapLoanRequestsToTabDetails,
  LoanRequestsByTabs,
  TabDetails,
} from './loansUtils';
import { LoanRequest } from '../../data/Interfaces';
// eslint-disable-next-line import/extensions
import data from '../../data/loans.json';

const Loans: React.FC = () => {
  const { loanRequests } = data as unknown as { loanRequests: LoanRequest[] };
  const loanRequestsByTabs: LoanRequestsByTabs = React.useMemo(
    () => splitLoanRequestsByTabs(loanRequests),
    [loanRequests],
  );
  const tabDetailsList: TabDetails[] = mapLoanRequestsToTabDetails(loanRequestsByTabs);
  const [tabValue, setTabValue] = React.useState(tabDetailsList[0]?.tabValue);

  return (
    <>
      <Typography variant="h2" sx={{ marginBottom: 8 }}>Financing</Typography>

      {!loanRequests.length ? (
        <Box>We currently do not have any loan requests on record</Box>
      ) : (
        <Box>
          <LoansTabs tabs={tabDetailsList} activeTabValue={tabValue} setTabValue={setTabValue} />
          <LoansList loanRequests={loanRequestsByTabs} tabValue={tabValue} />
        </Box>
      )}
    </>
  );
};

export default Loans;
