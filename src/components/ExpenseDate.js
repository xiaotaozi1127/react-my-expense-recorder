function ExpenseDate(props) {
  const date = new Date(props.date);
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.toLocaleString("default", { day: "2-digit" });
  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
}

export default ExpenseDate;
