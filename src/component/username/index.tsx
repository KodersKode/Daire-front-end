import React from "react";
import { TUsernameProps } from "./index.definition";
import css from "./index.module.css";

function UserName({ user }: TUsernameProps) {
  return <button className={css.username}>Hola {user}!</button>;
}

export default UserName;
