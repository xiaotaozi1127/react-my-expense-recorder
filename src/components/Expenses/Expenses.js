import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Expenses(props) {
  const [filteredItems, setFilteredItems] = useState(props.items);
  const filteredYear = useSelector((state) => state.filteredYear.value);

  useEffect(() => {
    setFilteredItems(
      props.items.filter((item) => {
        return new Date(item.date).getFullYear() === filteredYear;
      })
    );
  }, [filteredYear, props.items]);

  return (
    <Card className="expenses">
      <ExpenseFilter />
      <ExpenseList filteredItems={filteredItems}></ExpenseList>
    </Card>
  );
}

export default Expenses;
