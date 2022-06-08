import React from "react";
import { TUsernameProps } from "./index.definition";
import css from "./index.module.css";

function UserName({ user }: TUsernameProps) {
  return (
  <div className={css.container}>
      <button className={css.username}><h4>Hola {user}!</h4></button>

      </div>
  )
}
export default UserName;
