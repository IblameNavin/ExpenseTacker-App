import React from "react";

const ExpenseForm = ({handleOnChangeName, handleOnChangeAmount, addName, addAmount, addExpense, editExpId, editName , editAmount, setEditName, setEditAmount, totalExpense,expenses, selectCategory, setSelectCategory, setDate, setEditDate, setEditCategory, editCategory, editDate}) => {

 const handleSubmit = (e)=>{
  e.preventDefault()
 }

  return (
    <form className="flex flex-col gap-3 mb-6" onSubmit={handleSubmit}>  
    {editExpId != null ?

  //  LOGIC FOR ADDING AND EDITING INPUTS 
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


     {/* UI FOR SELECTING CATEGORY */}
      <div className="">
      <select name="" id="" className="border p-2" value={editExpId != null ? editCategory : selectCategory} onChange = {(e)=>{editExpId != null ? setEditCategory(e.target.value) : setSelectCategory(e.target.value)}}>
        <option value="">All</option>
        <option value="Food">Food</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Travelling">Travelling</option>
        <option value="Clothes">Clothes</option>
        <option value="Furniture">Furniture</option>
        <option value="Skincare">Skincare</option>
      </select>
     </div>
    

        {/* INPUT FOR SHOWING DATE */}
     <input type="date" className="border p-2" value={editExpId != null ? editDate : setEditDate } onChange={(e)=>{editExpId != null ? setEditDate(e.target.value) : setDate(e.target.value)}}/>


         {/* UI FOR TOTAL EXPENSE  */}
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
