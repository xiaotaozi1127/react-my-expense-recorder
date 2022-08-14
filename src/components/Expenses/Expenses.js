import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";

function Expenses(props) {
  console.log("props expenses is:");
  console.log(props.items);
  const [filteredYear, setFilteredYear] = useState();

  const expenseFilterChangeHandler = (filteredYear) => {
    setFilteredYear(filteredYear);
  };

  let filteredItems = props.items.filter((item) => {
    return new Date(item.date).getFullYear() === parseInt(filteredYear);
  });

  const items = props.items.map((item) => (
    <ExpenseItem
      key={item.id}
      date={item.date}
      title={item.title}
      amount={item.amount}
    ></ExpenseItem>
  ));
  return (
    <Card className="expenses">
      {/* <ExpenseFilter
        selected={filteredYear}
        onExpenseFilterChange={expenseFilterChangeHandler}
      /> */}
      {items}
    </Card>
  );
}

export default Expenses;
