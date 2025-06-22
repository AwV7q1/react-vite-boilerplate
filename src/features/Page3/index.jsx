import React from 'react';
import {withLazy} from "@shared/HOC/withLazy.js";

const CardLazy = withLazy(() =>
    import ("@shared/HOC/brokenPage"),
  {
    fallback: <div>bbbbbbbbb....</div>,
    retryCount: 4
  }
)

const Page3 = () => {
  return (
    <div>
      Page3

      <hr/>
      <CardLazy/>
    </div>
  );
};

export default Page3;