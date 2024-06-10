import { EnumValues } from "zod";

export const JobTypeName: EnumValues = [
  "Full-Time",
  "Part-Time",
  "Remote",
  "Internship",
];

export const JOB_LISTING_COLUMNS: string[] = [
  "Roles",
  "Status",
  "Date Posted",
  "Due Date",
  "Job Type",
  "Applicants",
  "Needs",
  ];
  
  export const JOB_LISTING_DATA =[
      {
          roles: "Software Engineer",
          status: "Live",
          datePosted: "10 Juli 2024",
          dueDate: "10 Mei 2024",
          jobType: "Full-Time",
          applicants: 1,
          needs: 10,
          
    }
] 