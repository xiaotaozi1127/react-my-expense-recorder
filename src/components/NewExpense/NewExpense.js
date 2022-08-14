import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const newExpenseCreateHandler = (newExpense) => {
    console.log("newExpense received in newExpense component:" + newExpense);
    props.onNewExpenseCreated(newExpense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onNewExpenseCreated={newExpenseCreateHandler} />
    </div>
  );
}

export default NewExpense;
