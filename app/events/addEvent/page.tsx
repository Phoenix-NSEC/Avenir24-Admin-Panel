"use client";

import { ProfileForm } from "@/components/testForm";
import { Button } from "@/components/ui/button";
import { auth } from "@/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const AddEvent = () => {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        if (userAuth.email != "mail.phoenixnsec@gmail.com")
          router.push("/denied");
        else router.push("/events/addEvent");
      } else {
        router.push("/login");
      }
    });
  }, [router]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex mt-4 mr-4 justify-end">
        <Link href={`/events`}>
          <Button className="mt-4 ">Back to events page</Button>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center w-1/2 h-[100vh]">
        <ProfileForm />
      </div>
    </div>
  );
};

export default AddEvent;
