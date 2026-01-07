import { useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { localStorageSetItem, localStorageGetItem } from "./components/LocalStorage"

const App = () => {

  const [addName, setAddName] = useState("")
  const [addAmount, setAddAmount] = useState("")
  const [expenses, setExpenses] = useState(()=>localStorageGetItem())
  const [editExpId, setEditExpId] = useState(null)
  const [editName, setEditName] = useState("")
  const [editAmount, setEditAmount] = useState("")
  const [selectCategory, setSelectCategory] = useState("")
  const [date, setDate] = useState("")
  const [editCategory, setEditCategory] = useState("")
  const [editDate, setEditDate] = useState("")



  const handleOnChangeName = (e)=>{
    setAddName(e.target.value)
  }

   const handleOnChangeAmount = (e)=>{
    setAddAmount(e.target.value)
  }

  const addExpense = ()=>{
    if(!addName.trim() && !addAmount.trim()) return
    const newExp = {
       id: Date.now(),
      name: addName,
       amount: addAmount,
       category : selectCategory,
       date : date
  }
  setExpenses((prev)=> [...prev, newExp])
  setAddAmount("")
  setAddName("")
  setSelectCategory("")
  setDate("")
}

const deleteTheExpense = (id)=>{
  setExpenses((currExp)=>
   currExp.filter((exp)=>
   exp.id !== id
  )
  )
}

const startEditing = (id, currName, currAmount, category, date)=>{
  setEditExpId(id)
  setEditName(currName)
  setEditAmount(currAmount)
  setEditCategory(category)
  setEditDate(date)
}


const saveEdit = (id)=>{
   setExpenses((currExp)=>
   currExp.map((exp)=>
   exp.id === id ? {...exp, name : editName, amount : editAmount, category: editCategory, date : editDate} : exp
  )
  )
  setEditExpId(null)
  setEditName("")
  setEditAmount("")
}

const cancelEdit = ()=>{
  setEditExpId(null)
  setEditAmount("")
  setEditName("")
}


    //Total Expense
  const totalExpense = expenses.reduce((sum, exp)=>{
    return sum + Number(exp.amount)
  }, 0)

 useEffect(() => {
   localStorageSetItem(expenses)
 }, [expenses])
 

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Expense Tracker</h1>

      <ExpenseForm handleOnChangeName = {handleOnChangeName} handleOnChangeAmount = {handleOnChangeAmount} addName = {addName} addAmount = {addAmount} addExpense = {addExpense} editExpId = {editExpId} expenses = {expenses} editName = {editName} editAmount = {editAmount} setEditName = {setEditName} setEditAmount = {setEditAmount} saveEdit = {saveEdit} totalExpense = {totalExpense} selectCategory = {selectCategory} date = {date} setSelectCategory = {setSelectCategory} setDate = {setDate} setEditCategory = {setEditCategory} setEditDate = {setEditDate} editCategory = {editCategory} editDate = {editDate} />

      <ExpenseList  expenses = {expenses}  deleteTheExpense = {deleteTheExpense} startEditing = {startEditing} saveEdit = {saveEdit} editExpId = {editExpId} cancelEdit = {cancelEdit}/>
    </div>
  );
};

export default App;
