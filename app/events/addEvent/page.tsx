import EventForm from "@/components/EventForm";

import { Button } from "@/components/ui/button";
import Link from "next/link";

import React from "react";

const addEvent = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex mt-4 mr-4 justify-end">
        <Link href={`/events`}>
          <Button className="mt-4 ">Back to events page</Button>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center w-1/2 h-[100vh]">
        <EventForm />
      </div>
    </div>
  );
};

export default addEvent;
