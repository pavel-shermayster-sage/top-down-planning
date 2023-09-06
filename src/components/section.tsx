"use client";
import { useState } from "react";
import { LockIcon } from "./lock-svg";
import { Slider } from "./slider";
import { UnLockIcon } from "./unlock-svg";

// type Item = {
//   total: number;
//   expenseName: string;
//   expenseId: string;
//   percentage: number;
// };
export function Section({ item, onChange }: { item: any; onChange: any }) {
  const [locked, setLocked] = useState(false);
  return (
    <div className="flex flex-col">
      <div className="flex gap-8">
        <div>Total: {item.total}</div>
        <div>Name: {item.expenseName}</div>
        <Slider
          id="slider"
          onChange={(_, value) => {
            onChange(item, value);
          }}
        />
        <button onClick={() => setLocked((s) => !s)}>
          {locked ? <UnLockIcon /> : <LockIcon />}
        </button>
      </div>
    </div>
  );
}
