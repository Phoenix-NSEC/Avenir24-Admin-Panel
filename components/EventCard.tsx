"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Download, Info, Pencil, Trash2, UsersIcon } from "lucide-react";
import Link from "next/link";
import axios from "axios";
import { dashboardURL, eventURL } from "@/lib/constants";
import { set } from "firebase/database";

interface EventCardProps {
  name: string;
  description: string;
  eventCategory: string;
  id: string;
}

const EventCard = ({
  name,
  description,
  eventCategory,
  id,
}: EventCardProps) => {
  function shortenDescription(description: string, maxLength: number) {
    // Check if the description length is greater than maxLength
    if (description.length > maxLength) {
      // Truncate the description to maxLength characters and append "..."
      return description.slice(0, maxLength) + "...";
    } else {
      // If the description is already shorter than maxLength, return it as is
      return description;
    }
  }
  function handleURL(url: string): string {
    const decodedURL = decodeURIComponent(url);

    if (decodedURL === "eFootball (PES Mobile)") {
      return "eFootball (PES Mobile)";
    }
    const cleanedURL = decodedURL.replace(/\([^()]*\)/g, "");

    return cleanedURL;
  }
  const handleDownloadClick = async () => {
    try {
      const eventname = handleURL(name);
      console.log("name from csv component", eventname);
      const response = await axios.post(`${dashboardURL}/getCSVData`, {
        name: eventname,
      });
      let csvData = response.data.data;
      console.log(csvData);

      // Check if 'members' field exists in the data
      if (csvData.some((item) => item.members)) {
        // Extract member names and infos from 'members' array
        csvData = csvData.map((item) => {
          const { members, ...rest } = item;
          const memberInfo = members.map((member, index) => ({
            [`member${index + 1}_name`]: member.name,
            [`member${index + 1}_info`]: member.info,
          }));
          return { ...rest, ...Object.assign({}, ...memberInfo) };
        });
      }

      // Remove unwanted fields (_id, payment, __v) from the data
      csvData = csvData.map((item) => {
        const { _id, payment, __v, isVerified, ...rest } = item;
        return rest;
      });

      const csvContent = convertToCSV(csvData);
      downloadCSV(csvContent, "event_data.csv");
    } catch (error) {
      console.error("Error downloading CSV:", error);
    }
  };

  const convertToCSV = (data: any[]) => {
    const headers = Object.keys(data[0]).join(",");
    const csvRows = data.map((row) => Object.values(row).join(","));
    return `${headers}\n${csvRows.join("\n")}`;
  };

  const downloadCSV = (content: string, filename: string) => {
    const blob = new Blob([content], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    link.parentNode?.removeChild(link);
  };

  const handleDeleteClick = async (id: string) => {
    console.log(id);
    try {
      const response = await axios.delete(`${eventURL}/delete-event/${id}`);
      console.log(response);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-sm h-[200px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {shortenDescription(description, 100)}
      </p>
      <div className="flex gap-2">
        <Button variant={"default"} onClick={handleDownloadClick}>
          <Download size={16} />
        </Button>
        <Button
          disabled={true}
          onClick={() => {
            handleDeleteClick(id);
          }}
          variant={"destructive"}
        >
          <Trash2 size={16} />
        </Button>
        <Link href={`/events/${eventCategory}/${id}`}>
          <Button>
            <Info />
          </Button>
        </Link>
        <Link href={`/${name}`}>
          <Button>
            <UsersIcon />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
