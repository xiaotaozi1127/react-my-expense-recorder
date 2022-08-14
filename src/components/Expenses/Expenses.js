import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState, useEffect } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState(2021);
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
    setFilteredItems(
      props.items.filter((item) => {
        return new Date(item.date).getFullYear() === parseInt(filteredYear);
      })
    );
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onExpenseFilterChange={expenseFilterChangeHandler}
      />
      {filteredItems.length === 0 ? (
        <p>No expense item found</p>
      ) : (
        filteredItems.map((item) => (
          <ExpenseItem
            key={item.id}
            date={item.date}
            title={item.title}
            amount={item.amount}
          ></ExpenseItem>
        ))
      )}
    </Card>
  );
}

export default Expenses;
