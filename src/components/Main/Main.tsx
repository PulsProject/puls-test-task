import React from 'react';
import { Container } from '@mui/material';

const Main: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Container sx={{ paddingTop: 10 }}>
    {children}
  </Container>
);

export default Main;
