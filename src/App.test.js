import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("when add a new expense item under filtered year, it will show up in the list", () => {
  render(<App />);

  const newExpenseTitle = screen.getByTestId("new-expense-title");
  const newExpenseAmount = screen.getByTestId("new-expense-amount");
  const newExpenseDate = screen.getByTestId("new-expense-date");

  userEvent.type(newExpenseTitle, "dress");
  userEvent.type(newExpenseAmount, "20");
  userEvent.type(newExpenseDate, "2022-08-06");

  const submitButton = screen.getByRole("button", { name: "Add Expense" });
  userEvent.click(submitButton);

  const newExpense = screen.getByRole("heading", { name: "dress" });
  expect(newExpense).toBeInTheDocument();
});

test("when add a new expense item not under filtered year, it will not show up in the list", () => {
  render(<App />);

  const newExpenseTitle = screen.getByTestId("new-expense-title");
  const newExpenseAmount = screen.getByTestId("new-expense-amount");
  const newExpenseDate = screen.getByTestId("new-expense-date");

  userEvent.type(newExpenseTitle, "dress");
  userEvent.type(newExpenseAmount, "20");
  userEvent.type(newExpenseDate, "2021-08-06");

  const submitButton = screen.getByRole("button", { name: "Add Expense" });
  userEvent.click(submitButton);

  const newExpense = screen.queryByRole("heading", { name: "dress" });
  expect(newExpense).not.toBeInTheDocument();
});
