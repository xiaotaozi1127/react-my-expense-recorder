import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState, useEffect, useCallback } from "react";
import { Route, Redirect } from "react-router-dom";
import MainNavigation from "./layout/MainNavigation";
import MyContext from "./Contexts/MyContext";
import { Provider } from "react-redux";
import store from "./store/index";

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
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newExpense),
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setExpenses(data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <MainNavigation/>
      <Route path='/' exact>
        <Redirect to='/expenses' />
      </Route>
      <Route path="/expenses">
        <Provider store={store}>
          <Expenses items={expenses} />
        </Provider>
      </Route>
      <Route path="/new-expense">
        <MyContext.Provider value={newExpenseCreateHandler}>
          <NewExpense/>
        </MyContext.Provider>
      </Route>
    </div>
  );
}

export default App;
