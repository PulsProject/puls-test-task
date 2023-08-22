import React, { useState } from 'react';
import { Tab, Tabs, Typography } from '@mui/material';
import CustomLabelComponent from './CustomLabelComponent/CustomLabelComponent';
import CustomTabPanel from './CustomTabPanel/CustomTabPanel';
import LoansList from '../Loans/LoansList';
import { ILoanRequest } from '../../interfaces/interfaces';
import {
  APPROVED,
  ITab,
  PENDING_SETTLEMENT,
  TABS,
  TO_BE_DISBURSED,
} from './constants';
// eslint-disable-next-line import/extensions
import data from '../../data/loans.json';
import useStyles from './LoanTabsStyles';

const LoanTabs: React.FC = () => {
  const { loanRequests }: any = data;

  const transformedLoanRequests =
    loanRequests.map((loanRequest: ILoanRequest) => {
      if (loanRequest.status === PENDING_SETTLEMENT ||
        loanRequest.status === TO_BE_DISBURSED) {
        return  { ...loanRequest, status: APPROVED };
      }
      return { ...loanRequest };
    });

  const filteredTabs = TABS
    .filter((tab: ITab) => transformedLoanRequests
      .some((req: ILoanRequest) => tab.status === req.status));

  const [tab, setTab] = useState<number>(0);

  const getFilteredLoanRequests = (status: string): ILoanRequest[] => {
    return transformedLoanRequests
      .filter((req: ILoanRequest) => req.status === status);
  };

  const styles = useStyles();

  const handleChangeTab = 
    (event: React.SyntheticEvent, newValue: number): void => {
      setTab(newValue);
    };

  return (
    <>
      <Typography variant="h2" sx={{ marginBottom: 8 }}>Financing</Typography>
      {filteredTabs.length ? (
        <>
          <Tabs
            TabIndicatorProps={{ className: 'hidden sm:block' }}
            sx={{
              '& .MuiTabs-flexContainer': {
                flexWrap: 'wrap',
              },
            }}
            className={styles.tabs}
            value={tab}
            onChange={handleChangeTab}
          >
            {filteredTabs.map((tabEl: any) => (
              <Tab
                key={tabEl.name}
                className={styles.tab}
                label={
                  <CustomLabelComponent
                    tabName={tabEl.name}
                    quantity={getFilteredLoanRequests(tabEl.status).length}
                  />
                }
              />
            ))}
          </Tabs>
          {filteredTabs.map((tabEl: ITab, index: number) => (
            <CustomTabPanel
              key={tabEl.name}
              value={tab}
              index={index}
            >
              <LoansList
                loanRequests={getFilteredLoanRequests(tabEl.status)}
              />
            </CustomTabPanel>
          ))}
        </>
      )
        : (
          <Typography
            variant="h4"
            textAlign={'center'}
            sx={{ paddingTop: 20 }}
          >
            There is nothing to show here
          </Typography>
        )
      }
    </>
  );
};

export default LoanTabs;
