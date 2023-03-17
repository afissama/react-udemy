import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React from "react";

const NewExpense = (props) => {

    const dataSaveHandler = (expenseData) =>{
        const data = {
            ...expenseData,
            id: Math.random().toString()
        };
        props.onExpenseAdd(data);
    }

    const [visible_form, updateVisibleForm] = React.useState(false);

    const showFormHandler = ()=>{
      updateVisibleForm(true);
    }
  
    const hideFormHandler = ()=>{
      updateVisibleForm(false);
    }
    
    let div_btns = <button onClick={hideFormHandler}>Cancel</button>;
    if (!visible_form){
        div_btns = <button onClick={showFormHandler}>New Expense</button>;
    }


    return (
        <div className="new-expense">
            {visible_form === true && <ExpenseForm onDataSave ={dataSaveHandler} /> }
            {div_btns}
        </div>
    );
}

export default NewExpense;