import Form from "./Form";
import "./style.css";
import React from "react";
import Tax from "./Tax";
import DisplayTax from "./DisplayTax";

export default class App extends React.Component {

  state = {
    originalBillAmount: 0,
    gst: 0,
    gstAmount: 0,
    total: 0,
  };

  render() {
    return (
      <>
        <Form />
        <Tax />
        <DisplayTax />
      </>
    );
  }
}
