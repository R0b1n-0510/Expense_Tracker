import { useState } from "react"
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"

const NewExpense = (props) => {

    const [state, setState] = useState(false)

    const startEditingHandler = () => {
        setState(true)
    }

    const stopEditingHandler = () => {
        setState(false)
    }

    const saveExpenseDataHandler = (incomingData) => {
        const expenseData = {
            ...incomingData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setState(false)
    }

    return <div className="new-expense">
        {!state?<button onClick={startEditingHandler}>Add New Expense</button>:""}    
        {state?<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel = {stopEditingHandler}/>:""}
    </div>
}
// <div><button onClick={show}>Add Expense</button></div>
export default NewExpense