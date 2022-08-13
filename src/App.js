import Expenses from "./components/Expenses";

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

  return <Expenses items={expenseItemArray} />;
}

export default App;
