import React from "react";
import Body from "@shared/components/layout/Body/index.jsx";
import { HeaderParent } from "@shared/components/layout/Header/index.jsx";
import ScreenTransition from "@shared/components/layout/ScreenTransition/index.js";

const Dashboard = () => {
  return (
    <ScreenTransition>
      <HeaderParent ScreenTitle={"Dashboard"} />
      <Body>...dashboard</Body>
    </ScreenTransition>
  );
};

export default Dashboard;
