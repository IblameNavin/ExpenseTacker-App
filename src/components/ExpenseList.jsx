import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({
  expenses,
  startEditing,
  deleteExpense,
  cancelEdit,
  editExpId,
}) => {
  return (
    <div className="flex flex-col gap-3">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          startEditing={startEditing}
          deleteExpense={deleteExpense}
          cancelEdit={cancelEdit}
          editExpId={editExpId}
        />
      ))}
    </div>
  );
};

export default ExpenseList;
