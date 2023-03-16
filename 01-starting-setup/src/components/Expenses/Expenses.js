import ExpenseItem from "./ExpenseItem.js";
import React from "react";
import ExpensesFilter from "../NewExpense/ExpensesFilter.js";
import "./Expenses.css";
import Card from "../UI/Card.js";

const Expense = (props) => {

  const filterChangeHandler = (year) =>{
    updateFiltDate(year);
  }
  const [filt_date, updateFiltDate] = React.useState(0);

  return (
    <Card className="expenses">
      <ExpensesFilter onFilterChange={filterChangeHandler} />
      {props.expenses.map((prop) => {
        let prop_year = prop.date.getFullYear();
        if (filt_date === 0 || filt_date == prop_year)
        {
          return (
            <ExpenseItem
              title={prop.title}
              amount={prop.amount}
              date={prop.date}
            />
          );
        }
      })}
    </Card>
  );
};

export default Expense;
