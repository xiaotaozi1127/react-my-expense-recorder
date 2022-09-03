import { render, screen } from "@testing-library/react";
import Chart from "./Chart";

test("should render chart according to expense item data", () => {
  const dataPoints = [
    {
      label: "Jan",
      value: 0,
    },
    {
      label: "Feb",
      value: 10,
    },
    {
      label: "Mar",
      value: 0,
    },
    {
      label: "Apr",
      value: 0,
    },
    {
      label: "May",
      value: 0,
    },
    {
      label: "Jun",
      value: 50,
    },
    {
      label: "Jul",
      value: 0,
    },
    {
      label: "Aug",
      value: 0,
    },
    {
      label: "Sep",
      value: 0,
    },
    {
      label: "Oct",
      value: 0,
    },
    {
      label: "Nov",
      value: 0,
    },
    {
      label: "Dec",
      value: 0,
    },
  ];
  render(<Chart dataPoints={dataPoints} />);
  const junFillBar = screen.getByTestId("Jun-fill");
  expect(junFillBar).toBeInTheDocument();
  expect(junFillBar).toHaveStyle({ height: "100%" });

  const febFillBar = screen.getByTestId("Feb-fill");
  expect(febFillBar).toBeInTheDocument();
  expect(febFillBar).toHaveStyle({ height: "20%" });

  const decFillBar = screen.getByTestId("Dec-fill");
  expect(decFillBar).toBeInTheDocument();
  expect(decFillBar).toHaveStyle({ height: "0%" });
});
