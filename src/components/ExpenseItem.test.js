import { render, screen } from "@testing-library/react";
import ExpenseItem from "./ExpenseItem";

test("should render expense title and amount", () => {
  render(<ExpenseItem title="shoes" amount="65.4" />);
  const expenseTitle = screen.getByText("shoes");
  expect(expenseTitle).toBeInTheDocument();

  const expenseAmount = screen.getByText("$65.4");
  expect(expenseAmount).toBeInTheDocument();
});
