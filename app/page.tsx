import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center pt-8  h-screen">
      Home page
      <Link href={"/events"}>
        <Button>Events</Button>
      </Link>
    </div>
  );
}
