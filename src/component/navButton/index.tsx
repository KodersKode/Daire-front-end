import React from "react";
import { TNavButtonProps } from "./index.definition";
import css from "./index.module.css";

function NavButton({ name }: TNavButtonProps) {
  return (
    <div>
      <button className={css.navButton}><h3>{name}</h3></button>
    </div>
  )
}

export default NavButton;
