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
    <div className={css.stb}>
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={css.smallTextBox}
      />
    </div>
  );
}

export default SmallTextBox;
