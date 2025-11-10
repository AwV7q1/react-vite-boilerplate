import React from "react";
import Body from "@shared/components/layout/Body/index.jsx";
import { HeaderParent } from "@shared/components/layout/Header/index.jsx";
import ScreenTransition from "@shared/components/layout/ScreenTransition/index.js";
import { withLazy } from "@shared/HOC/withLazy.js";

const ListTransactionLazy = withLazy(
  () => import("@features/Transaction/page/ListTransaction/index.js"),
  {
    fallback: <div>ListTransactionLazy Loading...</div>,
  },
);

const Transaction = () => {
  return (
    <ScreenTransition>
      <HeaderParent ScreenTitle={"Transaction"} />
      <Body>
        <ListTransactionLazy />
      </Body>
    </ScreenTransition>
  );
};

export default Transaction;
