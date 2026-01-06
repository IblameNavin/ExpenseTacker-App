import React, { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { localStorageGetItem, localStorageSetItem } from "./components/LocalStorage";

const App = () => {

  

  const [addExpenseInput, setAddExpenseInput] = useState("");
  const [addAmountInput, setAddAmountInput] = useState("");

  const [expenses, setExpenses] = useState(()=>localStorageGetItem())

  const [editExpId, setEditExpId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editAmount, setEditAmount] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [date, setDate] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [editDate, setEditDate] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [searchName, setSearchName] = useState("")

  const addExpenseOnSearch = (e) => {
    setAddExpenseInput(e.target.value);
  };

  const addAmountOnSearch = (e) => {
    setAddAmountInput(e.target.value);
  };

  // Logic to Filter Categories
  const filterExpenses =  expenses.filter((exp)=> {
    const categoryMatch = filterCategory ? exp.category === filterCategory : true
    const nameMatch = searchName ? exp.name.toLowerCase().includes(searchName.toLowerCase()):true

    return categoryMatch && nameMatch
  }) 
     
  
  // Adding data to localStorage
  useEffect(() => {
  localStorageSetItem(expenses);
}, [expenses]);

  // Cancel Edit
  const cancelEdit = () => {
    setEditAmount("");
    setEditExpId(null);
    setEditName("");
    setEditCategory("");
    setEditDate("");
  };

  // Start editing a particular expense
  const startEditing = (id, name, amount, category, date) => {
    setEditExpId(id);
    setEditName(name);
    setEditAmount(amount);
    setEditCategory(category);
    setEditDate(date);
  };

  // Save edited expense
  const saveEdit = (id) => {
    setExpenses((currExp) =>
      currExp.map((exp) =>
        exp.id === id
          ? {
              ...exp,
              name: editName,
              amount: editAmount,
              category: editCategory,
              date: editDate,
            }
          : exp
      )
    );
    setEditExpId(null);
    setEditName("");
    setEditAmount("");
    setEditCategory("");
    setEditDate("");
  };

  // Add new expense
  const addExpenses = () => {
    if (!addExpenseInput.trim() || !addAmountInput.trim()) return;
    const newExp = {
      id: Date.now(),
      name: addExpenseInput,
      amount: addAmountInput,
      category: selectedCategory,
      date: date,
    };
    setExpenses((prev) => [...prev, newExp]);
    setAddExpenseInput("");
    setAddAmountInput("");
    setSelectedCategory("");
    setDate("");
  };

  // Total Expense
  const totalExpense = expenses.reduce((sum, exp) => {
    return sum + Number(exp.amount);
  }, 0);

  // Delete expense
  const deleteTheExpenses = (id) => {
    setExpenses((currExp) => currExp.filter((exp) => exp.id !== id));
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Expense Tracker</h1>

      <ExpenseForm
        nameValue={editExpId ? editName : addExpenseInput}
        amountValue={editExpId ? editAmount : addAmountInput}
        addExpenses={addExpenses}
        editExpId={editExpId}
        setEditName={setEditName}
        setEditAmount={setEditAmount}
        addExpenseOnSearch={addExpenseOnSearch}
        addAmountOnSearch={addAmountOnSearch}
        setSelectedCategory={setSelectedCategory}
        setDate={setDate}
        selectedCategory={selectedCategory}
        date={date}
        expenses={expenses}
        totalExpense={totalExpense}
        editCategory={editCategory}
        setEditCategory={setEditCategory}
        setEditDate={setEditDate}
        editDate={editDate}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        setSearchName = {setSearchName}
        searchName = {searchName}
      />

      <ExpenseList
        expenses={filterExpenses}
        deleteTheExpenses={deleteTheExpenses}
        startEditing={startEditing}
        editExpId={editExpId}
        saveEdit={saveEdit}
        cancelEdit={cancelEdit}
      />
    </div>
  );
};

export default App;
