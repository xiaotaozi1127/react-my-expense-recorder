function ExpenseItem(props) {
  return (
    <div>
      <div>{props.title}</div>
      <div>${props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
