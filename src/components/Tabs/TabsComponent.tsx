/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { Tabs, Tab, Badge } from '@mui/material';
import useStyles from './TabsComponentStyles';
import { LoanType } from '../Loans/LoanItem';

export type StatusTabType = 'approved loans' | 'requests' | 'active loans' | 'closed loans' | 'rejected loans';

interface TabsComponentProps {
  loans: LoanType[];
  selected: string;
  setSelected: (value: string) => void;
}

export const statusMappings: { [key: string]: StatusTabType } = {
  'to be disbursed': 'approved loans',
  'pending settlement': 'approved loans',
  'waiting approval': 'requests',
  'active': 'active loans',
  'closed': 'closed loans',
  'rejected': 'rejected loans',
};

const statusOrder: StatusTabType[] = [
  'approved loans',
  'requests',
  'active loans',
  'closed loans',
  'rejected loans',
];

const TabsComponent: React.FC<TabsComponentProps> = ({ loans, selected, setSelected }) => {
  const styles = useStyles();

  let tabLabels: { status: StatusTabType, count: number }[] = statusOrder.map(status => {
    const count = loans.filter(loan => status === statusMappings[loan?.status?.toLowerCase()]).length;

    return {
      status,
      count,
    };
  });

  useEffect(() => {
    setSelected(tabLabels.find(el => el.count > 0 )?.status || '');
  }, []);

  return (
    <Tabs
      value={selected}
      variant="scrollable"
      scrollButtons="auto"
      textColor="secondary"
      indicatorColor="secondary"
      onChange={(_, newValue) => {
        setSelected(newValue);
      }}
      className={styles.tabsContainer}
    >
      {tabLabels.map((tab) => {
        return tab.count > 0 && (
          <Tab
            value={tab.status}
            key={`${tab.status}-${tab.count}`}
            label={<Badge badgeContent={tab.count}>{tab.status}</Badge>}
          />
        );
      })}
    </Tabs>
  );
};

export default TabsComponent;
