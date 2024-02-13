import { useCallback, useState } from "react";

export const useToggle = (value: boolean) => {
  const [toggleValue, setToggleValue] = useState(value);

  const toggle = useCallback(() => {
    setToggleValue((prev) => !prev);
  }, [toggleValue]);

  return { toggleValue, toggle };
};
