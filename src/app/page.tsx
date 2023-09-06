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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Budget{" "}
          <span className="text-blue-600 dark:text-blue-500"> calculator</span>{" "}
        </h1>
        <div className="flex flex-col items-center justify-center">
				<div className="flex gap-2">
						<Select id="department" items={[{ value: "rnd", name: "R&D" }, { value: "sales", name: "Sales"}, { value: "product", name: "Product"}]}></Select>
						<Select id="location" items={[{ value: "london", name: "London" }, { value: "tel-aviv", name: "Tel Aviv"}, { value: "chicago", name: "Chicago"}]}></Select>
						<Select id="project" items={[{ value: "accelerator", name: "Accelerator" }, { value: "sip", name: "SIP"}]}></Select>
					</div>
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
                    <div key={item.expenseId}>
                      <Section
                        item={item}
                        onChange={onChange}
                        onLockChange={(isLocked: boolean) => {
                          console.log("isLocked", isLocked);
                        }}
                      />
                      {item.sibling.map((item) => {
                        return (
                          <Section
                            key={item.expenseId}
                            item={item}
                            onChange={onChange}
                            onLockChange={(isLocked: boolean) => {
                              console.log("isLocked", isLocked);
                            }}
                          />
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
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div>
    </main>
  );
}
