import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

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

  const newExpenseCreateHandler = (newExpense) => {
    console.log("App component receive new expense:" + newExpense.amount);
  };

  return (
    <div>
      <NewExpense receiveNewExpense={newExpenseCreateHandler}></NewExpense>
      <Expenses items={expenseItemArray} />
    </div>
  );
}

export default App;
