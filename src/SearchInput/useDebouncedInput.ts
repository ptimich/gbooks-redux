import { ChangeEventHandler, useEffect, useState } from "react";
import { useDebounce } from "../utils/useDebounce.ts";

function useDebouncedInputChangeHandler(
  initialValue: string | undefined,
  callback: (val: string) => void,
) {
  const [value, setValue] = useState(initialValue);
  const debouncedValue = useDebounce(value, 800);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (debouncedValue && debouncedValue.trim().length > 0) {
      callback(debouncedValue);
    }
  }, [debouncedValue]);
  return [value, handleChange] as const;
}

export { useDebouncedInputChangeHandler };
