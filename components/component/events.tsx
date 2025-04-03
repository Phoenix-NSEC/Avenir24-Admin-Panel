/**
 * v0 by Vercel.
 * @see https://v0.dev/t/S1SVfJY62ug
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";
import { auth } from "@/firebase.config";
import { eventData } from "@/lib/constants";
import { onAuthStateChanged } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function Events() {
  const router = useRouter();

  useEffect(() => {
    const allowedEmails = [
      "dasguptasebanti2003@gmail.com",
      "kundusubhajit73@gmail.com",
    ];
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        if (!allowedEmails.includes(userAuth.email as string)) {
          router.push("/denied");
        } else {
          router.push("/events");
        }
      } else {
        router.push("/login");
      }
    });
  }, [router]);

  return (
    <main className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="mb-8 text-3xl font-bold">Events</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {eventData.map((event, index) => (
          <div
            key={index}
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950"
          >
            <h2 className="mb-4 text-xl font-semibold">{event.eventName}</h2>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
              {event.eventDescription}
            </p>
            <div className="flex items-center justify-between">
              <Link
                className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href={`/events/${event.eventName.toLowerCase()}`}
              >
                View Events
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

function ArrowRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
