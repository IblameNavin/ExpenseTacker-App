import React from "react";

const ExpenseForm = ({ formData, handleChange, onSubmit, editMode }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form className="flex flex-col gap-3 mb-6" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Expense Name"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />

      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />

      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      >
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Clothes">Clothes</option>
        <option value="Travelling">Travelling</option>
        <option value="Entertainment">Entertainment</option>
      </select>

      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition cursor-pointer"
      >
        {editMode ? "Save Expense" : "Add Expense"}
      </button>
    </form>
  );
};

export default ExpenseForm;
