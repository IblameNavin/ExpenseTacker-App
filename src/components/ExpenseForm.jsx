import React from "react";

const ExpenseForm = ({handleOnChangeName, handleOnChangeAmount, addName, addAmount, addExpense, editExpId, editName , editAmount, setEditName, setEditAmount, totalExpense,expenses }) => {

 const handleSubmit = (e)=>{
  e.preventDefault()
 }

  return (
    <form className="flex flex-col gap-3 mb-6" onSubmit={handleSubmit}>  
    {editExpId != null ?

    <>
      <input
        type="text" value={editName}
        placeholder="Expense Name" onChange={(e)=>setEditName(e.target.value)}
        className="border p-2 rounded w-full"
        />
      <input
        type="number" onChange={(e)=>setEditAmount(e.target.value)} value={editAmount}
        placeholder="Amount" 
        className="border p-2 rounded w-full"
        />
        </>
    :
    <>
      <input
        type="text" value={addName} onChange={handleOnChangeName}
        placeholder="Expense Name" 
        className="border p-2 rounded w-full"
        />
      <input
        type="number" value={addAmount} onChange={handleOnChangeAmount}
        placeholder="Amount" 
        className="border p-2 rounded w-full"
        />
        </>
    }
          {expenses.length > 0 &&
        <span className="text-right text-md">Total Expense : ${totalExpense}</span>
          }

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition cursor-pointer"
      onClick={addExpense}>
       Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
