import React from "react";
import { Button } from "./ui/button";

interface EventCardProps {
  name: string;
  description: string;
}

const EventCard = ({ name, description }: EventCardProps) => {
  return (
    <div className="max-w-sm h-[200px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <div className="flex gap-2">
        <Button variant={"default"}>Edit</Button>
        <Button variant={"destructive"}>Delete</Button>
      </div>
    </div>
  );
};

export default EventCard;
