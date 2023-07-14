import React from "react";

export default function ExpenseList({ expenseList, deleteEntry }) {
  return expenseList.length > 0 ? (
    <div className="container">
      <h4>Expenses List: </h4>
      <ul>
        {expenseList.map((expense) => (
          <li key={expense.id}>
            <p>Entry: {expense.expense}</p>
            <p>Type: {expense.category}</p>
            <p>Amount: {expense.amount}</p>
            <p>Date: {expense.date}</p>
            <div className="btn-container">
              <button className="btn btn-info">Edit</button>
              <button
                onClick={() => deleteEntry(expense)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  ) : null;
}
