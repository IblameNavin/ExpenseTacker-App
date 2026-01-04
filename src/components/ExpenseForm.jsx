import React from "react";

const ExpenseForm = ({addExpenseOnSearch, addAmountOnSearch, addExpenses, editExpId, value1, value2 , setEditName, setEditAmount, setDate, setSelectedCategory , selectedCategory, date}) => {

  const handleSubmit = (e)=>{
    e.preventDefault()
  }

  return (
    <form className="flex flex-col gap-3 mb-6" onSubmit={handleSubmit}>
      {/* Edit input */}
      {editExpId ? 

      <>
       <input
        type="text" value={value1} onChange={(e)=>setEditName(e.target.value)}
        placeholder=""  
        className="border p-2 rounded w-full"
        />
       <input
        type="number" 
        placeholder="Amount" value={value2} onChange={(e)=>setEditAmount(e.target.value)}
        className="border p-2 rounded w-full"
        />
        </>
      : 
      <>
      <input
        type="text"
        placeholder="Expense Name" value={value1} value2 = {value2} onChange={addExpenseOnSearch}
        className="border p-2 rounded w-full"
        />
      <input
        type="number"
        placeholder="Amount" value={value2} onChange={addAmountOnSearch}
        className="border p-2 rounded w-full"
        />
        </>
      }
       
       <div className="">
        <label className="">Filter By Category</label>
       <select name="" id="" className="border p-2 rounded w-full" value={selectedCategory} onChange={(e)=>setSelectedCategory(e.target.value)} > 
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Clothes">Clothes</option>
        <option value="Travelling">Travelling</option>
        <option value="Entertainment">Entertainment</option>
       </select>
       </div>
      

     <input
  type="date" value={date}
  onChange={(e)=>setDate(e.target.value)}
 
  className="border p-2 rounded w-full"
/>
     
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition cursor-pointer"
     onClick={addExpenses}  >
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
