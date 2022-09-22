import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MyContext from "../../../Contexts/MyContext";
import ExpenseForm from "../ExpenseForm";

describe("<ExpenseForm/>", () => {
  const value = jest.fn();

  test("should display add new expense button when init", () => {
    render(
      <MyContext.Provider value={value}>
        <ExpenseForm />
      </MyContext.Provider>
    );

    const addnewExpenseButton = screen.getByRole("button", {
      name: "Add New Expense",
    });
    expect(addnewExpenseButton).toBeInTheDocument();
  });

  test("when click add new expense button, expense form will display", () => {
    render(
      <MyContext.Provider value={value}>
        <ExpenseForm />
      </MyContext.Provider>
    );
    const addnewExpenseButton = screen.getByRole("button", {
      name: "Add New Expense",
    });

    userEvent.click(addnewExpenseButton);

    const newExpenseTitle = screen.getByTestId("new-expense-title");
    expect(newExpenseTitle).toBeInTheDocument();

    const submitFormButton = screen.getByRole("button", {
      name: "Add Expense",
    });
    expect(submitFormButton).toBeInTheDocument();

    const cancelFormButton = screen.getByRole("button", { name: "Cancel" });
    expect(cancelFormButton).toBeInTheDocument();
  });

  test("when submit form, form will disappear", () => {
    render(
      <MyContext.Provider value={value}>
        <ExpenseForm />
      </MyContext.Provider>
    );
    const addnewExpenseButton = screen.getByRole("button", {
      name: "Add New Expense",
    });

    userEvent.click(addnewExpenseButton);

    const newExpenseTitle = screen.getByTestId("new-expense-title");
    expect(newExpenseTitle).toBeInTheDocument();

    const submitFormButton = screen.getByRole("button", {
      name: "Add Expense",
    });
    expect(submitFormButton).toBeInTheDocument();

    userEvent.click(submitFormButton);

    const addnewExpenseButtonAgain = screen.getByRole("button", {
      name: "Add New Expense",
    });

    expect(addnewExpenseButtonAgain).toBeInTheDocument();
  });

  test("when cancel the submit form, form will disappear", () => {
    render(
      <MyContext.Provider value={value}>
        <ExpenseForm />
      </MyContext.Provider>
    );
    const addnewExpenseButton = screen.getByRole("button", {
      name: "Add New Expense",
    });

    userEvent.click(addnewExpenseButton);

    const newExpenseTitle = screen.getByTestId("new-expense-title");
    expect(newExpenseTitle).toBeInTheDocument();

    const cancelSubmitFormButton = screen.getByRole("button", {
      name: "Cancel",
    });
    expect(cancelSubmitFormButton).toBeInTheDocument();

    userEvent.click(cancelSubmitFormButton);

    const addnewExpenseButtonAgain = screen.getByRole("button", {
      name: "Add New Expense",
    });
    expect(addnewExpenseButtonAgain).toBeInTheDocument();
  });
});
