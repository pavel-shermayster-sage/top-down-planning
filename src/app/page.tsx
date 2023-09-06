"use client";

import { Slider } from "@/components/slider";
import { data as rawData } from "./data.js";
import { useState } from "react";
import { Section } from "@/components/section";
import { Select } from "@/components/select";

// https://github.com/Hendrixer/fullstack-ai-nextjs
export default function Home() {
  const [data, setData] = useState(() => [...rawData]);

  const rawDataMap: Record<string, any> = {};
  rawData.forEach((item) => {
    rawDataMap[item.expenseId] = item;
    item.sibling.forEach((sib) => {
      rawDataMap[sib.expenseId] = sib;
      sib.sibling.forEach((grandSib) => {
        rawDataMap[grandSib.expenseId] = grandSib;
        grandSib.sibling.forEach((grandGrandSib: any) => {
          rawDataMap[grandGrandSib.expenseId] = grandGrandSib;
        });
      });
    });
  });

  const onChange = (item: any, value: number) => {
    const newItem = { ...item };
    newItem.total = rawDataMap[item.expenseId].total * (1 + value / 100);
    newItem.sibling = newItem.sibling.map((sib: any) => {
      // prevent breaking on leaf percentage change
      return {
        ...sib,
        total: rawDataMap[sib.expenseId].total * (1 + value / 100),
        sibling: sib.sibling.map((grandSib: any) => {
          return {
            ...grandSib,
            total: rawDataMap[grandSib.expenseId].total * (1 + value / 100),
          };
        }),
      };
    });
    console.log("value", { value, item });

    const newData = [...data].map((i) => {
      if (i.expenseId === item.expenseId) {
        return newItem;
      }
      return {
        ...i,
        sibling: i.sibling.map((sib: any) => {
          if (sib.expenseId === item.expenseId) {
            return newItem;
          }
          return {
            ...sib,
            sibling: sib.sibling.map((grandSib: any) => {
              if (grandSib.expenseId === item.expenseId) {
                return newItem;
              }
              return grandSib;
            }),
          };
        }),
      };
    });

    setData(newData);
  };

  const onSelectChange = (event: any) => {
    console.log(event.target.id, event.target.value);
  };

  return (
    <main className="flex min-h-screen flex-col justify-between p-24 w-full ">
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
                { value: "R&D", label: "R&D" },
                { value: "Sales", label: "Sales" },
                { value: "Product", label: "Product" },
              ]}
            ></Select>
            <Select
              id="location"
              onChange={onSelectChange}
              items={[
                { value: "London", label: "London" },
                { value: "Tel-aviv", label: "Tel Aviv" },
                { value: "Chicago", label: "Chicago" },
              ]}
            ></Select>
            <Select
              id="project"
              onChange={onSelectChange}
              items={[
                { value: "Accelerator", label: "Accelerator" },
                { value: "SIP", label: "SIP" },
              ]}
            ></Select>
          </div>
          <div className="flex flex-col gap-1 items-stretch mt-10 border rounded lg:w-1/2 w-3/4">
            {data.map((item) => {
              return (
                <>
                  <div className="p-4 text-2xl border-b-stone-500">
                    <Section
                      bold={true}
                      key={item.expenseId}
                      item={item}
                      onChange={onChange}
                      onLockChange={(isLocked: boolean) => {
                        console.log("isLocked", isLocked);
                      }}
                    />
                  </div>
                  {item.sibling.map((item) => {
                    return (
                      <div className="px-4 gap-1" key={item.expenseId}>
                        <Section
                          item={item}
                          bold={true}
                          onChange={onChange}
                          onLockChange={(isLocked: boolean) => {
                            console.log("isLocked", isLocked);
                          }}
                        >
                          {item.sibling.map((item) => {
                            return (
                              <div
                                className="pl-12 flex flex-col gap-1 items-stretch"
                                key={item.expenseId}
                              >
                                <Section
                                  key={item.expenseId}
                                  item={item}
                                  onChange={onChange}
                                  onLockChange={(isLocked: boolean) => {
                                    console.log("isLocked", isLocked);
                                  }}
                                >
                                  {/*This is commented out until Jeff changes his mind again*/}
                                  {/*{item.sibling.map((item: any) => {*/}
                                  {/*  return (*/}
                                  {/*    <div*/}
                                  {/*      className="ml-6 flex flex-col gap-1 items-start"*/}
                                  {/*      key={item.expenseId}*/}
                                  {/*    >*/}
                                  {/*      <Section*/}
                                  {/*        key={item.expenseId}*/}
                                  {/*        item={item}*/}
                                  {/*        onChange={onChange}*/}
                                  {/*        onLockChange={(isLocked: boolean) => {*/}
                                  {/*          console.log("isLocked", isLocked);*/}
                                  {/*        }}*/}
                                  {/*      ></Section>*/}
                                  {/*    </div>*/}
                                  {/*  );*/}
                                  {/*})}*/}
                                </Section>
                              </div>
                            );
                          })}
                        </Section>
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
