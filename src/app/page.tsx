import Image from "next/image";
import { Grid } from "@/components/grid";
import { Slider } from "@/components/slider";
import { RangeSlider } from "flowbite-react";
import { data } from "./data.js";
interface AccountData {
  account: string;
  locked: boolean;
}

async function getData() {
  return fetch("https://www.ag-grid.com/example-assets/row-data.json").then(
    (result) => result.json()
  );
}

// https://github.com/Hendrixer/fullstack-ai-nextjs
export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Budget{" "}
          <span className="text-blue-600 dark:text-blue-500"> calculator</span>{" "}
        </h1>
        <div className="flex flex-col items-center justify-center">
          {data.map((i) => {
            return (
              <div key={i.expenseId} className="flex flex-col">
                <div className="flex gap-2">
                  <div>{i.total}</div>
                  <div>{i.expenseName}</div>
                  <Slider id="slider" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div>
    </main>
  );
}
