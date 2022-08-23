import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState, useEffect } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState(2022);
  const [filteredItems, setFilteredItems] = useState(props.items);

  useEffect(() => {
    setFilteredItems(
      props.items.filter((item) => {
        return new Date(item.date).getFullYear() === parseInt(filteredYear);
      })
    );
  }, [filteredYear, props.items]);

  const expenseFilterChangeHandler = (filteredYear) => {
    setFilteredYear(filteredYear);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onExpenseFilterChange={expenseFilterChangeHandler}
      />
      <ExpenseList filteredItems={filteredItems}></ExpenseList>
    </Card>
  );
}

export default Expenses;
