import "./ExpenseDate.css";

function ExpenseDate(props) {
  const date = new Date(props.date);
  const year = date.getFullYear().toString();
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.toLocaleString("default", { day: "2-digit" });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
