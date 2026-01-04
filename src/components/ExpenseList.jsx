import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({expenses, deleteTheExpenses, saveEdit, startEditing, editExpId, cancelEdit, value, setSelectedCategory, }) => {
  // Dummy data for UI
  // const expenses = [
  //   { id: 1, name: "Groceries", amount: 50 },
  //   { id: 2, name: "Transport", amount: 20 },
  //   { id: 3, name: "Utilities", amount: 100 },
  // ];
  


  return (
    <div className="flex flex-col gap-3">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} deleteTheExpenses = {deleteTheExpenses} saveEdit = {saveEdit} startEditing = {startEditing} editExpId = {editExpId} cancelEdit = {cancelEdit} value = {value} setSelectedCategory =  {setSelectedCategory} />
      ))}
    </div>
  );
};

export default ExpenseList;
