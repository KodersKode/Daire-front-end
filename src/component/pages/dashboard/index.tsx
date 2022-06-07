import React from "react";
import NavButton from "../../navButton";
import UserName from "../../username";
import Logo from "../../logo";
// import { TDashboardProps } from "./index.definition";

function Dashboard() {
  return <div>
    <p>"Dashboard"</p>
    <NavButton name='Neuva sesion'/>
    <UserName user='Eva' />
    <Logo />
    </div>;
}

export default Dashboard;
