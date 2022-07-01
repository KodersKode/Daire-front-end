import React from "react";
import DatePicker from "react-date-picker";
import { TDateSelectorProps } from "./index.definition";
import css from "./index.module.css";

function DateSelector({ label, onChange, value }: TDateSelectorProps) {
  return (
    <div className={css.dateSelector}>
      <label htmlFor="datePicker">{label}</label>
      <DatePicker
        name="datePicker"
        onChange={onChange}
        value={value}
        className={css.datePicker}
      />
    </div>
  );
}

export default DateSelector;
