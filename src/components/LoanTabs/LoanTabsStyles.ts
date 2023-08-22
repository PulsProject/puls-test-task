import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export default makeStyles((theme: Theme) => ({
  tabs: {
    marginBottom: '20px',
    borderBottom: `2px solid ${theme.palette.grey['300']}`,
  },
  tab: {
    '& .MuiBadge-root': {
      textTransform: 'none',
    },
  },
}));
