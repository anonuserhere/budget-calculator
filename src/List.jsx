import React from "react";

export default function ExpenseList({
  entryBeingEdited,
  beginUpdateEntry,
  expenseList,
  deleteEntry,
  displayEdit,
}) {
  return expenseList.length > 0 ? (
    <div className="container">
      <h4>Expenses List: </h4>
      <ul>
        {expenseList.map((expense) => (
          <React.Fragment key={expense.id}>
            <div className="box">
              {entryBeingEdited === expense.id ? (
                displayEdit(expense)
              ) : (
                <li key={expense.id}>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={expense.id}
                  />
                  <p>Entry: {expense.expense}</p>
                  <p>Type: {expense.category}</p>
                  <p>Amount: {expense.amount}</p>
                  <p>Date: {expense.date}</p>
                  <div className="btn-container">
                    <button
                      onClick={() => beginUpdateEntry(expense)}
                      className="btn btn-info"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteEntry(expense)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              )}
            </div>
          </React.Fragment>
        ))}
      </ul>
    </div>
  ) : null;
}
