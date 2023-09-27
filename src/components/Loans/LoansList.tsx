import { Hidden, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/extensions
import data from '../../data/loans.json';
import TabsComponent, { statusMappings } from '../Tabs/TabsComponent';
import LoanItem, { LoanType, StatusType } from './LoanItem';
import LoansHeader from './LoansHeader';

const LoansList: React.FC = () => {
  const [ selected, setSelected ] = useState('approved loans');
  const [filteredLoanRequests, setFilteredLoanRequests] = useState([]);
  const { loanRequests }: any  = data;

  if (!loanRequests || loanRequests.length === 0) {
    return (
      <h3>There&apos;s nothing to show here</h3>
    );
  }
  
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(loanRequests);
  }, []);

  useEffect(() => {    
    setFilteredLoanRequests(
      loanRequests.filter((el: { status: StatusType; }) => {
        if (selected === 'approved loans') {
          return el.status === 'to be disbursed' || el.status === 'pending settlement';
        } else {
          return el.status === Object.keys(statusMappings).find(key => statusMappings[key] === selected);
        }
      }),
    );
  }, [selected]);

  return (
    <>
      <Typography variant="h2" sx={{ marginBottom: 8 }}>Financing</Typography>
      <TabsComponent
        loans={loanRequests} 
        selected={selected} 
        setSelected={setSelected}
      />
      <Hidden smDown>
        <LoansHeader/>
      </Hidden>
      {filteredLoanRequests.map((loan: LoanType) => (
        <LoanItem key={`${loan.id}`} loan={loan}/>
      ))}
    </>
  );
};

export default LoansList;
