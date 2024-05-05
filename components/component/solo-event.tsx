import Link from "next/link";

interface Coordinator {
  name: string;
  number: string;
  _id: string;
}

interface EventProps {
  _id: string;
  eventName: string;
  subCategory: string;
  description: string;
  registrationFees: string;
  teamsize: string;
  rulebook: string;
  eventPoster: string;
  date: string;
  prizePool: string;
  coordinators: Coordinator[];
  __v: number;
}
export function EventsPage({ event }: { event: EventProps }) {
  return (
    <main className="w-full max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            {event.eventName}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            {event.description}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700 dark:bg-indigo-900 dark:text-indigo-100">
            {event.subCategory.toUpperCase()}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Registration Fee
            </p>
            <p className="text-base font-medium"> ₹ {event.registrationFees}</p>
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Event Date
            </p>
            <p className="text-base font-medium">{event.date}</p>
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Prize Pool
            </p>
            <p className="text-base font-medium"> ₹ {event.prizePool}</p>
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Coordinator
            </p>
            {event.coordinators.map((coordinator, index) => (
              <p key={index} className="text-base font-medium">
                {coordinator.name}:{" "}
                <span className="text-gray-500 dark:text-gray-400">
                  {coordinator.number}
                </span>
              </p>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-bold mb-2">Resources</h2>
          <div className="flex items-center space-x-2">
            <Link
              className="flex items-center text-base font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
              href={event.rulebook}
              target="blank"
            >
              <FileIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="ml-1">Rulebook</span>
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <Link
              className="flex items-center text-base font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
              href={event.eventPoster}
              target="blank"
            >
              <ImageIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="ml-1">Event Poster</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

function BookIcon(props: any) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}
function FileIcon(props: any) {
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
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  );
}

function ImageIcon(props: any) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}
