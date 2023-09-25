import { Box, Card, Grid, Hidden, Typography, Tabs, useMediaQuery, Tab } from '@mui/material';
import moment from 'moment';
import React, { useState } from 'react';
import useStyles from './LoansListStyles';
import theme from '../../theme/theme';

const TAB_CATEGORIES = {
  'APPROVED_LOANS': { label: 'Approved Loans', priority: 0 },
  'REQUESTS': { label: 'Requests', priority: 1 },
  'ACTIVE_LOANS': { label: 'Active Loans', priority: 2 },
  'CLOSED_LOANS': { label: 'Closed Loans', priority: 3 },
  'REJECTED_LOANS': { label: 'Rejected Loans', priority: 4 }, 
};

const statusToTabCategoryMap: Record<string, keyof typeof TAB_CATEGORIES> = {
  'to be disbursed': 'APPROVED_LOANS',
  'pending settlement': 'APPROVED_LOANS',
  'waiting approval': 'REQUESTS',
  'active': 'ACTIVE_LOANS',
  'closed': 'CLOSED_LOANS',
  'rejected': 'REJECTED_LOANS',
};

const LoansList: React.FC<{ loanRequests: any[] }> = ({ loanRequests }) => {
  const mobile = useMediaQuery(theme.breakpoints.down('xs'));
  const styles = useStyles();

  const groupedRequests: Record<keyof typeof TAB_CATEGORIES, any[]> = loanRequests.reduce((acc, loanRequest) => {
    const tabName = statusToTabCategoryMap[loanRequest.status as string];
    if (!acc[tabName]) {
      acc[tabName] = [loanRequest];
    } else {
      acc[tabName].push(loanRequest);
    }
    return acc;
  }, {});

  const availableTabs = (
    Object.keys(groupedRequests) as (keyof typeof TAB_CATEGORIES)[]
  ).sort((a, b) => TAB_CATEGORIES[a].priority - TAB_CATEGORIES[b].priority);

  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <Typography variant="h2" sx={{ marginBottom: 8 }}>Financing</Typography>
      {availableTabs.length > 0 && 
        <Tabs value={activeTab} onChange={handleTabChange}>
          {availableTabs.map(
            tabCategory => 
              <Tab 
                label={`${TAB_CATEGORIES[tabCategory].label} ${groupedRequests[tabCategory].length}`}
                key={tabCategory} 
              />)
          }
        </Tabs>
      }
      <Hidden smDown>
        <Card className={styles.loansListHeader} elevation={0}>
          <Grid container>
            <Grid item xs={2}>Loan ID</Grid>
            <Grid item xs={2}><Box textAlign="right">Requested</Box></Grid>
            <Grid item xs={2}><Box textAlign="right">Duration</Box></Grid>
            <Grid item xs={3}><Box textAlign="right">Amount</Box></Grid>
            <Grid item xs={3}><Box textAlign="right">Status</Box></Grid>
          </Grid>
        </Card>
      </Hidden>
      {availableTabs.length > 0 && groupedRequests[availableTabs[activeTab]].map((loan: any) => (
        <Card className={styles.loanCard} key={loan.id} data-testid="loan-card">
          <Grid container alignItems={mobile ? 'flex-start' : 'center'}>
            <Grid item xs={7} sm={2}>
              <span className={styles.name}>
                <Hidden smDown>
                  FL
                  {' '}
                </Hidden>
                {loan.externalId}
              </span>
              <Hidden smUp>
                <Box component="span" ml={2} mb={-0.5} className={`${styles.status} ${loan.status.replaceAll(/\s+/g, '-')}`}>
                  {loan.status}
                </Box>
              </Hidden>
              <div className={`${styles.subtitle} ${styles.nameSubtitle}`}>{loan.account?.company.name}</div>
              <Hidden smUp>
                <Box className={styles.date} pt={1} color={theme.palette.text.secondary}>
                  {moment(loan.createdAt).format('DD MMM YYYY')}
                </Box>
              </Hidden>
            </Grid>
            <Hidden smDown>
              <Grid item xs={12} sm={2}>
                <div className={styles.date}>
                  {moment(loan.createdAt).format('DD MMM YYYY')}
                </div>
              </Grid>
              <Grid item xs sm={2}>
                <div className={styles.date}>
                  {`${loan.duration} months`}
                </div>
              </Grid>
            </Hidden>
            <Grid item xs={5} sm={3}>
              <Box className={styles.amountBox}>
                <Typography component="div" variant="caption" className={styles.amount} align="right">
                  {`${loan.amount.toLocaleString('de-DE', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}`}
                  &nbsp;€
                </Typography>
                <Hidden smUp>
                  <Box mt={2} mb={1} className={styles.date} color={theme.palette.text.secondary} textAlign="right">
                    for
                    {' '}
                    {`${loan.duration} months`}
                  </Box>
                </Hidden>
                <Box className={styles.subtitle} textAlign="right">
                  {`${loan.monthlyPayment.toLocaleString('de-DE', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}€ / month`}
                </Box>
              </Box>
            </Grid>
            <Hidden smDown>
              <Grid item xs={12} sm={3}>
                <Box textAlign="right">
                  <span className={`${styles.status} ${loan.status.replaceAll(/\s+/g, '-')}`}>
                    {loan.status}
                  </span>
                </Box>
              </Grid>
            </Hidden>
          </Grid>
        </Card>
      ))}
      {availableTabs.length === 0 && <span>There&apos;s nothing to show here</span>}
    </>
  );
};

export default LoansList;
