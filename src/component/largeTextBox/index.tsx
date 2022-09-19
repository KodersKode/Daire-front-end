import React from "react";
import { TLargeTextBoxProps } from "./index.definition";
import css from "./index.module.css";

function LargeTextBox({
  value,
  onChange,
  label,
  placeholder,
}: TLargeTextBoxProps) {
  return (
    <div className={css.largeTextBox}>
      <label htmlFor="largeTextBox">{label}</label>
      <textarea
        name="largeTextBox"
        placeholder={placeholder}
        className={css.textArea}
        onChange={onChange}
        value={value}
        spellCheck="true"
      ></textarea>
    </div>
  );
}

export default LargeTextBox;
