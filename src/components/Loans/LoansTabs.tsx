import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabLabel from './TabLabel';
import useStyles from './LoansTabsStyles';
import { TabType, TabDetails } from './loansUtils';

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
    <Box sx={{ width: '100%' }}>
      {!tabs.length ? (
        <Box sx={{ minHeight: '48px' }}>We currently do not have any loan requests on record</Box>
      ) : (
        <Tabs
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
              id={`simple-tab-${tab.tabValue}`}
              aria-controls={`simple-tabpanel-${tab.tabValue}`}
            />
          ))}
        </Tabs>
      )}
    </Box>
  );
};

export default LoansTabs;
