import React from "react";
import {HeaderParent} from "@shared/components/layout/Header/index.jsx";
import NavigateBottom from "@shared/components/layout/NavigateBottom/index.jsx";
import Body from "@shared/components/layout/Body/index.jsx";
import {withLazy} from "@shared/HOC/withLazy.js";

const CryptoListLazy  = withLazy(() => import("@features/Dashboard/pages/CryptoList/index.jsx"), {
  fallback: "CryptoList loading..."
})

const Dashboard = () => {

  return (
    <div>
      <HeaderParent ScreenTitle={"Dashboard"}/>
      <Body>
        <CryptoListLazy/>

      </Body>
      {/*<NavigateBottom/>*/}
    </div>
  );
};

export default Dashboard;
