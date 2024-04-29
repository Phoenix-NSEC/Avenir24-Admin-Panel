import { date, z } from "zod";

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

  coordinatorName: z.string(),

  coordinatorPhone: z.string(),

  teamsize: z.string().min(1, {
    message: "Team size cannot be empty",
  }),
  prizePool: z.string().min(1, {
    message: "Prize pool cannot be empty",
  }),

  date: z.string().min(1, {
    message: "Date cannot be empty",
  }),

  rulebook: z.any(),

  imgUrl: z.any(),
});

export type TeventDetailsSchema = z.infer<typeof eventDetailsSchema>;

export interface TeamMember {
  name: string;
  info: string;
  _id: string;
}

export interface Team {
  _id: string;
  event: string;
  teamName: string;
  teamLeaderName: string;
  collegeName: string;
  whatsappNumber: string;
  alternateNumber: string;
  email: string;
  payment: string;
  isVerified: boolean;
  members: TeamMember[];
}

export interface UserDetails {
  _id: string;
  event: string;
  name: string;
  collegeName: string;
  whatsappNumber: string;
  alternateNumber: string;
  email: string;
  payment: string;
  isVerified: boolean;
  members: Member[];
  __v: number;
}

export interface Member {
  name: string;
  info: string;
  _id: string;
}
