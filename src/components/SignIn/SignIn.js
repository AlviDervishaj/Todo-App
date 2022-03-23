import React from "react";
import { SignInWithGoogle } from "../SignInWithGoogle/SignInWithGoogle";
import signInStyles from "./SignIn.module.css";
export const SignIn = () => {
  return (
    <main className={signInStyles.signInGoogle}>
      <h2 className={signInStyles.homeHeading}>
        Your todo website. Better. Faster. Cleaner.
      </h2>
      <SignInWithGoogle />
    </main>
  );
};