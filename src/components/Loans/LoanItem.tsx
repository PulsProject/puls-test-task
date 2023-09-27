import { Card, Grid, Hidden, Box, Typography, useMediaQuery } from '@mui/material';
import moment from 'moment';
import React from 'react';
import theme from '../../theme/theme';
import useStyles from './LoansListStyles';

export type StatusType = 'to be disbursed' | 'pending settlement' | 'waiting approval' | 'active' | 'closed' | 'rejected';

export interface LoanType {
  account: any, 
  activatedAt: string | null,
  amount: number
  approvedAt: string | null,
  closedAt: string | null,
  createdAt: string | null,
  duration: number,
  externalId: string,
  externalProductId: number,
  id: number,
  interestRate: number,
  monthlyPayment: number,
  rejectedAt: string | null,
  rejectionReason: string | null,
  status: string,
  updatedAt: string | null,
}

interface LoanItemProps {
  loan: LoanType
}

const LoanItem: React.FC<LoanItemProps> = ({ loan }) => {
  const mobile = useMediaQuery(theme.breakpoints.down('xs'));
  const styles = useStyles();

  return (
      <Card className={styles.loanCard} key={loan.id} data-testid="loan-item">
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
                {`${loan?.amount?.toLocaleString('de-DE', {
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
                {`${loan?.monthlyPayment?.toLocaleString('de-DE', {
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

  );
};

export default LoanItem;