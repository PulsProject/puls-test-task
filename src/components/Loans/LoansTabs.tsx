import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabLabel from './TabLabel';
import useStyles from './LoansTabsStyles';
import { TabType, TabDetails } from './Interfaces';

interface LoansTabsProps {
  tabs: TabDetails[];
  activeTabValue: TabType;
  setTabValue: (value: TabType) => void;
}

const LoansTabs: React.FC<LoansTabsProps> = ({ tabs, activeTabValue, setTabValue }) => {
  const styles = useStyles();

  const handleChange = (_event: React.SyntheticEvent, newValue: TabType) => {
    setTabValue(newValue);
  };

  return (
    <Tabs
      className={styles.tabs}
      value={activeTabValue}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons={false}
      textColor="secondary"
      indicatorColor="secondary"
      aria-label="loan requests tabs">
      {tabs.map((tab) => (
        <Tab
          className={styles.loansTab}
          key={tab.tabValue}
          value={tab.tabValue}
          label={<TabLabel {...tab} />}
          id={`loan-tab-${tab.tabValue}`}
          aria-controls={`loans-list-${tab.tabValue}`}
        />
      ))}
    </Tabs>
  );
};

export default LoansTabs;
