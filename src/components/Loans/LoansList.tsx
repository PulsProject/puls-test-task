import React from 'react';
import moment from 'moment';

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
  Status,
} from './LoansListStyles';

// eslint-disable-next-line import/extensions
import data from '../../data/loans.json';
import { type LoanRequest } from './LoanRequest';

const LoansList: React.FC = () => {
  const { loanRequests } = data as unknown as { loanRequests: LoanRequest[] };

  // eslint-disable-next-line no-console
  console.log(loanRequests);

  return (
    <>
      <Box sx={{ typography: 'h2', marginBottom: 8 }}>Financing</Box>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <LoansListHeader elevation={0}>
          <Grid container>
            <Grid item xs={2}>
              Loan ID
            </Grid>
            <Grid item xs={2}>
              <Box sx={{ textAlign: 'right' }}>Requested</Box>
            </Grid>
            <Grid item xs={2}>
              <Box sx={{ textAlign: 'right' }}>Duration</Box>
            </Grid>
            <Grid item xs={3}>
              <Box sx={{ textAlign: 'right' }}>Amount</Box>
            </Grid>
            <Grid item xs={3}>
              <Box sx={{ textAlign: 'right' }}>Status</Box>
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
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>FL</Box>
                {loan.externalId}
              </Name>
              <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                <Status
                  component="span"
                  sx={{ ml: 2, mb: -0.5 }}
                  // TODO: rewrite with statuses
                  className={`${loan.status.replaceAll(/\s+/g, '-')}`}
                >
                  {loan.status}
                </Status>
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
            <Grid
              item
              xs={12}
              sm={2}
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              <Date>{moment(loan.createdAt).format('DD MMM YYYY')}</Date>
            </Grid>
            <Grid item xs sm={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Date>{`${loan.duration} months`}</Date>
            </Grid>
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
            <Grid
              item
              xs={12}
              sm={3}
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              <Box
                sx={{
                  textAlign: 'right',
                }}
              >
                <Status
                  className={`${loan.status.replaceAll(/\s+/g, '-')}`}
                  component={'span'}
                >
                  {loan.status}
                </Status>
              </Box>
            </Grid>
          </Grid>
        </LoanCard>
      ))}
    </>
  );
};

export default LoansList;
