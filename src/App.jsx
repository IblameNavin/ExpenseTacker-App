import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [editExpId, setEditExpId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    category: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const addOrUpdateExpense = () => {
    if (!formData.name.trim() || !formData.amount.trim()) return;

    if (editExpId) {
      setExpenses((prev) =>
        prev.map((exp) =>
          exp.id === editExpId ? { ...exp, ...formData } : exp
        )
      );
      setEditExpId(null);
    } else {
      setExpenses((prev) => [
        ...prev,
        { id: Date.now(), ...formData },
      ]);
    }

    setFormData({ name: "", amount: "", category: "", date: "" });
  };

  const startEditing = (expense) => {
    setEditExpId(expense.id);
    setFormData({
      name: expense.name,
      amount: expense.amount,
      category: expense.category,
      date: expense.date,
    });
  };

  const cancelEdit = () => {
    setEditExpId(null);
    setFormData({ name: "", amount: "", category: "", date: "" });
  };

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id));
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Expense Tracker</h1>

      <ExpenseForm
        formData={formData}
        handleChange={handleChange}
        onSubmit={addOrUpdateExpense}
        editMode={!!editExpId}
      />

      <ExpenseList
        expenses={expenses}
        startEditing={startEditing}
        deleteExpense={deleteExpense}
        cancelEdit={cancelEdit}
        editExpId={editExpId}
      />
    </div>
  );
};

export default App;
