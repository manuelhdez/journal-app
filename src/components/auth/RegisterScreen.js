import React from "react";
import { Link } from "react-router-dom";

export const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title">Register</h3>

      <form>
        <input
          className="auth__input"
          type="text"
          name="name"
          placeholder="Nombre"
          autoComplete="off"
        />

        <input
          className="auth__input"
          type="text"
          name="email"
          placeholder="Correo"
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="password"
          name="password2"
          placeholder="Repeat password"
          autoComplete="off"
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
