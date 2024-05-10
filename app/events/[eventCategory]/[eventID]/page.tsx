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

  return <EventsPage event={eventDetails.event} />;
};

export default page;
