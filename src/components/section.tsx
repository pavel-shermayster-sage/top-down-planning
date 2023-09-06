"use client";
import { useState } from "react";
import { LockIcon } from "./lock-svg";
import { Slider } from "./slider";
import { UnLockIcon } from "./unlock-svg";

export function Section({
  item,
  onChange,
  onLockChange,
}: {
  item: any;
  onChange: any;
  onLockChange?: any;
}) {
  const [locked, setLocked] = useState(false);
  return (
    <div className="flex flex-col">
      <div className="flex gap-8 align-sub">
        <div>Total: {item.total}</div>
        <div>Name: {item.expenseName}</div>
        <Slider
          id="slider"
          disabled={locked}
          onChange={(_, value) => {
            onChange(item, value);
          }}
        />
        <button
          onClick={() => {
            setLocked((s) => !s);
            onLockChange(item, !locked);
          }}
        >
          {locked ? <UnLockIcon /> : <LockIcon />}
        </button>
      </div>
    </div>
  );
}
