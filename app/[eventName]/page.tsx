import Partcipants from "@/components/component/partcipants";
import React from "react";

const page = ({ params }: { params: { eventName: string } }) => {
  function handleURL(url: string): string {
    // Decode the URL component
    const decodedURL = decodeURIComponent(url);
    if (decodedURL === "eFootball (PES Mobile)") {
      return "eFootball (PES Mobile)";
    }
    // Remove text within parentheses from the decoded URL
    const cleanedURL = decodedURL.replace(/\([^()]*\)/g, "");

    return cleanedURL;
  }
  const eventName = handleURL(params.eventName);
  console.log("from component", eventName);
  return (
    <div>
      <Partcipants name={eventName} />
    </div>
  );
};

export default page;
