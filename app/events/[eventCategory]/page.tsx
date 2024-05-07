import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import axios from "axios";
// import EventCard from "@/components/EventCard";
import dynamic from "next/dynamic";
import { eventURL } from "@/lib/constants";

const EventCard = dynamic(() => import("@/components/EventCard"), {
  ssr: false,
});

async function getEvents(eventCategory: string) {
  const response = await axios.get(`${eventURL}/${eventCategory}`);
  return response.data;
}

const eventCategory = async ({
  params,
}: {
  params: { eventCategory: string };
}) => {
  const eventDetails = await getEvents(params.eventCategory.toLowerCase());
  // console.log(eventDetails);
  return (
    <div className="flex flex-col gap-8 items-center justify-center h-screen">
      <p className="text-4xl">
        {params.eventCategory.charAt(0).toUpperCase() +
          params.eventCategory.slice(1)}
      </p>

      {/* <Link href={`/events/addEvent`}> */}
      <Button disabled={true} className="">
        Add new event
      </Button>
      {/* </Link> */}
      <div className="grid grid-cols-2 gap-4">
        {eventDetails.events.map((event: any) => {
          return (
            <div key={event._id} className="mt-6">
              {/* <Link href={`/events/${params.eventCategory}/${event.eventName}`}> */}
              <EventCard
                name={event.eventName}
                description={event.description}
                eventCategory={params.eventCategory}
                id={event._id}
              />
              {/* </Link> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default eventCategory;
