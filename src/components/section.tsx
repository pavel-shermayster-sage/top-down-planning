"use client";
import React, { ReactNode, useState } from "react";
import { LockIcon } from "./lock-svg";
import { Slider } from "./slider";
import { UnLockIcon } from "./unlock-svg";

export function Section({
  item,
  bold,
  onChange,
  onLockChange,
  children,
}: {
  item: any;
  bold?: boolean;
  onChange: any;
  onLockChange?: any;
  children?: ReactNode;
}) {
  const [locked, setLocked] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <div>
      <div
        className={`flex justify-between items-center w-full ${
          bold ? "gap-8 h-20 " : "gap-8 h-14 text-sm"
        }`}
      >
        {Boolean(children) && (
          <button
            onClick={() => setShow(!show)}
            type="button"
            className="flex items-center justify-between font-medium text-left "
            data-accordion-target="#accordion-flush-body-1"
            aria-expanded="true"
            aria-controls="accordion-flush-body-1"
          >
            <svg
              data-accordion-icon
              className={`w-3 h-3 shrink-0 ${
                !show ? "rotate-180" : "rotate-0"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        )}
        <span className={bold ? "font-bold" : ""}>{item.expenseName}</span>
        <div>{item.total}</div>
        <Slider
          id="slider"
          className="text-xs"
          disabled={locked}
          onChange={(_: any, value: any) => {
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
      {show && children}
    </div>
  );
}
