import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  const [addExpenseInput, setAddExpenseInput] = useState("");
  const [addAmountInput, setAddAmountInput] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [editExpId, setEditExpId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editAmount, setEditAmount] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("")
  const [date, setDate] = useState("")
  

 const addExpenseOnSearch = (e)=>{
  setAddExpenseInput(e.target.value)
 }

  const addAmountOnSearch = (e)=>{
  setAddAmountInput(e.target.value)
 }



 // Cancel Edit
 const cancelEdit = ()=>{
  setEditAmount("")
    setEditExpId(null)
    setEditName("")
 }


  // Start editing a particular expense
  const startEditing = (id, name, amount) => {
    setEditExpId(id);
    setEditName(name);
    setEditAmount(amount);
  };

  // Save edited expense
  const saveEdit = (id) => {
    setExpenses((currExp) =>
      currExp.map((exp) =>
        exp.id === id ? { ...exp, name: editName, amount: editAmount } : exp
      )
    );
    setEditExpId(null);
    setEditName("");
    setEditAmount("");
  };

  // Add new expense
  const addExpenses = () => {
    if (!addExpenseInput.trim() || !addAmountInput.trim()) return;
    const newExp = {
      id: Date.now(),
      name: addExpenseInput,
      amount: addAmountInput,
      category : selectedCategory,
      date : date
    };
    setExpenses((prev)=>[...prev, newExp]);
    setAddExpenseInput("");
    setAddAmountInput("");
    setSelectedCategory("")
    setDate("")
  };

  // Delete expense
  const deleteTheExpenses = (id) => {
    setExpenses((currExp) => currExp.filter((exp) => exp.id !== id));
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Expense Tracker</h1>

      <ExpenseForm
        value1={editExpId ? editName : addExpenseInput}
        value2={editExpId ? editAmount : addAmountInput}
        addExpenses={addExpenses}
        editExpId={editExpId}
        setEditName={setEditName}
        setEditAmount={setEditAmount}
        addExpenseOnSearch = {addExpenseOnSearch}
        addAmountOnSearch = {addAmountOnSearch}
        setSelectedCategory = {setSelectedCategory}
         setDate = {setDate}
         selectedCategory = {selectedCategory}
         date = {date}
      />

      <ExpenseList
        expenses={expenses}
        deleteTheExpenses={deleteTheExpenses}
        startEditing={startEditing}
        editExpId={editExpId}
        saveEdit = {saveEdit}
        cancelEdit = {cancelEdit}
        
      />
    </div>
  );
};

export default App;
