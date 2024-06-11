import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { PartyPopperIcon } from "lucide-react";
import React, { FC } from "react";

interface JobDetailProps {}

const JobDetail: FC<JobDetailProps> = ({}) => {
  return (
    <div>
      <div className="grid grid-cols-3 w-full gap-5">
        <div className="col-span-2 space-y-10">
          <div>
            <div className="text-3xl font-semibold">Description</div>
            <div className="text-gray-500 mt-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis ex accusantium ullam corporis laboriosam, placeat,
                maiores dolorem quae magni delectus quia deserunt sit doloribus
                nam est ea, architecto ducimus rem?
              </p>
            </div>
          </div>
          <div>
            <div className="text-3xl font-semibold">Responsibilities</div>
            <div className="text-gray-500 mt-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis ex accusantium ullam corporis laboriosam, placeat,
                maiores dolorem quae magni delectus quia deserunt sit doloribus
                nam est ea, architecto ducimus rem?
              </p>
            </div>
          </div>
          <div>
            <div className="text-3xl font-semibold">Who You Are</div>
            <div className="text-gray-500 mt-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis ex accusantium ullam corporis laboriosam, placeat,
                maiores dolorem quae magni delectus quia deserunt sit doloribus
                nam est ea, architecto ducimus rem?
              </p>
            </div>
          </div>
          <div>
            <div className="text-3xl font-semibold">Nice-To-Haves</div>
            <div className="text-gray-500 mt-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis ex accusantium ullam corporis laboriosam, placeat,
                maiores dolorem quae magni delectus quia deserunt sit doloribus
                nam est ea, architecto ducimus rem?
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="text-3xl font-semibold">About this role</div>

          <div className="shadow p-3 text-center my-6">
            <span className="text-gray-500">of capacity</span>
            <Progress className="mt-3" value={10} />
          </div>

          <div className="mb-10 space-y-5">
            <div className="flex justify-between">
              <div className="text-gray-500">Apply Before</div>
              <div className="font-semibold">12 Agustus 2023</div>
            </div>

            <div className="flex justify-between">
              <div className="text-gray-500">Job Posted On</div>
              <div className="font-semibold">12 Agustus 2023</div>
            </div>

            <div className="flex justify-between">
              <div className="text-gray-500">Job Type</div>
              <div className="font-semibold">Full-Time</div>
            </div>

            <div className="flex justify-between">
              <div className="text-gray-500">Salary</div>
              <div className="font-semibold">$100 - $1000 USD</div>
            </div>
          </div>

          <Separator />

          <div className="my-10">
            <div className="text-3xl font-semibold mb-4">Category</div>

            <div className="space-x-5">
              <Badge> Software Engineer</Badge>
            </div>
          </div>

          <Separator />

          <div className="my-10">
            <div className="text-3xl font-semibold mb-4">Required Skills</div>

            <div className="space-x-5">
              {["HTML", "JavaScript"].map((item: string, i: number) => (
                <Badge variant="outline" key={i}>
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-8" />
      <div>
        <div className="text-3xl font-semibold">Perks & Benefits</div>
        <div className="text-gray-500">
          This job comes with several perks and benefits
        </div>

        <div className="grid grid-cols-4 gap-5 mt-9">
          {[0, 1, 2].map((item: number) => (
            <div key={item}>
              <PartyPopperIcon className="w-10 h-10 text-primary mb-6" />

              <div className="text-lg font-semibold mb-3">Benefit</div>
              <div className="text-gray-500">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  explicabo, enim, perferendis consequatur aut cum veniam itaque
                  facilis optio vero rem fugiat sequi nobis similique quos.
                  Architecto doloremque sequi sunt.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
