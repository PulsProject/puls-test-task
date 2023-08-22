import React from 'react';
import {
  Box,
  Card,
  Grid,
  Hidden,
  Typography,
  useMediaQuery,
} from '@mui/material';
import moment from 'moment';
import { ILoanRequest } from '../../interfaces/interfaces';
import theme from '../../theme/theme';
import useStyles from './LoansListStyles';

type LoansListProps = {
  loanRequests: ILoanRequest[];
};

const LoansList: React.FC<LoansListProps> = ({ loanRequests }) => {
  const mobile = useMediaQuery(theme.breakpoints.down('xs'));
  const styles = useStyles();

  return (
    <Box>
      <Hidden smDown>
        <Card className={styles.loansListHeader} elevation={0}>
          <Grid container>
            <Grid item xs={3}>Loan ID</Grid>
            <Grid item xs={3}><Box textAlign="right">Requested</Box></Grid>
            <Grid item xs={2}><Box textAlign="right">Duration</Box></Grid>
            <Grid item xs={4}><Box textAlign="right">Amount</Box></Grid>
          </Grid>
        </Card>
      </Hidden>
      {loanRequests.map((loan: ILoanRequest) => (
        <Card className={styles.loanCard} key={loan.id}>
          <Grid container alignItems={mobile ? 'flex-start' : 'center'}>
            <Grid item xs={7} sm={3}>
            <span className={styles.name}>
              <Hidden smDown>
                FL
                {' '}
              </Hidden>
              {loan.externalId}
            </span>
              <div className={`${styles.subtitle} ${styles.nameSubtitle}`}>
                {loan.account?.company.name}
              </div>
              <Hidden smUp>
                <Box
                  className={styles.date}
                  pt={1}
                  color={theme.palette.text.secondary}
                >
                  {moment(loan.createdAt).format('DD MMM YYYY')}
                </Box>
              </Hidden>
            </Grid>
            <Hidden smDown>
              <Grid item xs={12} sm={3}>
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
            <Grid item xs={5} sm={4}>
              <Box className={styles.amountBox}>
                <Typography
                  component="div"
                  variant="caption"
                  className={styles.amount}
                  align="right"
                >
                  {`${loan.amount.toLocaleString('de-DE', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}`}
                  &nbsp;€
                </Typography>
                <Hidden smUp>
                  <Box
                    mt={2}
                    mb={1}
                    className={styles.date}
                    color={theme.palette.text.secondary}
                    textAlign="right"
                  >
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
          </Grid>
        </Card>
      ))}
    </Box>
  );
};

export default LoansList;
