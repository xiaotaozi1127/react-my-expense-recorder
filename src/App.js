import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

function App() {
  const expenseItemArray = [
    {
      id: "1",
      title: "House Issurance",
      date: "2011-12-01",
      amount: 700,
    },
    {
      id: "2",
      title: "New Car",
      date: "2012-01-01",
      amount: 3000,
    },
    {
      id: "3",
      title: "New TV",
      date: "2013-11-06",
      amount: 350,
    },
  ];

  const [expenses, setExpenses] = useState(expenseItemArray);

  const newExpenseCreateHandler = (newExpense) => {
    console.log("App component receive new expense:" + newExpense.amount);
    let array = expenses;
    array.push({
      id: (expenses.length + 1).toString(),
      ...newExpense,
    });
    setExpenses(array);
    console.log(expenses);
  };

  return (
    <div>
      <NewExpense receiveNewExpense={newExpenseCreateHandler}></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
