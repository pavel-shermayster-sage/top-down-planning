import Image from "next/image";
import { Grid } from "@/components/grid";
import { Slider } from "@/components/slider";
import { RangeSlider } from "flowbite-react";
interface AccountData {
  account: string;
  locked: boolean;
}

const data = [
  {
    expenseId: 0,
    expenseName: "Total Expenses",
    expenseAmount: "calc",
    sibling: [1, 2, 3],
  },
  {
    expenseId: 1,
    expenseName: "Office Expenses",
    expenseAmount: "calc",
    sibling: [11, 12, 13, 14, 15],
  },
  {
    expenseId: 2,
    expenseName: "Travel Expenses",
    expenseAmount: "calc",
    sibling: [21, 22, 23],
  },
  {
    expenseId: 3,
    expenseName: "Admin Expenses",
    expenseAmount: "calc",
    sibling: [31, 32, 33],
  },
  {
    expenseId: 11,
    expenseName: "Communications",
    expenseAmount: {},
  },
  {
    expenseId: 12,
    expenseName: "Snacks",
    expenseAmount: {},
  },
  {
    expenseId: 13,
    expenseName: "Entertainment",
    expenseAmount: {},
  },
  {
    expenseId: 14,
    expenseName: "Furniture",
    expenseAmount: {},
  },
  {
    expenseId: 15,
    expenseName: "Computers",
    expenseAmount: {},
  },
  {
    expenseId: 21,
    expenseName: "Flights",
    expenseAmount: {},
  },
  {
    expenseId: 22,
    expenseName: "Conferences",
    expenseAmount: {},
  },
  {
    expenseId: 23,
    expenseName: "Hotels",
    expenseAmount: {},
  },
  {
    expenseId: 31,
    expenseName: "Insurance",
    expenseAmount: {},
  },
  {
    expenseId: 32,
    expenseName: "Salary",
    expenseAmount: {},
  },
  {
    expenseId: 33,
    expenseName: "Benefits",
    expenseAmount: {},
  },
];

async function getData() {
  return fetch("https://www.ag-grid.com/example-assets/row-data.json").then(
    (result) => result.json()
  );
}

// https://github.com/Hendrixer/fullstack-ai-nextjs
export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Budget{" "}
        <span className="text-blue-600 dark:text-blue-500"> calculator</span>{" "}
      </h1>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-col items-center justify-center">
          <div className="py-2">
            <Slider id="slider" min={0} max={10} />
          </div>
          <Grid rowData={data} />
        </div>
      </div>
    </main>
  );
}
