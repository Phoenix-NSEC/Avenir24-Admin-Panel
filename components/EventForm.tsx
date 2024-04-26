"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
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
import { Toaster } from "./ui/toaster";
import { eventURL } from "@/lib/constants";

export default function Home() {
  const { toast } = useToast();
  const form = useForm<TeventDetailsSchema>({
    resolver: zodResolver(eventDetailsSchema),
    defaultValues: {
      name: "",
      description: "",
      registrationFees: "",
      subCategory: "",
      coordinators: "",
      date: "",
    },
  });

  const fileRef = form.register("rulebook");

  const onSubmit = async (data: TeventDetailsSchema) => {
    // const formData = new FormData();
    // const requestData = {
    //   name: data.name,
    //   description: data.description,
    //   registrationFees: data.registrationFees,
    //   subCategory: data.subCategory,
    //   date: data.date,
    // };
    // console.log(requestData);
    // formData.append("rulebook", data.rulebook[0]);
    // formData.append("data", JSON.stringify(requestData));
    // const response = await axios.post(`${eventURL}/add-events`, formData, {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // });

    // console.log("File uploaded successfully", response.data);

    // form.reset();
    console.log(data);
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

        {/* <FormField
          control={form.control}
          name="coordinators"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg text-white">Coordinators</FormLabel>
              <FormControl>
                <Input
                  placeholder="Eg:John Doe:98xxx, Alice Doe:78xxx"
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-white">
                Enter the coordinators name and contact number
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}

        {/* <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg text-white">Date</FormLabel>
              <FormControl>
                <Input
                  placeholder="Prelims Date : 2023-09-21, Finals Date : 2023-09-25"
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-white">
                Enter the prelims and finals date for the event
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}

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
        {/* <Toaster /> */}
        {/* <div className="text-white">
          Hi{form.formState.isSubmitSuccessful ? <Toaster /> : "fasle"}
        </div> */}
      </form>
    </Form>
  );
}
