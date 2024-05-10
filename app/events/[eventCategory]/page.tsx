import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import axios from "axios";
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

  return (
    <div className="flex flex-col gap-8 items-center justify-center h-screen px-4 md:px-6">
      <p className="text-4xl">
        {params.eventCategory.charAt(0).toUpperCase() +
          params.eventCategory.slice(1)}
      </p>

      <Button disabled={true} className="text-sm">
        Add new event
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {eventDetails.events.map((event: any) => (
          <div key={event._id} className="mt-4 md:mt-6">
            <EventCard
              name={event.eventName}
              description={event.description}
              eventCategory={params.eventCategory}
              id={event._id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default eventCategory;
