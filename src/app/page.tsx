"use client";

import { Slider } from "@/components/slider";
import { data as rawData } from "./data.js";
import { useState } from "react";
import { Section } from "@/components/section";

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
          <div>
            <select name="department" id="department">
              <option value="select">Select</option>
              <option value="rnd">R&D</option>
              <option value="sales">Sales</option>
              <option value="product">Product</option>
            </select>
            <select name="location" id="location">
              <option value="select">Select</option>
              <option value="london">London</option>
              <option value="tel-aviv">Tel Aviv</option>
              <option value="chicago">Chicago</option>
            </select>
            <select name="project" id="project">
              <option value="select">Select</option>
              <option value="accelerator">Accelerator</option>
              <option value="sip">SIP</option>
            </select>
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
