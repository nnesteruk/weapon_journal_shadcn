import { useCallback, useEffect } from "react";

type DebounceType = (apiQuery: () => void, delay?: number) => void;

export const useDebounce: DebounceType = (apiQuery, delay = 300) => {
  const callback = useCallback(apiQuery, [apiQuery]);

  useEffect(() => {
    const timer = setTimeout(() => {
      callback();
    }, delay);

    return () => clearTimeout(timer);
  }, [callback, delay]);
};
