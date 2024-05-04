/**
 * v0 by Vercel.
 * @see https://v0.dev/t/FSlFzvNpV5U
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";
import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { speakers } from "@/lib/constants";

export default function Landing() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 py-12 md:py-24 lg:py-32">
      <div className="container max-w-5xl px-4 md:px-6 text-center space-y-6">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-5xl">
            AVENIR &apos;24 - The Official Tech Fest of NSEC
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Explore the latest technology trends, network with industry leaders,
            and discover innovative solutions at our premier tech festival.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#"
          >
            View Registrations
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Avenir&apos;24 Official Website
          </Link>
        </div>
      </div>
      <div className="mt-12 md:mt-24 lg:mt-32 w-full max-w-5xl px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Keynote Speakers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 justify-items-center">
                {/* Mapping over the speakers array to generate speaker cards */}
                {speakers.map((speaker, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center space-y-2"
                  >
                    <Avatar className="bg-white rounded-full">
                      <AvatarImage alt="Speaker" src={speaker.imageUrl} />
                    </Avatar>
                    <div className="text-sm font-medium text-center">
                      {speaker.name}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                      {speaker.description}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>{" "}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 rounded-md bg-gray-100 p-2 dark:bg-gray-800">
                    <CalendarDaysIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">
                      Tech Trends 2023: The Future is Now
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      May 15, 2023 - 9:00 AM to 5:00 PM
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 rounded-md bg-gray-100 p-2 dark:bg-gray-800">
                    <UsersIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">
                      Building Inclusive Tech Communities
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      June 10, 2023 - 1:00 PM to 5:00 PM
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 rounded-md bg-gray-100 p-2 dark:bg-gray-800">
                    <RocketIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">
                      Launching Your Startup: A Founder&apos;s Guide
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      July 1, 2023 - 10:00 AM to 4:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                View More
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 items-center justify-center">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 rounded-md bg-gray-100 p-2 dark:bg-gray-800">
                    <UsersIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">
                      100+ Registrations
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Join the tech community
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 rounded-md bg-gray-100 p-2 dark:bg-gray-800">
                    <CalendarDaysIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">10+ Events</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Explore the latest tech trends
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 rounded-md bg-gray-100 p-2 dark:bg-gray-800">
                    <ClockIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">
                      3 Days of Immersive Tech Experinece
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Explore, Learn, Innovate
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="/analytics"
              >
                View More
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}

function CalendarDaysIcon(props: any) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}

function ClockIcon(props: any) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function RocketIcon(props: any) {
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
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function UsersIcon(props: any) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
