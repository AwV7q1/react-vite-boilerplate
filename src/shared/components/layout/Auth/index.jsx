import React from "react";
import NetworkStatusNotifier from "@shared/components/feedback/NetworkStatusNotifier/index.jsx";
import PageWrapper from "@shared/components/layout/PageWrapper/index.js";

import styles from "./LayoutAuth.module.scss";

const LayoutAuth = ({ children }) => {
  return (
    <PageWrapper>
      <div className={styles.authContainer}>
        <NetworkStatusNotifier />
        {children}
      </div>
    </PageWrapper>
  );
};

export default LayoutAuth;