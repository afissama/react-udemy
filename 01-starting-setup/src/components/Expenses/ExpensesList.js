import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses founds</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((prop) => {
        return (
          <ExpenseItem
            key={prop.id}
            title={prop.title}
            amount={prop.amount}
            date={prop.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
