import React from "react";
import { TNavButtonProps } from "./index.definition";
import css from "./index.module.css";

function NavButton({ name }: TNavButtonProps) {
  return (
    <div>
      <button className={css.navButton}>{name}</button>
    </div>
  );
}

export default NavButton;
