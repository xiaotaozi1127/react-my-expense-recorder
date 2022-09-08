import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState, useEffect, useCallback } from "react";
import MyContext from "./components/Contexts/MyContext";
import axios from "axios";

function App() {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenseItems = useCallback(async () => {
    const url = "http://localhost:8080/expenses";
    const response = await fetch(url);
    const data = await response.json();
    setExpenses(data);
  }, []);

  useEffect(() => {
    fetchExpenseItems();
  }, [fetchExpenseItems]);

  const newExpenseCreateHandler = (newExpense) => {
    const url = "http://localhost:8080/expense";
    // const options = {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newExpense),
    // };
    // fetch(url, options)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setExpenses(data);
    //   })
    //   .catch((error) => console.error(error));

    axios
      .post(url, newExpense, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then(({ data }) => {
        setExpenses(data);
      })
      .catch((error) => console.error(error));
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
