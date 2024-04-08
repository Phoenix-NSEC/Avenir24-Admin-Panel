import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const eventCategory = ({ params }: { params: { eventCategory: string } }) => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center h-screen">
      Category : {params.eventCategory}
      <Link href={`/events/addEvent`}>
        <Button>Add new event</Button>
      </Link>
    </div>
  );
};

export default eventCategory;
