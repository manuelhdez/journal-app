import { types } from "types/types";
import { firebase, googleAuthProvider } from "../firebase/firebaseConfig";
import Swal from "sweetalert2";

import { startLoading, finishLoading } from "./ui";
import { notesLogout } from "./notes";

export const startLoginWithEmailAndPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        dispatch(login(user.uid, user.displayName));
        dispatch(finishLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(finishLoading());
        Swal.fire("Error", err.message, "error");
      });
  };
};

export const startRegisterWithEmailAndPassword = (email, password, name) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        console.log(user);
        dispatch(login(user.uid, user.displayName));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const startLoginWithGoogle = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
    dispatch(notesLogout());
  };
};

export const logout = () => {
  return {
    type: types.logout,
  };
};
