import React from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { eventURL } from "@/lib/constants";
import { FileText } from "lucide-react";
import { EventsPage } from "@/components/component/solo-event";

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

  return (
    // <div className="flex flex-col gap-2 justify-center items-center h-screen">
    //   <p>
    //     <b className="text-green-400">Event Name: </b>{" "}
    //     {eventDetails.event.eventName}
    //   </p>
    //   <div className="w-1/2">
    //     <p>
    //       <b className="text-green-400">Description </b> :{" "}
    //       {eventDetails.event.description}
    //     </p>
    //   </div>

    //   <p>
    //     <b className="text-green-400">Event Category :</b>{" "}
    //     {eventDetails.event.subCategory}
    //   </p>
    //   {/* <p>Team Size : {eventDetails.event.teamSize}</p> */}
    //   <p>
    //     <b className="text-green-400">Registration Fees :</b>{" "}
    //     {eventDetails.event.registrationFees}
    //   </p>
    //   <p>
    //     <b className="text-green-400">Date :</b> {eventDetails.event.date}
    //   </p>
    //   <p>
    //     <b className="text-green-400">Prize pool :</b>{" "}
    //     {eventDetails.event.prizePool}
    //   </p>
    //   <Link href={rulebookURL} target="blank">
    //     <div className="flex gap-1">
    //       <p>
    //         <b className="text-green-400">Rulebook</b>
    //       </p>
    //       <FileText />
    //     </div>
    //   </Link>
    //   <Link href={eventPosterURL} target="blank">
    //     <div className="flex gap-1">
    //       <p>
    //         <b className="text-green-400">Event Poster</b>
    //       </p>
    //       <FileText />
    //     </div>
    //   </Link>
    //   {eventDetails.event.coordinators.map((coordinator: any, index: any) => (
    //     <div key={index}>
    //       <p>
    //         <b className="text-green-400">Coordinator Name:</b>{" "}
    //         {coordinator.name}
    //       </p>
    //       <p>
    //         <b className="text-green-400">Coordinator Phone:</b>{" "}
    //         {coordinator.number}
    //       </p>
    //     </div>
    //   ))}
    // </div>
    <EventsPage event={eventDetails.event} />
  );
};

export default page;
