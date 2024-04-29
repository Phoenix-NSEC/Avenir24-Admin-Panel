"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TeventDetailsSchema, eventDetailsSchema } from "@/lib/types";
import { eventURL } from "@/lib/constants";
import { useState } from "react";
import { Plus, Trash } from "lucide-react";
import { useToast } from "./ui/use-toast";

export function ProfileForm() {
  const { toast } = useToast();
  const form = useForm<TeventDetailsSchema>({
    resolver: zodResolver(eventDetailsSchema),
    defaultValues: {
      name: "",
      description: "",
      registrationFees: "",
      subCategory: "",
      coordinatorName: "",
      coordinatorPhone: "",
      prizePool: "",
      date: "",
      teamsize: "",
    },
  });

  const [coordinators, setCoordinators] = useState(
    [] as { name: string; number: string }[]
  );
  const fileRef = form.register("rulebook");
  const fileRef2 = form.register("imgUrl");

  async function onSubmit(data: TeventDetailsSchema) {
    const formData = new FormData();
    const requestData = {
      name: data.name,
      description: data.description,
      registrationFees: data.registrationFees,
      subCategory: data.subCategory,
      coordinators: coordinators,
      prizePool: data.prizePool,
      date: data.date,
      teamsize: data.teamsize,
    };
    console.log(requestData);
    console.log(coordinators);
    console.log(data.imgUrl[0]);
    console.log(data.rulebook[0]);
    formData.append("rulebook", data.rulebook[0]);
    formData.append("imgUrl", data.imgUrl[0]);
    formData.append("data", JSON.stringify(requestData));
    const response = await axios.post(`${eventURL}/add-events`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("File uploaded successfully", response.data);

    if (response.status === 200) {
      alert("Event added successfully");
      form.reset();
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[650px] p-10 mt-[700px] space-y-10"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg text-white">Event Name</FormLabel>
              <FormControl>
                <Input placeholder="Eg: Hackerthon" {...field} />
              </FormControl>
              <FormDescription className="text-white">
                Enter the name of the event
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg text-white">Description</FormLabel>
              <FormControl>
                <Input placeholder="Description" {...field} />
              </FormControl>
              <FormDescription className="text-white">
                Enter the description for the event
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subCategory"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg text-white">Sub Category</FormLabel>
              <FormControl>
                <Input placeholder="Eg: Cybernix" {...field} />
              </FormControl>
              <FormDescription className="text-white">
                Enter the wing under which the event is
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="registrationFees"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg text-white">
                Registration Fees
              </FormLabel>
              <FormControl>
                <Input placeholder="Eg:50" {...field} />
              </FormControl>
              <FormDescription className="text-white">
                Enter the registration fees for the event
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="teamsize"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg text-white">Team Size</FormLabel>
              <FormControl>
                <Input placeholder="Eg:5" {...field} />
              </FormControl>
              <FormDescription className="text-white">
                Enter the team size for the event
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg text-white">Date</FormLabel>
              <FormControl>
                <Input placeholder="3rd May 2024" {...field} />
              </FormControl>
              <FormDescription className="text-white">
                Enter the date for the event.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="prizePool"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg text-white">Prize pool</FormLabel>
              <FormControl>
                <Input placeholder="6000" {...field} />
              </FormControl>
              <FormDescription className="text-white">
                Enter the prize pool for the event
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-3 space-x-4 w-full">
          <FormField
            control={form.control}
            name="coordinatorName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg text-white">
                  Coordinator Name
                </FormLabel>
                <FormControl>
                  <Input placeholder="Eg:John Doe" {...field} />
                </FormControl>
                <FormDescription className="text-white">
                  Enter the name of the coordinator
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="coordinatorPhone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg text-white">
                  Coordinator Phone
                </FormLabel>
                <FormControl>
                  <Input placeholder="Eg:98XXXXXX90" {...field} />
                </FormControl>
                <FormDescription className="text-white">
                  Enter the contact number of the coordinator
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Plus
            type="button"
            className="cursor-pointer"
            onClick={() => {
              const coordinatorName = form.watch("coordinatorName");
              const coordinatorPhone = form.watch("coordinatorPhone");

              setCoordinators([
                ...coordinators,
                { name: coordinatorName, number: coordinatorPhone },
              ]);

              form.setValue("coordinatorName", "");
              form.setValue("coordinatorPhone", "");
            }}
          />
        </div>
        <div className="flex items-center flex-wrap gap-5 my-5 w-full">
          {coordinators?.map((ele, index) => (
            <div
              key={index}
              className="text-white bg-[#27272A] w-fit px-5 py-2 rounded-md relative"
            >
              <span>
                {ele.name}, {ele.number}
              </span>
              <Trash
                color="red"
                className="absolute -top-2 -right-2 cursor-pointer"
                size={18}
                onClick={() => {
                  setCoordinators((prev) => prev.filter((_, i) => i !== index));
                }}
              />
            </div>
          ))}
        </div>

        <FormField
          control={form.control}
          name="rulebook"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-lg text-white">Rulebook</FormLabel>
                <FormControl>
                  <Input type="file" placeholder="shadcn" {...fileRef} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="imgUrl"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-lg text-white">
                  Event Poster
                </FormLabel>
                <FormControl>
                  <Input type="file" placeholder="shadcn" {...fileRef2} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <Button disabled={form.formState.isSubmitting} type="submit">
          {form.formState.isSubmitting ? "Submitting" : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
