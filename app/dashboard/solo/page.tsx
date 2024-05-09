"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { UserDetails } from "@/lib/types";
import Image from "next/image";
import { dashboardURL, verificationURL } from "@/lib/constants";
import Loading from "@/components/loading";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase.config";

const Component = () => {
  const [userData, setUserData] = useState<UserDetails[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const handleClick = async (
    id: string,
    userEmail: string,
    participantName: string,
    eventName: string,
    index: number
  ) => {
    const updatedData = userData.map((user, i) => {
      if (i === index) {
        return { ...user, isVerified: !user.isVerified };
      }
      return user;
    });

    setUserData(updatedData);
    console.log(userEmail, id, participantName, eventName, index);
    try {
      const response = await axios.post(`${verificationURL}/solo`, {
        email: userEmail,
        userId: id,
        participantName: participantName,
        eventName: eventName,
      });
      console.log("Verification request sent successfully:", response.data);
      // Handle success response here
    } catch (error) {
      console.error("Error sending verification request:", error);
      // Handle error here
    }
  };

  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        if (userAuth.email != "abhinilnath10@gmail.com") router.push("/denied");
        else router.push("/dashboard/solo");
      } else {
        router.push("/login");
      }
    });
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${dashboardURL}/single-event-details`
        );
        console.log(response.data.event);
        setUserData(response.data.event);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen">
        <div className="flex flex-col">
          <div className="py-2">
            <div className="flex justify-between mb-2">
              <h1 className="text-2xl font-semibold text-white mt-8">
                Solo Event Team Leader list
              </h1>
              <Button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                  />
                </svg>
                CSV
              </Button>
            </div>
            <p className="text-sm text-gray-300">
              View details of registered participants
            </p>
            <div className="mt-4 mb-6">
              <Input className="rounded-full" placeholder="Search by name" />
            </div>
          </div>
          {loading ? (
            <Loading />
          ) : (
            <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">ID</TableHead>
                    <TableHead className="w-[150px]">Full Name</TableHead>
                    <TableHead className="w-[150px]">Event Name</TableHead>
                    <TableHead className="w-[150px]">Email ID</TableHead>
                    <TableHead className="w-[100px]">Status</TableHead>
                    <TableHead className="w-[100px]">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {userData.map((user: UserDetails, index) => (
                    <TableRow key={user._id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.event}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <Badge
                          onClick={() => {
                            handleClick(
                              user._id,
                              user.email,
                              user.name,
                              user.event,
                              index
                            );
                          }}
                          className="cursor-pointer"
                          variant={user.isVerified ? "default" : "destructive"}
                        >
                          {user.isVerified ? "Verified" : "Verify"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Link href={user.payment} target="_blank">
                          <Button variant="outline">Receipt</Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Component;
