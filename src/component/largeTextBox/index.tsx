import React from "react";
import { TLargeTextBoxProps } from "./index.definition";
import css from "./index.module.css";

function LargeTextBox({ text, onChange, label }: TLargeTextBoxProps) {
  return (
    <div className={css.largeTextBox}>
      <label htmlFor="largeTextBox">{label}</label>
      <textarea
        name="largeTextBox"
        className={css.textArea}
        onChange={onChange}
      >
        {text}
      </textarea>
    </div>
  );
}

export default LargeTextBox;
