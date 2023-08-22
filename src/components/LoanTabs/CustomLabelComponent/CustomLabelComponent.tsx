import React from 'react';
import { Box } from '@mui/material';
import useStyles from './CustomLabelComponentStyles';

interface CustomLabelComponentProps {
  tabName: string;
  quantity: number;
}

const CustomLabelComponent: React.FC<CustomLabelComponentProps> = (props) => {
  const { tabName, quantity } = props;
  const styles = useStyles();


  return (
    <Box className={styles.container}>
      <Box component="span">{tabName}</Box>
      <Box component="span">{quantity}</Box>
    </Box>
  );
};

export default CustomLabelComponent;
