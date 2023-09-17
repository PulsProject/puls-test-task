import React from "react";
import { render, screen } from "@testing-library/react";
import LoansTabs from "./LoansTabs";
import { ThemeProvider } from "@mui/material";
import theme from "../../theme/theme";
import userEvent from "@testing-library/user-event";
// eslint-disable-next-line import/extensions
import data from '../../data/loans.json';

const loanRequests = (data as any).loanRequests;

test("render Tabs logic", async () => {
  render(
    <ThemeProvider theme={theme}>
      <LoansTabs loanRequests={loanRequests} />
    </ThemeProvider>
  );
  const firstTab = screen
    .getByText("Approved Loans", { exact: false })
  expect(firstTab.getAttribute("aria-selected")).toBe("true");

  const anotherTab = screen.getByText("Closed Loans", { exact: false });
  await userEvent.click(anotherTab);
  expect(anotherTab.getAttribute("aria-selected")).toBe("true");
  expect(firstTab.getAttribute("aria-selected")).toBe("false")
});

test("render list item", async () => {
  render(
    <ThemeProvider theme={theme}>
      <LoansTabs loanRequests={loanRequests} />
    </ThemeProvider>
  );
  const item = screen.getAllByText("G81FV");
  expect(item).toBeTruthy();
});

test("render 'There's nothing to show here' message when no data", async () => {
  const emptyLoanRequests: any[] = [];
  
  render(
    <ThemeProvider theme={theme}>
      <LoansTabs loanRequests={emptyLoanRequests} />
    </ThemeProvider>
  );

  const message = screen.getByText("There's nothing to show here");
  expect(message).toBeTruthy();
});
