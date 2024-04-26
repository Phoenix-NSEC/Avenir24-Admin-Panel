"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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

export function ProfileForm() {
  // 1. Define your form.
  const form = useForm<TeventDetailsSchema>({
    resolver: zodResolver(eventDetailsSchema),
    defaultValues: {
      name: "",
      description: "",
      registrationFees: "", 
      subCategory: "",

    },
  });
  const fileRef = form.register("rulebook");
  // 2. Define a submit handler.
  function onSubmit(data: TeventDetailsSchema) {
    const formData = new FormData();
    const requestData = {
      name: data.name,
      description: data.description,
      registrationFees: data.registrationFees,
      subCategory: data.subCategory,
    };
    console.log(requestData);
    formData.append("rulebook", data.rulebook[0]);
    formData.append("data", JSON.stringify(requestData));
    console.log(formData)
  }

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
