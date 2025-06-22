import React from "react";
import {HeaderParent} from "@shared/components/layout/Header/index.jsx";
import Body from "@shared/components/layout/Body/index.jsx";

const Dashboard = () => {
  return (
    <div>
      <HeaderParent ScreenTitle={"Dashboard"}/>
      <Body>
        ...dashboard
      </Body>
    </div>
  );
};

export default Dashboard;
