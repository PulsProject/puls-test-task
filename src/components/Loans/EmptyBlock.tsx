import { Typography } from '@mui/material';
import React from 'react';
import useStyles from './LoansListStyles';

export const EmptyBlock: React.FC = () => {
  const styles = useStyles();

  return (
    <Typography className={styles.emptyBlock}>
      There`s nothing to show here
    </Typography>
  );
};
