import ExpenseItem from "./ExpenseItem.js";
import React from "react";
import ExpensesFilter from "../NewExpense/ExpensesFilter.js";
import "./Expenses.css";
import Card from "../UI/Card.js";
import ExpensesList from "./ExpensesList.js";

const Expense = (props) => {
  const filterChangeHandler = (year) => {
    updateFiltDate(year);
  };
  const [filt_date, updateFiltDate] = React.useState("2021");
  const filtered = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filt_date
  );
  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filt_date}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesList items={filtered} />
      </Card>
    </li>
  );
};

export default Expense;
