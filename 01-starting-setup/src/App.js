import Expense from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React from "react";

const INIT_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App =()=> {

  const [expenses, setExpenses] = React.useState(INIT_EXPENSES);

  const expenseAddHandler = (expenseData) =>{
    console.log(expenseData);
    setExpenses((expenses_)=>{
      return [expenseData, ...expenses_];
    });
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onExpenseAdd = {expenseAddHandler} />
      <Expense expenses={expenses} />
    </div>
  );
}

export default App;
