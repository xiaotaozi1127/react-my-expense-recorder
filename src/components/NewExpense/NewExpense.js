import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const newExpenseCreateHandler = (newExpense) => {
    props.onNewExpenseCreated(newExpense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onNewExpenseCreated={newExpenseCreateHandler} />
    </div>
  );
}

export default NewExpense;
