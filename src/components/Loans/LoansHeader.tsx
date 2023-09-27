import { Card, Grid, Box } from '@mui/material';
import React from 'react';
import useStyles from './LoansListStyles';

const LoansHeader = () => {
  const styles = useStyles();

  return (
    <Card className={styles.loansListHeader} elevation={0}>
          <Grid container>
            <Grid item xs={2}>Loan ID</Grid>
            <Grid item xs={2}><Box textAlign="right">Requested</Box></Grid>
            <Grid item xs={2}><Box textAlign="right">Duration</Box></Grid>
            <Grid item xs={3}><Box textAlign="right">Amount</Box></Grid>
            <Grid item xs={3}><Box textAlign="right">Status</Box></Grid>
          </Grid>
        </Card>
  );
};

export default LoansHeader;