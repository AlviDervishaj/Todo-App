import React from "react";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import Google from "../../assets/Google.png";
import signInWithGoogleStyles from "./SignInWithGoogle.module.css";
export const SignInWithGoogle = ({ isOnNavigation }) => {
  const auth = getAuth();
  auth.useDeviceLanguage();
  const setPersistenceAndLogIn = async () => {
    try {
      // set persistence
      await setPersistence(auth, browserLocalPersistence);
      // log in with Google provider
      await signInWithPopup(auth, new GoogleAuthProvider());
    } catch (error) {
      if (
        error.code === "auth/cancelled-popup-request" ||
        error.code === "auth/popup-closed-by-user"
      ) {
        return;
      }
      console.log({ error });
    }
  };
  return (
    <button
      className={signInWithGoogleStyles.logInWithGoogle}
      onClick={() => setPersistenceAndLogIn()}
    >
      <img src={Google} alt="Google" />
      <p>Sign In With Google</p>
    </button>
  );
};