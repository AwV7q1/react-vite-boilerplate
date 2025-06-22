import React, {Fragment} from 'react';
import styles from './LayoutAuth.module.scss'
import NetworkStatusNotifier from "@shared/components/feedback/NetworkStatusNotifier/index.jsx";

// import {Toast} from "@components/Toast/index.tsx";

const LayoutAuth = ({children}) => {
  return (
    <Fragment>
      <div className={styles.background}>
        <div className={styles.wrapper}>
          <NetworkStatusNotifier/>
          {/*<Toast/>*/}
          {children}
        </div>
      </div>
    </Fragment>
  );
};

export default LayoutAuth;