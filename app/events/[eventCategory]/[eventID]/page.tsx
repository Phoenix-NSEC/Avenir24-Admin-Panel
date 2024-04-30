import React from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { eventURL } from "@/lib/constants";
import { FileText } from "lucide-react";

async function getEventDetails(id: string, eventCategory: string) {
  const response = await axios.get(`${eventURL}/${eventCategory}/${id}`);
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
  params: { eventID: string; eventCategory: string };
}) => {
  const eventDetails = await getEventDetails(
    params.eventID,
    params.eventCategory
  );
  const rulebookURL = eventDetails.event.rulebook;
  const eventPosterURL = eventDetails.event.eventPoster;
  console.log(eventDetails.event.coordinators);

  return (
    <div className="flex flex-col gap-2 justify-center items-center h-screen">
      <p>Event name : {eventDetails.event.eventName}</p>
      <p>Description : {eventDetails.event.description}</p>
      <p>Event Category : {eventDetails.event.subCategory}</p>
      {/* <p>Team Size : {eventDetails.event.teamSize}</p> */}
      <p>Registration Fees : {eventDetails.event.registrationFees}</p>
      <p>Date : {eventDetails.event.date}</p>
      <p>Prize Pool : {eventDetails.event.prizePool}</p>
      <Link href={rulebookURL} target="blank">
        <div className="flex gap-1">
          <p>Rulebook</p>
          <FileText />
        </div>
      </Link>
      <Link href={eventPosterURL} target="blank">
        <div className="flex gap-1">
          <p>Event Poster</p>
          <FileText />
        </div>
      </Link>
      {eventDetails.event.coordinators.map((coordinator: any, index: any) => (
        <div key={index}>
          <p>Coordinator Name: {coordinator.name}</p>
          <p>Coordinator Phone: {coordinator.number}</p>
        </div>
      ))}
    </div>
  );
};

export default page;
