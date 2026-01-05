import React from "react";

const ExpenseForm = ({addExpenseOnSearch, addAmountOnSearch, addExpenses, editExpId, nameValue, amountValue , setEditName, setEditAmount, setDate, setSelectedCategory , selectedCategory, date,totalExpense, expenses, editCategory, setEditCategory, editDate,setEditDate, filterCategory, setFilterCategory}) => {

  const handleSubmit = (e)=>{
    e.preventDefault()
    addExpenses()
  }

  return (
    <form className="flex flex-col gap-3 mb-6" onSubmit={handleSubmit}>
      {/* Edit input */}
      {editExpId ? 

      <>
       <input
        type="text" value={nameValue} onChange={(e)=>setEditName(e.target.value)}
        placeholder=""  
        className="border p-2 rounded w-full"
        />
       <input
        type="number" 
        placeholder="Amount" value={amountValue} onChange={(e)=>setEditAmount(e.target.value)}
        className="border p-2 rounded w-full"
        />
        </>
      : 
      <>
      <input
        type="text"
        placeholder="Expense Name" value={nameValue} onChange={addExpenseOnSearch}
        className="border p-2 rounded w-full"
        />
      <input
        type="number"
        placeholder="Amount" value={amountValue} onChange={addAmountOnSearch}
        className="border p-2 rounded w-full"
        />
        </>
      }
       
       {/* Edit Category Input  */}
       {editExpId ? 
        <div className="">
       <select name="" id="" className="border p-2 rounded w-full" value={editCategory} onChange={(e)=>setEditCategory(e.target.value)} > 
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Clothes">Clothes</option>
        <option value="Travelling">Travelling</option>
        <option value="Entertainment">Entertainment</option>
       </select>
       </div> 
       :
       <div className="">
       <select name="" id="" className="border p-2 rounded w-full" value={selectedCategory} onChange={(e)=>setSelectedCategory(e.target.value)} > 
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Clothes">Clothes</option>
        <option value="Travelling">Travelling</option>
        <option value="Entertainment">Entertainment</option>
       </select>
       </div>
      
      }
           
        {editExpId ? 
           <input
  type="date" value={editDate}
  onChange={(e)=>setEditDate(e.target.value)}
  className="border p-2 rounded w-full"
/>
         :
     <input
  type="date" value={date}
  onChange={(e)=>setDate(e.target.value)}
  className="border p-2 rounded w-full"
/>
         }


   {expenses.length > 0 && 

   <div>
    <select name="" id="" className="border p-2" value={filterCategory} onChange={(e)=>setFilterCategory(e.target.value)}>
      <option value="">All</option>
       <option value="Food">Food</option>
        <option value="Clothes">Clothes</option>
        <option value="Travelling">Travelling</option>
        <option value="Entertainment">Entertainment</option>
    </select>
   </div>
   
   }

     {expenses.length > 0 && 
      <div className="text-right ">
        ${totalExpense}
      </div>
     }

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition cursor-pointer"
      >
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
