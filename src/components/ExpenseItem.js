function ExpenseItem(props) {
    const date = new Date(props.date)
    const year = date.getFullYear()
    const month = date.toLocaleString('default', { month: 'long' })
    const day = date.toLocaleString('default', { day: '2-digit' })
  return (
    <div>
        <div>
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
        </div>
      <div>{props.title}</div>
      <div>${props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
