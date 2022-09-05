import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState, useEffect, useCallback } from "react";
import MyContext from "./components/Contexts/MyContext";

function App() {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenseItems = useCallback(async () => {
    const url = "http://localhost:8080";
    const response = await fetch(url);
    const data = await response.json();
    setExpenses(data);
  }, []);

  useEffect(() => {
    fetchExpenseItems();
  }, [fetchExpenseItems]);

  const newExpenseCreateHandler = (newExpense) => {
    setExpenses((prevState) => {
      return [newExpense, ...prevState];
    });
  };

  return (
    <div>
      <MyContext.Provider value={newExpenseCreateHandler}>
        <NewExpense></NewExpense>
      </MyContext.Provider>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
