import React from "react";

const ExpenseItem = ({
  expense,
  startEditing,
  deleteExpense,
  cancelEdit,
  editExpId,
}) => {
  const isEditing = editExpId === expense.id;

  return (
    <div className="flex justify-between items-center border p-3 rounded bg-gray-50">
      <div>
        <p className="font-medium">{expense.name}</p>
        <p className="text-sm text-gray-600">
          {expense.category} • {expense.date}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <span className="font-semibold">${expense.amount}</span>

        {isEditing ? (
          <button className="text-sm text-blue-500 cursor-pointer" onClick={cancelEdit}>
            Cancel
          </button>
        ) : (
          <button
            className="text-sm text-blue-500 cursor-pointer"
            onClick={() => startEditing(expense)}
          >
            Edit
          </button>
        )}

        <button
          className="text-sm text-red-500 cursor-pointer"
          onClick={() => deleteExpense(expense.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ExpenseItem;
