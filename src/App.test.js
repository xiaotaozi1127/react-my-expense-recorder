import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {BrowserRouter} from 'react-router-dom'
import App from "./App";

test("full app rendering/navigation", async () => {
  render(<App />, {wrapper: BrowserRouter});
  expect(screen.getByText(/All expenses/i)).toHaveClass("active")
  expect(screen.getByText(/Add new expense/i)).not.toHaveClass("active")
})

test("should display the initial expense items loaded from server", async () => {
  render(<App />, {wrapper: BrowserRouter});

  const yearFilter = screen.getByRole("combobox");
  userEvent.selectOptions(yearFilter, ["2022"]);

  const expenseItem = await screen.findByRole("heading", { name: "mock item" });
  expect(expenseItem).toBeInTheDocument();
});

test("when add a new expense item under filtered year, it will show up in the list", async () => {
  render(<App />, {wrapper: BrowserRouter});
  const yearFilter = screen.getByRole("combobox");
  userEvent.selectOptions(yearFilter, ["2022"]);

  const addNewExpenseLink = screen.getByText(/Add new expense/i)
  userEvent.click(addNewExpenseLink)

  const newExpenseTitle = screen.getByTestId("new-expense-title");
  const newExpenseAmount = screen.getByTestId("new-expense-amount");
  const newExpenseDate = screen.getByTestId("new-expense-date");

  userEvent.type(newExpenseTitle, "dress");
  userEvent.type(newExpenseAmount, "20");
  userEvent.type(newExpenseDate, "2022-08-06");

  const submitButton = screen.getByRole("button", { name: "Add Expense" });
  userEvent.click(submitButton);

  const newExpense = await screen.findByRole("heading", { name: "dress" });
  expect(newExpense).toBeInTheDocument();
});

test("when add a new expense item not under filtered year, it will not show up in the list", async () => {
  render(<App />, {wrapper: BrowserRouter});

  const yearFilter = screen.getByRole("combobox");
  userEvent.selectOptions(yearFilter, ["2022"]);

  const addNewExpenseLink = screen.getByText(/Add new expense/i)
  userEvent.click(addNewExpenseLink)

  const newExpenseTitle = screen.getByTestId("new-expense-title");
  const newExpenseAmount = screen.getByTestId("new-expense-amount");
  const newExpenseDate = screen.getByTestId("new-expense-date");

  userEvent.type(newExpenseTitle, "phone");
  userEvent.type(newExpenseAmount, "2000");
  userEvent.type(newExpenseDate, "2021-09-10");

  const submitButton = screen.getByRole("button", { name: "Add Expense" });
  userEvent.click(submitButton);

  await expect(screen.findByRole("heading", { name: "phone" })).rejects.toThrow(
    Error
  );
});
