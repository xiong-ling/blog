"use client";

import { useEffect, useState } from "react";

export interface IRadioGroup {
  value?: string;
  onChange?: (value: string) => void;
  defaultValue?: string;
  option: { label: string; value: string; disabled?: boolean }[];
}

export const RadioGroup = ({
  value,
  onChange,
  option,
  defaultValue,
}: IRadioGroup) => {
  const [state, setState] = useState(
    value || defaultValue || option[0]?.value || ""
  );

  useEffect(() => {
    onChange?.(state);
  }, [state, onChange]);

  console.log(state);
  

  return (
    <div className="min-width: 100%; mb-4 flex items-center">
      {option.map((it) => (
        <div
          key={it.value}
          onClick={() => {
            setState(it.value);
          }}
          className={`flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary cursor-pointer ${
            state === it.value
              ? "bg-muted font-medium text-primary"
              : "text-muted-foreground"
          }`}
        >
          {it.label}
        </div>
      ))}
    </div>
  );
};
