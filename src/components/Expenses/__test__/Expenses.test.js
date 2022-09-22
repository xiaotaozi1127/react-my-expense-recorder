import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Expenses from "../Expenses";
import { Provider } from "react-redux";
import store from "../../../store";

test("should render correct expense item count by default filtered year", () => {
  const expenseItemArray = [
    {
      id: "1",
      title: "house issurance",
      date: "2020-01-01",
      amount: 233,
    },
    {
      id: "2",
      title: "new car",
      date: "2022-11-01",
      amount: 233,
    },
    {
      id: "3",
      title: "new tv",
      date: "2022-12-01",
      amount: 233,
    },
  ];
  render(<Provider store={store}><Expenses items={expenseItemArray} /></Provider> );

  const expenseTV = screen.getByText("new tv");
  expect(expenseTV).toBeInTheDocument();

  const expenseCar = screen.getByText("new car");
  expect(expenseCar).toBeInTheDocument();

  const expenseHouse = screen.queryByText("house issurance");
  expect(expenseHouse).not.toBeInTheDocument();
});

test("should render list by filtered year", () => {
  const expenseItemArray = [
    {
      id: "1",
      title: "house issurance",
      date: "2019-01-01",
      amount: 100,
    },
    {
      id: "2",
      title: "new car",
      date: "2020-01-01",
      amount: 200,
    },
    {
      id: "3",
      title: "new tv",
      date: "2021-01-01",
      amount: 300,
    },
  ];
  render(<Provider store={store}><Expenses items={expenseItemArray} /></Provider> );

  const yearFilter = screen.getByRole("combobox");
  userEvent.selectOptions(yearFilter, ["2021"]);

  const expenseTV = screen.getByText("new tv");
  expect(expenseTV).toBeInTheDocument();

  const expenseCar = screen.queryByText("new car");
  expect(expenseCar).not.toBeInTheDocument();

  const expectHouse = screen.queryByText("house issurance");
  expect(expectHouse).not.toBeInTheDocument();

  userEvent.selectOptions(yearFilter, ["2020"]);

  const expenseCarAgain = screen.getByText("new car");
  expect(expenseCarAgain).toBeInTheDocument();

  const expenseTVAgain = screen.queryByText("new tv");
  expect(expenseTVAgain).not.toBeInTheDocument();

  const expenseHouseAgain = screen.queryByText("house issurance");
  expect(expenseHouseAgain).not.toBeInTheDocument();
});
