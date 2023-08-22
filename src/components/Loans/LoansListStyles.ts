import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export default makeStyles((theme: Theme) => ({
  loanCard: {
    margin: `0 auto ${theme.spacing(4)}`,
    padding: theme.spacing(4, 6),
    maxWidth: 930,
    borderRadius: theme.shape.borderRadius,
    boxShadow: '0 5px 25px rgba(227, 230, 236, 0.6)',
  },
  loansListHeader: {
    margin: `0 auto ${theme.spacing(4)}`,
    padding: theme.spacing(2, 6),
    maxWidth: 930,
    borderRadius: theme.shape.borderRadius,
    fontSize: 12,
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.background.default,
  },
  loansWarning: {
    marginBottom: theme.spacing(4),
    padding: theme.spacing(3),
    maxWidth: 540,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#DCEDDD',

    '& .MuiTypography-root': {
      fontSize: 12,
      lineHeight: 1.33,
    },
  },
  icon: {
    width: 24,
    height: 24,
    fontSize: 20,
  },
  name: {
    minWidth: 150,
    fontSize: 14,
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.14,
  },
  subtitle: {
    fontSize: 12,
    lineHeight: 1.33,
    color: theme.palette.text.secondary,
  },
  nameSubtitle: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',

    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
    },
  },
  date: {
    fontSize: 12,

    [theme.breakpoints.up('sm')]: {
      textAlign: 'right',
    },
  },
  amount: {
    fontWeight: theme.typography.fontWeightBold,

    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2),
    },
  },
  amountBox: {
    [theme.breakpoints.up('md')]: {
      textAlign: 'right',
    },
  },
  description: {
    ...theme.typography.overline,

    '&.success': {
      color: theme.palette.info.dark,
    },
  },
}));
