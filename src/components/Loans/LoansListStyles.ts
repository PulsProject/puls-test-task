import { Box, Card } from '@mui/material';

import { styled } from '@mui/material';
import { alpha } from '@mui/material/styles';

export const LoanCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  padding: theme.spacing(4, 6),
  maxWidth: '800px',
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 5px 25px rgba(227, 230, 236, 0.6)',
}));

export const LoansListHeader = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  padding: theme.spacing(2, 6),
  maxWidth: 800,
  borderRadius: theme.shape.borderRadius,
  fontSize: 12,
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.background.default,
}));

export const Name = styled(Box)(({ theme }) => ({
  ame: {
    minWidth: 150,
    fontSize: 14,
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.14,
  },
}));

export const NameSubtitle = styled(Box)(({ theme }) => ({
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',

  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(2),
  },
}));

export const Date = styled(Box)(({ theme }) => ({
  fontSize: 12,

  [theme.breakpoints.up('sm')]: {
    textAlign: 'right',
  },
}));

export const AmountWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    textAlign: 'right',
  },
}));

export const Amount = styled(Box)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,

  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(2),
  },
}));

export const Status = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  padding: `${theme.spacing(1.5)}px ${theme.spacing(3)}px`,
  height: `${theme.spacing(6)}px`,
  borderRadius: 100,
  fontSize: 12,
  fontWeight: theme.typography.fontWeightBold,
  color: '#E2A314',
  backgroundColor: alpha('#FFC542', 0.2),

  [theme.breakpoints.down('sm')]: {
    display: 'inline-flex',
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    height: `${theme.spacing(5)}px`,
  },

  '&.rejected': {
    color: theme.palette.error.main,
    backgroundColor: alpha(theme.palette.error.main, 0.2),
  },

  '&.active': {
    color: theme.palette.info.dark,
    backgroundColor: alpha(theme.palette.info.dark, 0.2),
  },

  '&.pending-settlement': {
    color: theme.palette.info.main,
    backgroundColor: alpha(theme.palette.info.main, 0.2),
  },

  '&.closed': {
    color: theme.palette.text.primary,
    backgroundColor: alpha(theme.palette.text.primary, 0.2),
  },
}));
