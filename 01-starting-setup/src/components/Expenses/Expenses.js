import ExpenseItem from "./ExpenseItem.js";
import "./Expenses.css"
import Card from "../UI/Card.js";

const Expense=(props)=> {
  return (
    <Card className="expenses">
      {props.expenses.map((prop) => {
        return (
          <ExpenseItem
            title={prop.title}
            amount={prop.amount}
            date={prop.date}
          />
        );
      })}
    </Card>
  );
}

export default Expense;
