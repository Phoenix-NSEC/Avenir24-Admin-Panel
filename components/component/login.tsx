"use client";

import {
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from "firebase/auth";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { auth, provider } from "../../firebase.config";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();

  const loginHandler = () => {
    signInWithPopup(auth, provider)
      .then((result: UserCredential) => {
        console.log(result);
        if (result.user.email != "mail.phoenixnsec@gmail.com")
          router.push("/denied");
        else router.push("/");
      })
      .catch((error) => {
        alert("Login Failed");
      });
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-blue-700">
      <button
        className="flex gap-4 self-center border-2 bg-white text-blue-600 border-blue-600 shadow-md font-bold rounded-full px-6 py-3 uppercase  text-sm"
        onClick={loginHandler}
      >
        <FcGoogle size={20} />
        Sign In With Google
      </button>
    </div>
  );
}

export default Login;
