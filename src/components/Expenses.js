import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  const items = props.items.map((item) => (
    <ExpenseItem
      key={item.id}
      date={item.date}
      title={item.title}
      amount={item.amount}
    ></ExpenseItem>
  ));
  return <div>{items}</div>;
}

export default Expenses;
