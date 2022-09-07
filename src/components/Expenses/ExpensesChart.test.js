import { render, screen } from "@testing-library/react";
import ExpensesChart from "./ExpensesChart";

test("should render chart according to expense item data", () => {
  const dataPoints = [
    {
      id: "1",
      title: "dress",
      date: "2021-02-05",
      amount: 20,
    },
    {
      id: "2",
      title: "pen",
      date: "2021-02-10",
      amount: 10,
    },
    {
      id: "3",
      title: "book",
      date: "2021-10-12",
      amount: 10,
    },
    {
      id: "4",
      title: "cat",
      date: "2021-10-20",
      amount: 50,
    },
  ];
  render(<ExpensesChart expenses={dataPoints} />);
  const junFillBar = screen.getByTestId("Oct-fill");
  expect(junFillBar).toBeInTheDocument();
  expect(junFillBar).toHaveStyle({ height: "100%" });

  const febFillBar = screen.getByTestId("Feb-fill");
  expect(febFillBar).toBeInTheDocument();
  expect(febFillBar).toHaveStyle({ height: "50%" });

  const decFillBar = screen.getByTestId("Dec-fill");
  expect(decFillBar).toBeInTheDocument();
  expect(decFillBar).toHaveStyle({ height: "0%" });
});
