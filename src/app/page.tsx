"use client";

import { Slider } from "@/components/slider";
import { data as rawData } from "./data.js";
import { useState } from "react";
import { Section } from "@/components/section";
import { Select } from "@/components/select";

// https://github.com/Hendrixer/fullstack-ai-nextjs
export default function Home() {
  const [data, setData] = useState(() => rawData);
  const onChange = (item: any, value: any) => {
    console.log("value", { value, item });
    item.percentage = value; // does not exist
  };

  const onSelectChange = (event: any) => {
    console.log(event.target.id, event.target.value);
  };

  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div>
        <h1 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Budget{" "}
          <span className="text-blue-600 dark:text-blue-500"> calculator</span>{" "}
        </h1>
        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-2">
            <Select
              id="department"
              onChange={onSelectChange}
              items={[
                { value: "rnd", label: "R&D" },
                { value: "sales", label: "Sales" },
                { value: "product", label: "Product" },
              ]}
            ></Select>
            <Select
              id="location"
              onChange={onSelectChange}
              items={[
                { value: "london", label: "London" },
                { value: "tel-aviv", label: "Tel Aviv" },
                { value: "chicago", label: "Chicago" },
              ]}
            ></Select>
            <Select
              id="project"
              onChange={onSelectChange}
              items={[
                { value: "accelerator", label: "Accelerator" },
                { value: "sip", label: "SIP" },
              ]}
            ></Select>
          </div>
          <div className="flex flex-col gap-1 items-start mt-10 border p-10 rounded">
            {data.map((item) => {
              return (
                <>
                  <Section
                    key={item.expenseId}
                    item={item}
                    onChange={onChange}
                    onLockChange={(isLocked: boolean) => {
                      console.log("isLocked", isLocked);
                    }}
                  />
                  {item.sibling.map((item) => {
                    return (
                      <div
                        className="ml-6 flex flex-col gap-1 items-start"
                        key={item.expenseId}
                      >
                        <Section
                          item={item}
                          onChange={onChange}
                          onLockChange={(isLocked: boolean) => {
                            console.log("isLocked", isLocked);
                          }}
                        />
                        {item.sibling.map((item) => {
                          return (
                            <div
                              className="ml-6 flex flex-col gap-1 items-start"
                              key={item.expenseId}
                            >
                              <Section
                                key={item.expenseId}
                                item={item}
                                onChange={onChange}
                                onLockChange={(isLocked: boolean) => {
                                  console.log("isLocked", isLocked);
                                }}
                              />
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div>
    </main>
  );
}
