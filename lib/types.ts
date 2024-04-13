import { z } from "zod";

export const eventDetailsSchema = z.object({
  name: z.string().min(2, {
    message: "Event name cannot be empty",
  }),

  description: z.string().min(5, {
    message: "Description cannot be empty",
  }),

  registrationFees: z.string().min(1, {
    message: "Registration fees cannot be empty",
  }),

  subCategory: z.string().min(1, {
    message: "Subcategory cannot be empty",
  }),

  coordinators: z
    .string()
    .regex(/^(\w+\s\w+\s:\s\d{10})(,\s\w+\s\w+\s:\s\d{10})*$/),

  particpants: z.string().min(1, {
    message: "Participants cannot be empty",
  }),

  prizeMoney: z.string().min(1, {
    message: "Prize money cannot be empty",
  }),

  rulebook: z.any(),

  imgUrl: z.any(),
});

export type TeventDetailsSchema = z.infer<typeof eventDetailsSchema>;
