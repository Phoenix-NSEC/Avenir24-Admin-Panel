"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TeventDetailsSchema, eventDetailsSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function Home() {
  const form = useForm<TeventDetailsSchema>({
    resolver: zodResolver(eventDetailsSchema),
    defaultValues: {
      name: "",
      description: "",
      registrationFees: "",
    },
  });

  const fileRef = form.register("rulebook");

  const onSubmit = async (data: TeventDetailsSchema) => {
    console.log(data.rulebook[0]);
    const formData = new FormData();
    const requestData = {
      name: data.name,
      description: data.description,
      registrationFees: data.registrationFees,
    };
    formData.append("rulebook", data.rulebook[0]);
    formData.append("data", JSON.stringify(requestData));
    const response = await axios.post(
      "http://localhost:8000/api/v1/users/register",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log("File uploaded successfully", response.data);
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full p-10 space-y-6"
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
          name="rulebook"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>File</FormLabel>
                <FormControl>
                  <Input type="file" placeholder="shadcn" {...fileRef} />
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
