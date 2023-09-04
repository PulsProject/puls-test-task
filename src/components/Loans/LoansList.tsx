import { Box, Card, Grid, Hidden, Typography } from '@mui/material';
import React, { useState } from 'react';
// eslint-disable-next-line import/extensions
import data from '../../data/loans.json';
import useStyles from './LoansListStyles';
import { LoanCard } from './LoanCard/LoanCard';
import { ILoan } from './types';
import { LOAN_STATUS_TABS, getLoansByStatus } from './utils';
import StatusTabs from './StatusTabs/StatusTabs';
import { EmptyBlock } from './EmptyBlock';

const LoansList: React.FC = () => {
  const [currentTabVal, setCurrentTabVal] = useState(LOAN_STATUS_TABS[0].value);

  const { loanRequests }: any = data;
  const loans = getLoansByStatus(loanRequests, currentTabVal);

  const styles = useStyles();

  const handleTabChange = (value: string) => {
    setCurrentTabVal(value);
  };

  return (
    <>
      <Typography variant="h2" sx={{ marginBottom: 8 }}>
        Financing
      </Typography>
      <StatusTabs
        currentValue={currentTabVal}
        loans={loanRequests}
        handleChange={handleTabChange}
      />
      <Hidden smDown>
        <Card className={styles.loansListHeader} elevation={0}>
          <Grid container>
            <Grid item xs={2}>
              Loan ID
            </Grid>
            <Grid item xs={2}>
              <Box textAlign="right">Requested</Box>
            </Grid>
            <Grid item xs={2}>
              <Box textAlign="right">Duration</Box>
            </Grid>
            <Grid item xs={3}>
              <Box textAlign="right">Amount</Box>
            </Grid>
            <Grid item xs={3}>
              <Box textAlign="right">Status</Box>
            </Grid>
          </Grid>
        </Card>
      </Hidden>
      {loans.length ? (
        loans.map((loan: ILoan) => <LoanCard loan={loan} key={loan.id} />)
      ) : (
        <EmptyBlock />
      )}
    </>
  );
};

export default LoansList;
