import React from "react";

function SmallTextBox({ label }) {
  return (
    <div>
      <label>{label}</label>
      <input type="text" />
    </div>
  );
}

export default SmallTextBox;
