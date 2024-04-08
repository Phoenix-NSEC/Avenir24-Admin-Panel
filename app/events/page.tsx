import { Button } from "@/components/ui/button";
import { events } from "@/lib/constants";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-3xl pt-10 font-sans ">
        Events Page
      </div>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="grid grid-cols-2 gap-5">
          {events.map((eventName, index) => (
            <Link href={`/events/${eventName}`} key={index}>
              <Button className="w-[130px] text-center" key={index}>
                {" "}
                {eventName}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
