import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm(props) {
  const [newExpense, setNewExpense] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    setNewExpense((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });
  };

  const amountChangeHandler = (event) => {
    setNewExpense((prevState) => {
      return {
        ...prevState,
        amount: event.target.value,
      };
    });
  };

  const dateChangeHandler = (event) => {
    setNewExpense((prevState) => {
      return {
        ...prevState,
        date: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onNewExpenseCreated({
      ...newExpense,
      id: Math.random().toString(),
    });
    setNewExpense({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            data-testid="new-expense-title"
            type="text"
            onChange={titleChangeHandler}
            value={newExpense.title}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            data-testid="new-expense-amount"
            type="number"
            onChange={amountChangeHandler}
            value={newExpense.amount}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            data-testid="new-expense-date"
            type="date"
            onChange={dateChangeHandler}
            value={newExpense.date}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
