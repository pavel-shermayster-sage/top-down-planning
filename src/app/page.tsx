"use client";

import { Slider } from "@/components/slider";
import { data as rawData } from "./data.js";
import { useState } from "react";
import { Section } from "@/components/section";
import { Select } from "@/components/select";

const initRawDataMap = () => {
  let map: Record<string, any> = {};
  rawData.forEach((item) => {
    map[item.expenseId] = item;
    item.sibling.forEach((sib) => {
      map[sib.expenseId] = sib;
      sib.sibling.forEach((grandSib) => {
        map[grandSib.expenseId] = grandSib;
        grandSib.sibling.forEach((grandGrandSib: any) => {
          map[grandGrandSib.expenseId] = grandGrandSib;
        });
      });
    });
  });
  return map;
};
// https://github.com/Hendrixer/fullstack-ai-nextjs
export default function Home() {
  const [data, setData] = useState(() => [...rawData]);

  const onChange = (item: any, value: number) => {
    const newItem = { ...item };
    if (!item.isLocked) {
      newItem.percentage = 1 + value / 100;
      newItem.sibling = newItem.sibling.map((sib: any) => {
        return {
          ...sib,
          percentage: sib.isLocked ? sib.percentage : 1 + value / 100, //1.01
          sibling: sib.isLocked
            ? sib.sibling
            : sib.sibling.map((grandSib: any) => {
                return {
                  ...grandSib,
                  percentage: grandSib.isLocked
                    ? grandSib.percentage
                    : 1 + value / 100,
                };
              }),
        };
      });
    }
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

  const onLockChange = (item: any, isLocked: boolean) => {
    const newItem = {
      ...item,
      isLocked,
    };
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
    console.log("onLockChange", { item, isLocked, newItem, newData });
    setData(newData);
  };

  const onSelectChange = (event: any) => {
    console.log(event.target.id, event.target.value);
  };

  return (
    <main className="flex min-h-screen flex-col justify-between p-24 w-full ">
      <div>
        <h1 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Top down budget{" "}
          <span className="text-blue-600 dark:text-blue-500"> planner</span>{" "}
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
                        onLockChange(item, isLocked);
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
                            onLockChange(item, isLocked);
                          }}
                        >
                          {item.sibling.map((item) => {
                            return (
                              <div
                                className="px-4 flex flex-col gap-1 items-stretch"
                                key={item.expenseId}
                              >
                                <Section
                                  key={item.expenseId}
                                  item={item}
                                  onChange={onChange}
                                  onLockChange={(isLocked: boolean) => {
                                    onLockChange(item, isLocked);
                                  }}
                                ></Section>
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
