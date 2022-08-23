import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
// import Example from "./Example";
import { useState } from "react";

function App() {
  const expenseItemArray = [
    {
      id: "1",
      title: "House Issurance",
      date: "2019-12-01",
      amount: 700,
    },
    {
      id: "2",
      title: "New Car",
      date: "2020-01-01",
      amount: 3000,
    },
    {
      id: "3",
      title: "New TV",
      date: "2021-11-06",
      amount: 350,
    },
  ];
  const [expenses, setExpenses] = useState(expenseItemArray);
  const newExpenseCreateHandler = (newExpense) => {
    setExpenses((prevState) => {
      return [newExpense, ...prevState];
    });
  };

  return (
    <div>
      <NewExpense onNewExpenseCreated={newExpenseCreateHandler}></NewExpense>
      <Expenses items={expenses} />
      {/* <Example></Example> */}
    </div>
  );
}

export default App;
