import React from 'react';
import moment from 'moment';

// import { Box, Card, Grid, Hidden, Typography, useMediaQuery } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {
  LoanCard,
  LoansListHeader,
  Name,
  NameSubtitle,
  Date,
  AmountWrapper,
  Amount,
} from './LoansListStyles';

// eslint-disable-next-line import/extensions
import data from '../../data/loans.json';
import { type LoanRequest } from './LoanRequest';

const LoansList: React.FC = () => {
  const { loanRequests } = data as unknown as { loanRequests: LoanRequest[] };
  // const mobile = useMediaQuery(theme.breakpoints.down('xs'));
  // const styles = useStyles();

  // eslint-disable-next-line no-console
  console.log(loanRequests);

  return (
    <>
      <Box sx={{ typography: 'h2', marginBottom: 8 }}>Financing</Box>
      <Box sx={{ display: { sm: 'none', md: 'block' } }}>
        <LoansListHeader elevation={0}>
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
        </LoansListHeader>
      </Box>
      {loanRequests.map((loan: any) => (
        <LoanCard key={loan.id}>
          <Grid
            container
            sx={{ alignItems: { xs: 'flex-start', sm: 'center' } }}
          >
            <Grid item xs={7} sm={2}>
              <Name component={'span'}>
                <Box sx={{ display: { sm: 'none', md: 'block' } }}>FL</Box>
                {loan.externalId}
              </Name>
              <Box sx={{ display: { sm: 'block', md: 'none' } }}>
                <Box
                  component="span"
                  sx={{ ml: 2, mb: -0.5 }}
                  // TODO: rewrite with statuses
                  // className={`${loan.status.replaceAll(/\s+/g, '-')}`}
                >
                  {loan.status}
                </Box>
              </Box>
              <NameSubtitle sx={{ typography: 'subtitle2' }}>
                {loan.account?.company.name}
              </NameSubtitle>
              <Box>
                <Date sx={{ pt: 1, color: 'text.secondary' }}>
                  {moment(loan.createdAt).format('DD MMM YYYY')}
                </Date>
              </Box>
            </Grid>
            <Box>
              <Grid item xs={12} sm={2}>
                <Date>{moment(loan.createdAt).format('DD MMM YYYY')}</Date>
              </Grid>
              <Grid item xs sm={2}>
                <Date>{`${loan.duration} months`}</Date>
              </Grid>
            </Box>
            <Grid item xs={5} sm={3}>
              <AmountWrapper>
                <Amount sx={{ typography: 'caption', textAlign: 'right' }}>
                  {`${loan.amount.toLocaleString('de-DE', {
                    minimumFractionDigits: 2,
                  })}`}
                  &nbsp;€
                </Amount>
                <Box>
                  <Date sx={{ mt: 2, mb: 1, color: 'text.secondary' }}>
                    for {`${loan.duration} months`}
                  </Date>
                </Box>
                <Box sx={{ typography: 'subtitle2', textAlign: 'right' }}>
                  {`${loan.monthlyPayment.toLocaleString('de-DE', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}€ / month`}
                </Box>
              </AmountWrapper>
            </Grid>
            <Box sx={{ display: { sm: 'none', md: 'block' } }}>
              <Grid item xs={12} sm={3}>
                <Box
                  sx={{
                    textAlign: 'right',
                  }}
                >
                  {/* <span className={`${loan.status.replaceAll(/\s+/g, '-')}`}> */}
                  <Box component={'span'}>{loan.status}</Box>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </LoanCard>
      ))}
    </>
  );
};

export default LoansList;
