import React, {useRef} from 'react';
import VersionInfo from "@shared/components/VersionInfo/index.jsx";
import Button from "@shared/components/ui/Button/index.jsx";
import {ToastContainer} from 'react-toastify';
import useSignIn from "@features/auth/hooks/auth/useSignIn.jsx";
import styles from './Login.module.scss';

const Login = () => {
  const user_nameRef = useRef(null);
  const passwordRef = useRef(null);
  const {mutateLogin, pendingLogin, errorMessage} = useSignIn()


  const onSubmit = (e) => {
    e.preventDefault();
    const user_name = user_nameRef.current?.value ?? "";
    const password = passwordRef.current?.value ?? "";

    console.log(user_name, password);
    mutateLogin({user_name, password});
  }

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.logo}>
          FAST!!!
        </div>
        <ToastContainer position="top-center"/>
        {
          errorMessage && <div>
            <p className={styles.errorMsg}>{errorMessage}</p>
          </div>
        }
        <form onSubmit={onSubmit} className={styles.formWrapper}>
          <div className={styles.formGroup}>
            <label htmlFor="username" id="username-label" className={styles.labelInput}>
              Username:
            </label>
            <input
              className={styles.inputStyle}
              type="text"
              id="username"
              placeholder="Username"
              ref={user_nameRef}
              // autoComplete="current-username"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password" id="password-label" className={styles.labelInput}>
              Password:
            </label>
            <input
              className={styles.inputStyle}
              type="password"
              id="password"
              placeholder="Password"
              ref={passwordRef}
              autoComplete="current-password"
            />
          </div>
          <Button
            label={pendingLogin ? "Logging in..." : "Sign in"}
            variant="primary"
            disabled={pendingLogin}
            type="submit"
          />
        </form>
      </div>

      <VersionInfo/>
    </div>
  );
};

export default Login;