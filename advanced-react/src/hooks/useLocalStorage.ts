import { useState } from "react";

export const useLocalStorage = <T,>(
  key: string,
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  const setState: React.Dispatch<React.SetStateAction<T>> = (
    newValue
  ) => {
    setValue((prev) => {
      const resolvedValue =
        typeof newValue === "function"
          ? (newValue as (prev: T) => T)(prev)
          : newValue;

      localStorage.setItem(
        key,
        JSON.stringify(resolvedValue)
      );

      return resolvedValue;
    });
  };

  return [value, setState];
};