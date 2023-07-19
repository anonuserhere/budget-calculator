import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DisplayTax from "./DisplayTax";

export default class Tax extends React.Component {
  //   state = {
  //     originalBillAmount: 0,
  //     gst: 0,
  //     gstAmount: 0,
  //     total: 0,
  //   };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  calculateTotal = () => {
    const gstAmount =
      (parseFloat(this.state.originalBillAmount) * parseFloat(this.state.gst)) /
      100;
    const total = (
      parseFloat(this.state.originalBillAmount) + gstAmount
    ).toFixed(2);

    this.setState({
      gstAmount: gstAmount,
      total: total,
    });
  };

  clearForm = () => {
    this.setState({
      originalBillAmount: 0,
      gst: 0,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.calculateTotal();
    this.clearForm();
  };

  render() {
    return (
      <>
        <div className="container">
          <form onSubmit={this.handleSubmit} className="form">
            <h2>Bill: </h2>
            <label className="form-label">Original Bill Amount: </label>
            <input
              type="number"
              className="form-control"
              placeholder="Original Bill Amount"
              name="originalBillAmount"
              value={this.state.originalBillAmount}
              onChange={this.handleChange}
            />
            <label className="form-label">GST:</label>
            <input
              type="number"
              className="form-control"
              placeholder="GST %"
              name="gst"
              value={this.state.gst}
              onChange={this.handleChange}
            />

            <div className="btn btn-container">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!this.state.originalBillAmount || !this.state.gst}
              >
                Calculate
              </button>
            </div>
          </form>
        </div>
        <DisplayTax
          originalBillAmount={this.state.originalBillAmount}
          gst={this.state.gst}
          gstAmount={this.state.gstAmount}
          total={this.state.total}
        />
      </>
    );
  }
}
