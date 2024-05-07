"use client";

import { auth } from "@/firebase.config";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import React from "react";

export default function Page() {
  const router = useRouter();

  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        router.push("/login");
      })
      .catch((error) => {});
  };

  return (
    <div className=" flex justify-center items-center flex-col min-h-[80vh]">
      <p className="p-4">This Account doesnot have Admin access.</p>
      <button
        onClick={logoutHandler}
        className="flex justify-center items-center gap-4 self-center border-2 bg-white text-blue-600 border-blue-600 shadow-md font-bold rounded-full px-6 py-3 uppercase  text-sm"
      >
        Logout
      </button>
    </div>
  );
}
