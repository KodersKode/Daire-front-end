import React from "react";
import { TSmallTextBoxProps } from "./index.definition";
import css from "./index.module.css";

function SmallTextBox({
  label,
  value,
  // handleChange,
  onChange,
}: TSmallTextBoxProps) {
  return (
    <div className={css.smallTextBox}>
      <label htmlFor="smallTextBox">{label}</label>
      <input
        name="smallTextBox"
        type="text"
        value={value}
        onChange={onChange}
        className={css.inputBox}
      />
    </div>
  );
}

export default SmallTextBox;
