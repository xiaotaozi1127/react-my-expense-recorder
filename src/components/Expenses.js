import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const items = props.items.map((item) => (
    <ExpenseItem
      key={item.id}
      date={item.date}
      title={item.title}
      amount={item.amount}
    ></ExpenseItem>
  ));
  return <div className="expenses">{items}</div>;
}

export default Expenses;
