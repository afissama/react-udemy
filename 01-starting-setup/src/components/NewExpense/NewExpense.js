import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const dataSaveHandler = (expenseData) =>{
        const data = {
            ...expenseData,
            id: Math.random().toString()
        };
        props.onExpenseAdd(data);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onDataSave ={dataSaveHandler} />
        </div>
    );
}

export default NewExpense;