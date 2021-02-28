import { useEffect, useRef } from "react";

/**
 * 1つ前の値を保存する
 *
 * @param value 保存しておきたい前の値
 * @example
 *   function Counter() {
 *     const [count, setCount] = useState(0);
 *     const prevCount = usePrevious(count);
 *     useEffect...
 *   }
 */
export function usePrevious(value: any): any {
  const ref = useRef(null);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
