import React from "react";
import { TLargeTextBoxProps } from "./index.definition";
import css from "./index.module.css";

function LargeTextBox({ value, onChange, label }: TLargeTextBoxProps) {
  return (
    <div>
      <label htmlFor="largeTextBox">{label}</label>
      <textarea
        name="largeTextBox"
        className={css.textArea}
        onChange={onChange}
        value={value}
      ></textarea>
    </div>
  );
}

export default LargeTextBox;
