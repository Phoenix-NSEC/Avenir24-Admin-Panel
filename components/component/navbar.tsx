import Link from "next/link";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import logo from "@/public/logo.png";

import Image from "next/image";
export function Navbar() {
  return (
    <header className="flex h-16 w-full items-center justify-between px-4 md:px-6">
      <Link className="flex items-center gap-2" href="/">
        <Image src={logo} alt="Avenir" width={50} height={50} />
        <span className="text-lg font-bold">Avenir</span>
      </Link>
      <nav className="hidden gap-8 text-sm font-medium md:flex">
        <Link className="hover:underline hover:underline-offset-4" href="/">
          Home
        </Link>
        <Link
          className="hover:underline hover:underline-offset-4"
          href="/events"
        >
          Events
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1 hover:underline hover:underline-offset-4">
            Dashboard
            <ChevronDownIcon className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>
              <Link href="/dashboard/solo">Solo</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/dashboard/group">Group</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link
          className="hover:underline hover:underline-offset-4"
          href="/events/addEvent"
        >
          Add Events
        </Link>
      </nav>
    </header>
  );
}

function ChevronDownIcon(props: any) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function MountainIcon(props: any) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
