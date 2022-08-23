import ExpenseItem from "./ExpenseItem";
import ExpensesChart from "./ExpensesChart";

function ExpenseList(props) {
  const filteredItems = props.filteredItems;
  if (filteredItems.length === 0) {
    return <p>No expense item found</p>;
  }

  const items = filteredItems.map((item) => (
    <ExpenseItem
      key={item.id}
      date={item.date}
      title={item.title}
      amount={item.amount}
    ></ExpenseItem>
  ));
  return (
    <>
      <ExpensesChart expenses={filteredItems}></ExpensesChart>
      {items}
    </>
  );
}

export default ExpenseList;
