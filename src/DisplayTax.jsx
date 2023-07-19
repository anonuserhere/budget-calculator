import React from "react";

export default function DisplayTax({
  originalBillAmount,
  gst,
  gstAmount,
  total,
}) {
  return (
    <>
      <div className="container">
        <h2>Bill breakdown</h2>
        <p>Original Bill: {originalBillAmount}</p>
        <p>GST %: {gst}</p>
        <p>GST Amount: {gstAmount}</p>
        <p>Total: {total}</p>
      </div>
    </>
  );
}
