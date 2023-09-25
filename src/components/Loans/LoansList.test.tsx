import React from 'react';
import mediaQuery from 'css-mediaquery';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@mui/material';
import LoansList from './LoansList';
import theme from '../../theme/theme';
// eslint-disable-next-line import/extensions
import data from '../../data/loans.json';

function createMatchMedia(width: number) {
  return (query: string) => {
    return {
      matches: mediaQuery.match(query, { width }),
      media: '',
      addListener: () => {},
      removeListener: () => {},
      onchange: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => true,
    };
  };
}

function resizeScreenSize(width: number) {
  window.matchMedia = createMatchMedia(width);
}

const ThemeWrapper: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

describe('<LoansList />', () => {
  beforeAll(() => {
    resizeScreenSize(1200);
  });

  test('renders message if there is are no loan requests', () => {
    render(<LoansList loanRequests={[]} />, { wrapper: ThemeWrapper });
    const textElement = screen.getByText("There's nothing to show here");
    expect(textElement).toBeInTheDocument();
  });

  test('renders tabs in the correct order ', () => {
    render(<LoansList loanRequests={(data as any).loanRequests} />, {
      wrapper: ThemeWrapper,
    });
    const tabs = screen.getAllByRole('tab');
    expect(tabs.length).toBe(5);
    expect(tabs[0]).toHaveTextContent('Approved Loans 2');
    expect(tabs[1]).toHaveTextContent('Requests 1');
    expect(tabs[2]).toHaveTextContent('Active Loans 1');
    expect(tabs[3]).toHaveTextContent('Closed Loans 1');
    expect(tabs[4]).toHaveTextContent('Rejected Loans 1');
  });

  test('does not render "Approved Loans" tab if there are no loans with status "to be disbursed" or "pending settlement"', () => {
    const loanRequests = [...(data as any).loanRequests].filter(
      loan =>
        loan.status !== 'to be disbursed' &&
        loan.status !== 'pending settlement',
    );

    render(<LoansList loanRequests={loanRequests} />, {
      wrapper: ThemeWrapper,
    });
    const tabs = screen.getAllByRole('tab');
    expect(tabs.length).toBe(4);
    expect(tabs[0]).toHaveTextContent('Requests 1');
    expect(tabs[1]).toHaveTextContent('Active Loans 1');
    expect(tabs[2]).toHaveTextContent('Closed Loans 1');
    expect(tabs[3]).toHaveTextContent('Rejected Loans 1');
  });

  test('does not render "Requests" tab if there are no loans with status "waiting approval"', () => {
    const loanRequests = [...(data as any).loanRequests].filter(
      loan => loan.status !== 'waiting approval',
    );

    render(<LoansList loanRequests={loanRequests} />, {
      wrapper: ThemeWrapper,
    });
    const tabs = screen.getAllByRole('tab');
    expect(tabs.length).toBe(4);
    expect(tabs[0]).toHaveTextContent('Approved Loans 2');
    expect(tabs[1]).toHaveTextContent('Active Loans 1');
    expect(tabs[2]).toHaveTextContent('Closed Loans 1');
    expect(tabs[3]).toHaveTextContent('Rejected Loans 1');
  });

  test('does not render "Active Loans" tab if there are no loans with status "active"', () => {
    const loanRequests = [...(data as any).loanRequests].filter(
      loan => loan.status !== 'active',
    );

    render(<LoansList loanRequests={loanRequests} />, {
      wrapper: ThemeWrapper,
    });
    const tabs = screen.getAllByRole('tab');
    expect(tabs.length).toBe(4);
    expect(tabs[0]).toHaveTextContent('Approved Loans 2');
    expect(tabs[1]).toHaveTextContent('Requests 1');
    expect(tabs[2]).toHaveTextContent('Closed Loans 1');
    expect(tabs[3]).toHaveTextContent('Rejected Loans 1');
  });

  test('does not render "Closed Loans" tab if there are no loans with status "closed"', () => {
    const loanRequests = [...(data as any).loanRequests].filter(
      loan => loan.status !== 'closed',
    );

    render(<LoansList loanRequests={loanRequests} />, {
      wrapper: ThemeWrapper,
    });
    const tabs = screen.getAllByRole('tab');
    expect(tabs.length).toBe(4);
    expect(tabs[0]).toHaveTextContent('Approved Loans 2');
    expect(tabs[1]).toHaveTextContent('Requests 1');
    expect(tabs[2]).toHaveTextContent('Active Loans 1');
    expect(tabs[3]).toHaveTextContent('Rejected Loans 1');
  });

  test('does not render "Rejected Loans" tab if there are no loans with status "rejected"', () => {
    const loanRequests = [...(data as any).loanRequests].filter(
      loan => loan.status !== 'rejected',
    );

    render(<LoansList loanRequests={loanRequests} />, {
      wrapper: ThemeWrapper,
    });
    const tabs = screen.getAllByRole('tab');
    expect(tabs.length).toBe(4);
    expect(tabs[0]).toHaveTextContent('Approved Loans 2');
    expect(tabs[1]).toHaveTextContent('Requests 1');
    expect(tabs[2]).toHaveTextContent('Active Loans 1');
    expect(tabs[3]).toHaveTextContent('Closed Loans 1');
  });

  test('renders loan cards when "Approved Loans" tab is active', () => {
    render(<LoansList loanRequests={(data as any).loanRequests} />, {
      wrapper: ThemeWrapper,
    });

    const cards = screen.getAllByTestId('loan-card');
    expect(cards.length).toBe(2);
    expect(within(cards[0]).getByText('to be disbursed')).toBeInTheDocument();
    expect(within(cards[1]).getByText('pending settlement')).toBeInTheDocument();
  });

  test('renders loan cards when "Requests" tab is active', () => {
    render(<LoansList loanRequests={(data as any).loanRequests} />, {
      wrapper: ThemeWrapper,
    });

    userEvent.click(screen.getByText('Requests 1'));

    const cards = screen.getAllByTestId('loan-card');
    expect(cards.length).toBe(1);
    expect(within(cards[0]).getByText('waiting approval')).toBeInTheDocument();
  });

  test('renders loan cards when "Active Loans" tab is active', () => {
    render(<LoansList loanRequests={(data as any).loanRequests} />, {
      wrapper: ThemeWrapper,
    });

    userEvent.click(screen.getByText('Active Loans 1'));

    const cards = screen.getAllByTestId('loan-card');
    expect(cards.length).toBe(1);
    expect(within(cards[0]).getByText('active')).toBeInTheDocument();
  });

  test('renders loan cards when "Closed Loans" tab is active', () => {
    render(<LoansList loanRequests={(data as any).loanRequests} />, {
      wrapper: ThemeWrapper,
    });

    userEvent.click(screen.getByText('Closed Loans 1'));

    const cards = screen.getAllByTestId('loan-card');
    expect(cards.length).toBe(1);
    expect(within(cards[0]).getByText('closed')).toBeInTheDocument();
  });

  test('renders loan cards when "Rejected Loans" tab is active', () => {
    render(<LoansList loanRequests={(data as any).loanRequests} />, {
      wrapper: ThemeWrapper,
    });

    userEvent.click(screen.getByText('Rejected Loans 1'));

    const cards = screen.getAllByTestId('loan-card');
    expect(cards.length).toBe(1);
    expect(within(cards[0]).getByText('rejected')).toBeInTheDocument();
  });
});
