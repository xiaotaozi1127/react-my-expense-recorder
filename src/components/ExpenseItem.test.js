import {render, screen} from "@testing-library/react";
import ExpenseItem from "./ExpenseItem";

test("should render expense title", ()=>{
    render(<ExpenseItem title="shoes" />)
    const expenseTitle =  screen.getByText("shoes")
    expect(expenseTitle).toBeInTheDocument()
})