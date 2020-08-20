import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useForm } from "hooks/useForm";
import {
  startLoginWithEmailAndPassword,
  startLoginWithGoogle,
} from "actions/auth";

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const { ui } = useSelector((state) => state);

  const [formValues, handleInputChange] = useForm({
    email: "hernandez@treiteksolutions.com",
    password: "1234567",
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginWithEmailAndPassword(email, password));
  };

  const handleLoginWithGoogle = () => {
    dispatch(startLoginWithGoogle());
  };

  return (
    <>
      <h3 className="auth__title">Login</h3>

      <form onSubmit={handleLogin}>
        <input
          className="auth__input"
          type="text"
          name="email"
          placeholder="Correo"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
        {JSON.stringify(ui.loading)}
        <button className="btn btn-primary" type="submit" disabled={ui.loading}>
          Login
        </button>

        <div className="auth__social-networks">
          <p>Social Login</p>
          <div className="google-btn" onClick={handleLoginWithGoogle}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>

          <Link to="/auth/register" className="link">
            Register
          </Link>
        </div>
      </form>
    </>
  );
};
