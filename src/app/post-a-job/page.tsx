"use client";

import React, { FC, useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { jobFromSchema } from "@/lib/form-schema";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { ArrowLeftIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
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
import FieldInput from "@/components/organism/FieldInput";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { JobTypeName } from "@/components/constants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import InputSkills from "@/components/organism/InputSkills";
import CKEditor from "@/components/organism/CKEditor";
import InputBenefits from "@/components/organism/InputBenefits";
import { Button } from "@/components/ui/button";

interface PostJobPageProps {}

const PostJobPage: FC<PostJobPageProps> = ({}) => {
  const [editorLoaded, setEditorLoaded] = useState<boolean>(false)

  const form = useForm<z.infer<typeof jobFromSchema>>({
    resolver: zodResolver(jobFromSchema),
    defaultValues: {
      JobRequiredSkill: [],
    },
  });
  const onSubmit = (val: z.infer<typeof jobFromSchema>) => {
    console.log(val);
  };

  useEffect(() => {
    setEditorLoaded(true)
  }, []);

  return (
    <div className="">
      <div className=" inline-flex gap-2 items-center cursor-pointer hover:text-primary">
        <ArrowLeftIcon className="w-7 h-7" />
        <span className="font-semibold text-2xl">Post a Job</span>
      </div>
      <div className="my-5">
        <div className=" font-semibold text-lg">Basic information</div>
        <div className=" text-gray-400">
        List out your top perks and benefits.
        </div>
      </div>
      <Separator />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-5 space-y-8 pt-6"
        >
          <FieldInput
            title="Job Title"
            subtitle="Job titles must be describe one position"
          >
            <FormField
              control={form.control}
              name="roles"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="w-[450px]"
                      placeholder="e.g. software Engineer"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>At least 80 Character</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>

          <FieldInput
            title="Type of Employment"
            subtitle="You can select multiple type of employment"
          >
            <FormField
              control={form.control}
              name="JobType"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      {JobTypeName.map((item: string, i: number) => (
                        <FormItem
                          key={item + i}
                          className="flex items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <RadioGroupItem value={item} />
                          </FormControl>
                          <FormLabel className="font-normal">{item}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>

          <FieldInput
            title="Salary"
            subtitle="Please specify the estimated salary range for the role."
          >
            <div className="w-[450px] flex flex-row justify-between items-center">
              <FormField
                control={form.control}
                name="JobSalaryFrom"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="w-full"
                        placeholder="$100 "
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <span className="text-center">To</span>
              <FormField
                control={form.control}
                name="JobSalaryTo"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="w-full"
                        placeholder="$1000 "
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </FieldInput>

          <FieldInput
            title="Categories"
            subtitle="You can select job"
          >
            <div className="w-[450px] flex flex-row justify-between items-center">
              <FormField
                control={form.control}
                name="JobCategory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Categories</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-[450px]">
                          <SelectValue placeholder="Select Job Category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="m@example.com">
                          m@example.com
                        </SelectItem>
                        <SelectItem value="m@google.com">
                          m@google.com
                        </SelectItem>
                        <SelectItem value="m@support.com">
                          m@support.com
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </FieldInput>

          <FieldInput
            title="Required Skills"
            subtitle="Add required skills for the job"
          >
            <InputSkills form={form}/>
          </FieldInput>

          <FieldInput
            title="Job Descriptions"
            subtitle="Job titles must be describe one position"
          >
            <CKEditor form={form} name="JobDescription" editorLoaded={editorLoaded} />
          </FieldInput>

          <FieldInput

            title="Responsibility"
            subtitle="Job titles must be describe one position"
          >
            <CKEditor form={form} name="Responsibility" editorLoaded={editorLoaded} />
          </FieldInput>

          <FieldInput
            title="Who You Are"
            subtitle="Add your preferred candidates qualifications"
          >
            <CKEditor form={form} name="WhoYouAre" editorLoaded={editorLoaded} />
          </FieldInput>

          <FieldInput
            title="Nice-To-Haves"
            subtitle="Add nice-to-have skills and qualifications for the role to encourage a more diverse set of candidates to apply"
          >
            <CKEditor form={form} name="NiceToHaves" editorLoaded={editorLoaded} />
          </FieldInput>
          
          <FieldInput
            title="Perks and Benefits"
            subtitle="Encourage more people to apply by sharing the attractive rewards and benefits you offer your employees"
          >
            <InputBenefits form={form}/>
          </FieldInput>

          <div className="flex justify-end">
            <Button>Do a Review</Button>
          </div>

        </form>
      </Form>
    </div>
  );
};
export default PostJobPage;
