import React from 'react';
import { Container } from '@mui/material';
import useStyles from './MainStyles';

const Main: React.FC = ({ children }) => {
  const styles = useStyles();

  return (
    <Container sx={{ paddingTop: 10 }} className={styles.container}>
      {children}
    </Container>
  );
};

export default Main;
