
import { JobTypeName } from "@/components/constants";
import { z } from "zod";

export const jobFromSchema = z.object({
  roles: z
    .string({ required_error: "Job Title is Required" })
    .min(3, { message: "Job title must be at least 3 characters" })
    .max(50),
  JobType: z.enum(JobTypeName, { required_error: "You Need Select a Job" }),
  JobSalaryFrom: z.string({ required_error: "Sallary is Required" }),
  JobSalaryTo: z.string({ required_error: "Sallary is Required" }),
  JobCategory: z.string({ required_error: "You Need Select Category" }),
  JobRequiredSkill: z
    .string()
    .array()
    .nonempty({ message: "reqired Skill must be at least 3 Skills" }),
  JobDescription: z
    .string({ required_error: "Job Decription is Required" })
    .min(30, { message: "Job Discription must be at least 30 characters" }),
  Responsibility: z
    .string({ required_error: "Responsibility is Required" })
    .min(30, { message: "Responsibility must be at least 30 characters" }),
  WhoYouAre: z
    .string({ required_error: "WhoYouAre is Required" })
    .min(30, { message: "WhoYouAre must be at least 30 characters" }),
  NiceToHaves: z
    .string({ required_error: "NiceToHaves is Required" })
    .min(30, { message: "NiceToHaves must be at least 30 characters" }),
  Benefits: z.object({
    benefits: z.string(),
    description: z.string()
  }).array().nonempty({ message: "reqired Benefits must be at least 1 Benefits" })
});
