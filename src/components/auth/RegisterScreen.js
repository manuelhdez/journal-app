import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";

import { useForm } from "hooks/useForm";
import { uiSetError, uiRemoveError } from "actions/ui";
import { startRegisterWithEmailAndPassword } from "actions/auth";

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { ui } = useSelector((state) => state);

  const [formValues, handleInputChange] = useForm({
    name: "Manuel",
    email: "hernandez@treiteksolutions.com",
    password: "123456",
    password2: "123456",
  });
  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegisterWithEmailAndPassword(email, password, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      console.log("jahjaskjahskj");
      dispatch(uiSetError("El nombre no es correcto"));
      return false;
    }
    if (!validator.isEmail(email)) {
      dispatch(uiSetError("El email no es correcto"));
      return false;
    }
    if (password !== password2 || password.trim().length < 5) {
      dispatch(uiSetError("Error en los passwords"));
      return false;
    }
    dispatch(uiRemoveError());
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>

      <form onSubmit={handleRegister}>
        {ui.msgError && <div className="auth__alert-error">{ui.msgError}</div>}

        <input
          className="auth__input"
          type="text"
          name="name"
          placeholder="Nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />

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
        <input
          className="auth__input"
          type="password"
          name="password2"
          placeholder="Repeat password"
          autoComplete="off"
          value={password2}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary" type="submit" disabled={false}>
          Register
        </button>
        <hr />

        <Link to="/auth/login" className="link">
          Login
        </Link>
      </form>
    </>
  );
};
