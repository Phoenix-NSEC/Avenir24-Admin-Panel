"use client";

import Link from "next/link";
import { useState } from "react";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import logo from "@/public/logo.png";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase.config";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathName = usePathname();
  console.log(pathName);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const router = useRouter();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        router.push("/login");
      })
      .catch((error) => {});
  };

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
        <Link
          className="hover:underline hover:underline-offset-4"
          href="#"
          onClick={handleLogout}
        >
          Logout
        </Link>
      </nav>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <MenuIcon className="h-6 w-6" />
      </button>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900/50 backdrop-blur-sm lg:hidden">
          <div className="absolute inset-0 flex flex-col items-center justify-start p-6">
            <button
              className="self-end mb-6"
              onClick={toggleMobileMenu}
              aria-label="Close mobile menu"
            >
              <XIcon className="h-6 w-6" />
            </button>
            <nav className="flex flex-col gap-6 text-lg font-medium">
              <Link
                className="hover:underline hover:underline-offset-4"
                href="#"
              >
                Home
              </Link>
              <Link
                className="hover:underline hover:underline-offset-4"
                href="#"
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
                href="#"
              >
                Add Events
              </Link>
              <Link
                className="hover:underline hover:underline-offset-4"
                href="#"
                onClick={handleLogout}
              >
                Logout
              </Link>
            </nav>
          </div>
        </div>
      )}
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

function XIcon(props: any) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function MenuIcon(props: any) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
