import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export default makeStyles((theme: Theme) => ({
  tabs: {
    marginBottom: theme.spacing(4),
    maxWidth: 800,
    boxShadow: '0 5px 25px rgba(227, 230, 236, 0.6)',
  },
  loansTab: {
    fontSize: 14,
    fontWeight: theme.typography.fontWeightBold,
  },
}));
