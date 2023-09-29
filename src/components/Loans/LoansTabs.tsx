import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabLabel from './TabLabel';
import useStyles from './LoansTabsStyles';
import { TabType, TabDetails } from './Interfaces';

interface LoansTabsProps {
  tabs: TabDetails[];
  activeTab: TabType;
  setTabValue: (value: TabType) => void;
}

function a11yProps(value: string) {
  return {
    id: `simple-tab-${value}`,
    'aria-controls': `simple-tabpanel-${value}`,
  };
}

const LoansTabs = ({ tabs, activeTab, setTabValue }: LoansTabsProps) => {
  const styles = useStyles();

  const handleChange = (_: React.SyntheticEvent, newValue: TabType) => {
    console.log(newValue); // TODO: remove
    setTabValue(newValue);
  };

  if (!tabs.length) return <Box sx={{ width: '100%', minHeight: '48px' }}>There&apos;s nothing to show here</Box>;

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={activeTab} onChange={handleChange} aria-label="loan requests tabs">
          {tabs.map((tab) => (
            <Tab
              className={styles.loansTab}
              key={tab.tabValue}
              label={<TabLabel {...tab} />}
              value={tab.tabValue}
              {...a11yProps(tab.tabValue)}
            />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
};

export default LoansTabs;
