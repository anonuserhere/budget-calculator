import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ExpenseList from "./List";

export default class Form extends React.Component {
  expenseType = [
    { name: "Transport", value: "transport" },
    {
      name: "Entertainment",
      value: "entertainment",
    },
    {
      name: "Food",
      value: "food",
    },
    {
      name: "Bills",
      value: "bills",
    },
    {
      name: "Loans",
      value: "loans",
    },
    {
      name: "Others",
      value: "others",
    },
  ];

  state = {
    id: "",
    expense: "",
    category: "",
    amount: "",
    date: "",
    expenseList: [],
    entryBeingEdited: 0,
    editExpense: "",
    editCategory: "",
    editAmount: "",
    editDate: "",
    checkbox: {},
  };

  displayExpense = this.expenseType.map((expense) => {
    return (
      <option key={expense.value} value={expense.value}>
        {expense.name}
      </option>
    );
  });

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  resetForm = () => {
    this.setState({
      expense: "",
      category: "",
      amount: "",
      date: "",
    });
  };

  clearEdit = () => {
    this.setState({
      entryBeingEdited: 0,
      editExpense: "",
      editCategory: "",
      editAmount: "",
      editDate: "",
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.addEntry();
    this.resetForm();
  };

  addEntry = () => {
    const newEntry = {
      id: crypto.randomUUID(),
      expense: this.state.expense,
      category: this.state.category,
      amount: this.state.amount,
      date: this.state.date,
    };

    this.setState((prevState) => ({
      expenseList: [...prevState.expenseList, newEntry],
    }));
  };

  deleteEntry = (expense) => {
    this.setState({
      expenseList: this.state.expenseList.filter((e) => e.id !== expense.id),
    });
  };

  beginUpdateEntry = (selectedEntry) => {
    this.setState({
      entryBeingEdited: selectedEntry.id,
      editExpense: selectedEntry.expense,
      editCategory: selectedEntry.category,
      editAmount: selectedEntry.amount,
      editDate: selectedEntry.date,
    });
  };

  updateEntry = (selectedEntry) => {
    const { editExpense, editCategory, editAmount, editDate, expenseList } =
      this.state;
    const modifiedList = expenseList.map((entry) =>
      entry.id === selectedEntry.id
        ? {
            ...entry,
            expense: editExpense,
            category: editCategory,
            amount: editAmount,
            date: editDate,
          }
        : entry
    );
    this.setState({
      expenseList: modifiedList,
    });
    this.clearEdit();
  };

  displayEdit = (selectedEntry) => {
    const { editExpense, editCategory, editAmount, editDate } = this.state;
    return (
      <div>
        <label className="form-label">Expense :</label>
        <input
          className="form-control"
          type="text"
          name="editExpense"
          placeholder="Enter something"
          value={editExpense}
          onChange={this.handleChange}
        />
        <label className="form-label">Category :</label>
        <select
          className="form-control"
          type="text"
          name="editCategory"
          value={editCategory}
          onChange={this.handleChange}
        >
          {this.displayExpense}
        </select>
        <label className="form-label">Amount :</label>
        <input
          className="form-control"
          type="number"
          name="editAmount"
          placeholder="Enter something"
          value={editAmount}
          onChange={this.handleChange}
        />
        <label className="form-label">Date :</label>
        <input
          className="form-control"
          type="text"
          name="editDate"
          placeholder="Enter something"
          value={editDate}
          onChange={this.handleChange}
        />
        <div>
          <button
            disabled={
              !this.state.editExpense ||
              !this.state.editCategory ||
              !this.state.editAmount ||
              !this.state.editDate
            }
            className="btn btn-primary"
            onClick={() => this.updateEntry(selectedEntry)}
          >
            Update
          </button>
          <button
            className="btn btn-primary"
            onClick={() => this.clearEdit(selectedEntry)}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  };

  handleCheckbox = (expenseId) => {
    this.setState((prevState) => ({
      checkbox: {
        ...prevState.checkbox,
        [expenseId]: !prevState.checkbox[expenseId],
      },
    }));
  };

  render() {
    return (
      <>
        <div className="container">
          <form onSubmit={this.handleSubmit} className="form">
            <label className="form-label">Expense :</label>
            <input
              className="form-control"
              type="text"
              name="expense"
              placeholder="Expense description"
              value={this.state.expense}
              onChange={this.handleChange}
            />
            <label className="form-label">Category :</label>
            <select
              className="form-control"
              name="category"
              value={this.state.category}
              onChange={this.handleChange}
            >
              {this.displayExpense}
            </select>
            <label className="form-label">Amount :</label>
            <input
              className="form-control"
              type="number"
              name="amount"
              placeholder="Amount"
              value={this.state.amount}
              onChange={this.handleChange}
            />
            <label className="form-label">Date :</label>
            <input
              className="form-control"
              type="text"
              name="date"
              placeholder="Date"
              value={this.state.date}
              onChange={this.handleChange}
            />
            <div className="btn btn-container">
              <button
                type="submit"
                className="btn btn-secondary"
                disabled={
                  !this.state.expense ||
                  !this.state.category ||
                  !this.state.amount ||
                  !this.state.date
                }
              >
                Submit
              </button>
            </div>
          </form>
          <ExpenseList
            entryBeingEdited={this.state.entryBeingEdited}
            displayEdit={this.displayEdit}
            beginUpdateEntry={this.beginUpdateEntry}
            expenseList={this.state.expenseList}
            deleteEntry={this.deleteEntry}
            checkbox={this.state.checkbox}
            handleCheckbox={this.handleCheckbox}
          />
        </div>
      </>
    );
  }
}
