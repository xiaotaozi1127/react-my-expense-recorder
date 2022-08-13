import { render, screen } from "@testing-library/react";
import ExpenseDate from "./ExpenseDate";

test("should render date correctly", () => {
  render(<ExpenseDate date="2022-08-13" />);

  const month = screen.getByText("August");
  expect(month).toBeInTheDocument();

  const year = screen.getByText("2022");
  expect(year).toBeInTheDocument();

  const day = screen.getByText("13");
  expect(day).toBeInTheDocument();
});
