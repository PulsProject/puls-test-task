import LoansList from './LoansList';
import Main from '../Main/Main';
import React from 'react';
// eslint-disable-next-line import/extensions
import data from '../../data/loans.json';

const Loans = () => {
  const { loanRequests }: any = data;
  return (
    <Main>
      <LoansList loansList={loanRequests} />
    </Main>
  );
};

export default Loans;