import React from 'react';
import {HeaderParent} from "@shared/components/layout/Header/index.jsx";
import Body from "@shared/components/layout/Body/index.jsx";

import {withLazy} from "@shared/HOC/withLazy.js";

const ListTransactionLazy = withLazy(() => import("@features/Transaction/page/ListTransaction/index.js"), {
  fallback: <div>ListTransactionLazy Loading...</div>,
})

const Transaction = () => {
  return (
    <div>
      <HeaderParent ScreenTitle={"Transaction"}/>
      <Body>
        <ListTransactionLazy/>
      </Body>
    </div>
  );
};

export default Transaction;