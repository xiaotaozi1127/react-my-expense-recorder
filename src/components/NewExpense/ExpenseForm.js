import "./ExpenseForm.css";
import { useState, useRef } from "react";
import MyContext from "../../Contexts/MyContext";
import { useContext } from "react";

function ExpenseForm() {
  const expenseTitleInputRef = useRef();
  const expenseAmountInputRef = useRef();
  const expenseDateInputRef = useRef();

  const newExpenseCreatedhandler = useContext(MyContext);

  const [displayForm, setDisplayForm] = useState(false);

  const newExpenseClickHandler = () => {
    setDisplayForm(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    newExpenseCreatedhandler({
      id: Math.random().toString(),
      title: expenseTitleInputRef.current.value,
      amount: expenseAmountInputRef.current.value,
      date: expenseDateInputRef.current.value,
    });
    expenseTitleInputRef.current.value = "";
    expenseAmountInputRef.current.value = "";
    expenseDateInputRef.current.value = "";
    setDisplayForm(false);
  };

  const cancelSubmitHandler = () => {
    setDisplayForm(false);
  };

  const renderComponent = displayForm ? (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            data-testid="new-expense-title"
            type="text"
            ref={expenseTitleInputRef}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            data-testid="new-expense-amount"
            type="number"
            ref={expenseAmountInputRef}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            data-testid="new-expense-date"
            type="date"
            ref={expenseDateInputRef}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={cancelSubmitHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  ) : (
    <button onClick={newExpenseClickHandler}>Add New Expense</button>
  );

  return renderComponent;
}

export default ExpenseForm;
