import { Box, Tab, Tabs } from '@mui/material';
import React, { ChangeEvent } from 'react';
import useStyles from '../LoansListStyles';
import { ILoan, ILoansTab } from '../types';
import { LOAN_STATUS_TABS, getLoansByStatus } from '../utils';

type Props = {
  currentValue: string;
  handleChange: (newValue: string) => void;
  loans: Array<ILoan>;
};

const StatusTabs: React.FC<Props> = ({ currentValue, loans, handleChange }) => {
  const styles = useStyles();

  return (
    <Tabs
      value={currentValue}
      onChange={(_: ChangeEvent<{}>, newValue: string) => {
        handleChange(newValue);
      }}
      className={styles.tabsContainer}
      indicatorColor="secondary"
      textColor="inherit"
      variant="scrollable"
    >
      {LOAN_STATUS_TABS.map((tab: ILoansTab) => {
        const loansCount = getLoansByStatus(loans, tab.value).length;

        return loansCount ? (
          <Tab
            key={tab.value}
            value={tab.value}
            label={tab.title}
            className={styles.tab}
            icon={
              <Box ml={2} mb="unset !important">
                {loansCount}
              </Box>
            }
          />
        ) : null;
      })}
    </Tabs>
  );
};

export default StatusTabs;
