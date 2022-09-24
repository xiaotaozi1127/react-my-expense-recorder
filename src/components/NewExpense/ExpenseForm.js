import "./ExpenseForm.css";
import { useRef } from "react";
import MyContext from "../../Contexts/MyContext";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

function ExpenseForm() {
  const expenseTitleInputRef = useRef();
  const expenseAmountInputRef = useRef();
  const expenseDateInputRef = useRef();
  const history = useHistory();

  const newExpenseCreatedhandler = useContext(MyContext);

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
    history.push("/expenses");
  };

  const renderComponent =
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
        <button type="submit">Add Expense</button>
      </div>
    </form>;

  return renderComponent;
}

export default ExpenseForm;
