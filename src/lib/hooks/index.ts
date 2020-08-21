/**
 * 自定义 hooks
 */

/**
 * check is online or offline
 * @returns true:Online false:Offline
 * @example const isOnline = useOnline();
 */
export function useOnline() {
  const [isOnline, setNetwork] = useState(window.navigator.onLine);
  const updateNetwork = () => {
    setNetwork(window.navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("offline", updateNetwork);
    window.addEventListener("online", updateNetwork);
    return () => {
      window.removeEventListener("offline", updateNetwork);
      window.removeEventListener("online", updateNetwork);
    };
  });
  return isOnline;
}

/**
 * 缓存值
 * @param value 缓存值
 * @example
 *   function Counter() {
 *     const [count, setCount] = useState(0);
 *     const prevCount = usePrevious(count);
 *   }
 */
export function usePrevious(value: any): any {
  const ref = useRef(null);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
