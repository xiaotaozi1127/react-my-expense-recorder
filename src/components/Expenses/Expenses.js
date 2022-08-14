import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";

function Expenses(props) {
  const expenseFilterChangeHandler = (filteredYear) => {
    console.log("filtered year = " + filteredYear);
    let filteredItems = props.items.filter((item) => {
      let itemYear = new Date(item.date).getFullYear();
      console.log("itemYear = " + itemYear);
      return itemYear === parseInt(filteredYear);
    });
    console.log(filteredItems);
  };

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
      <ExpenseFilter onExpenseFilterChange={expenseFilterChangeHandler} />
      {items}
    </Card>
  );
}

export default Expenses;
