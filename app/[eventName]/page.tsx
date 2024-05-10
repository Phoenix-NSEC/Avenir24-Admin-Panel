import Partcipants from "@/components/component/partcipants";
import React from "react";

const page = ({ params }: { params: { eventName: string } }) => {
  return (
    <div>
      <Partcipants name={decodeURIComponent(params.eventName)} />
    </div>
  );
};

export default page;
