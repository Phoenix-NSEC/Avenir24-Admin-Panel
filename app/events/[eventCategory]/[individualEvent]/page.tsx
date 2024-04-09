import React from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Link2Icon } from "lucide-react";

async function getEventDetails(individualEvent: string, eventCategory: string) {
  const response = await axios.get(
    `http://localhost:4000/api/v1/events/${eventCategory}/${individualEvent}`
  );
  return response.data;
}

function capitalizeFirstLetter(str: string) {
  return str.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });
}

const page = async ({
  params,
}: {
  params: { individualEvent: string; eventCategory: string };
}) => {
  const encodedEventName = params.individualEvent;
  const decodedEventName = decodeURIComponent(encodedEventName);
  const eventDetails = await getEventDetails(
    decodedEventName,
    params.eventCategory
  );
  const rulebookURL = eventDetails.event.rulebook;
  const eventName = capitalizeFirstLetter(eventDetails.eventName);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p>Event name : {eventName}</p>
      <p>Description : {eventDetails.event.description}</p>
      <p>Event Category : {eventDetails.event.subCategory}</p>
      <p>Registration Fees : {eventDetails.event.registrationFees}</p>
      <Link href={rulebookURL} target="blank">
        <Button className="mt-4">Rulebook</Button>
      </Link>
    </div>
  );
};

export default page;
