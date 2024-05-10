"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { dashboardURL } from "@/lib/constants";
import Loading from "../loading";

interface UserData {
  name: string;
  college: string;
  phone: string;
}

const Participants: React.FC<{ name: string }> = ({ name }) => {
  const [userData, setUserData] = useState<UserData[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post<{ data: UserData[] }>(
          `${dashboardURL}/getCSVData`,
          { name }
        );
        console.log(response.data.data);
        const extractedData = response.data.data.map((item: any) => ({
          name: item.name || item.teamLeaderName,
          college: item.collegeName,
          phone: item.whatsappNumber,
        }));
        console.log(extractedData);
        setUserData(extractedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchData();
  }, [name]); // Include name in dependency array

  return (
    <main className="w-full max-w-5xl mx-auto py-12 px-4 md:px-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-center">{name}</h1>
      </header>
      <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
        {loading ? (
          <Loading />
        ) : (
          <Table>
            <TableHeader>
              <TableRow className="p-2">
                <TableHead>Sl No</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>College</TableHead>
                <TableHead>Phone</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="p-2">
              {/* Map over the userData array to render each row */}
              {userData.map((user, index) => (
                <TableRow key={index} className="border-b p-[20px]">
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="text-sm font-medium">{user.name}</div>
                    </div>
                  </TableCell>
                  <TableCell>{user.college}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </main>
  );
};

export default Participants;
