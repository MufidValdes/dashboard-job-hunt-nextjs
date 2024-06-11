
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


export const overviewFormSchema = z.object({
	image: z.any(),
	name: z.string({ required_error: "Name is required" }),
	website: z.string({ required_error: "Website is required" }),
	location: z.string({ required_error: "Location is required" }),
	employee: z.string({ required_error: "Employee is required" }),
	industry: z.string({ required_error: "Industry is required" }),
	dateFounded: z.date({ required_error: "dateFounded is required" }),
	techStack: z
		.string({ required_error: "Tech Stack is required" })
		.array()
		.nonempty({ message: "Tech Stack must be at least 1 data" }),
	description: z.string({ required_error: "Description is required" }),
});

export const socialMediaFormSchema = z.object({
	facebook: z.string({ required_error: "Facebook link is required" }),
	instagram: z.string({ required_error: "Instagram link is required" }),
	linkedin: z.string({ required_error: "LinkedIn link is required" }),
	twitter: z.string({ required_error: "Twitter link is required" }),
	youtube: z.string({ required_error: "Youtube link is required" }),
});

export const teamFormSchema = z.object({
	name: z.string({ required_error: "Name is required" }),
	position: z.string({ required_error: "Position is required" }),
	instagram: z.string({ required_error: "Instagram is required" }),
	linkedin: z.string({ required_error: "Linkedin is required" }),
});

export const signInFormSchema = z.object({
	email: z
		.string({ required_error: "Email is required" })
		.email({ message: "Email is not valid" }),
	password: z.string({ required_error: "Password is required" }),
});

export const signUpFormSchema = z.object({
	name: z.string({ required_error: "Name is required" }),
	email: z
		.string({ required_error: "Email is required" })
		.email({ message: "Email is not valid" }),
	password: z.string({ required_error: "Password is required" }),
});