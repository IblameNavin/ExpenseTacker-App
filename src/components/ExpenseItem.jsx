import React from "react";

const ExpenseItem = ({expense, deleteTheExpenses, startEditing, saveEdit, editExpId, cancelEdit, }) => {
  // console.log(editExpId)
  return (
    <div className="flex justify-between items-center border p-3 rounded shadow-sm bg-gray-50">
      <span>{expense.name}</span>
      <span>{expense.category}</span>
      
      <div className="flex items-center gap-2">
        <span className="font-semibold">${expense.amount}</span>
        <span className="font-semibold">${expense.date}</span>
            


        {/* Add Edit Logic */}
        {editExpId === expense.id  ? (
          <>
          <button className="text-blue-500 text-sm cursor-pointer" onClick={()=>saveEdit(expense.id)}>Save</button>
          <button className="text-blue-500 text-sm cursor-pointer" onClick={cancelEdit}>Cancel</button>
          </>
        ) : (
          <button className="text-blue-500 text-sm cursor-pointer" onClick={()=>startEditing(expense.id, expense.name, expense.amount, expense.category, expense.date)}>Edit</button>
        )}

        <button
          className="text-red-500 text-sm cursor-pointer"
          onClick={() => deleteTheExpenses(expense.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ExpenseItem;
