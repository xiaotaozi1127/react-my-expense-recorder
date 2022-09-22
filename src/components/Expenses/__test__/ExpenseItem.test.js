import { render, screen } from "@testing-library/react";
import ExpenseItem from "../ExpenseItem";

test("should render expense title and amount", () => {
  render(<ExpenseItem title="shoes" amount="65.4" />);
  const expenseTitle = screen.getByText("shoes");
  expect(expenseTitle).toBeInTheDocument();

  const expenseAmount = screen.getByText("$65.4");
  expect(expenseAmount).toBeInTheDocument();
});

test("should render expense date", () => {
  render(<ExpenseItem date="2022-08-09" />);

  const yearOfExpenseDate = screen.getByText("2022");
  expect(yearOfExpenseDate).toBeInTheDocument();

  const monthOfExpenseDate = screen.getByText("August");
  expect(monthOfExpenseDate).toBeInTheDocument();

  const dayOfExpenseDate = screen.getByText("09");
  expect(dayOfExpenseDate).toBeInTheDocument();
});
