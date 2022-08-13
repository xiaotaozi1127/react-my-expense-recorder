import { render, screen } from "@testing-library/react";
import Expenses from "./Expenses";

test("should render correct expense item count", () => {
  const expenseItemArray = [
    {
      id: "1",
      title: "house issurance",
      date: "2011-01-01",
      amount: 233,
    },
    {
      id: "2",
      title: "new car",
      date: "2011-01-01",
      amount: 233,
    },
    {
      id: "3",
      title: "new tv",
      date: "2011-01-01",
      amount: 233,
    },
  ];
  render(<Expenses items={expenseItemArray} />);

  const expenseItems = screen.getAllByTestId("expense-item");
  expect(expenseItems).toHaveLength(3);
});
