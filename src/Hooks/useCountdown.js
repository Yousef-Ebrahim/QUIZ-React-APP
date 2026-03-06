import { useState, useEffect } from "react";

export function useCountdown(initialValue, onFinish, active) {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    if (!active) return;
    if (count === 0) {
      onFinish?.();
      return;
    }
    const timer = setTimeout(() => {
      setCount((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [count, active]);
  return count;
}
