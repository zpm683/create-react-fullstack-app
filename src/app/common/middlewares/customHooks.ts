/**
 * common hooks
 * export more or make your hooks
 */

import { useState, useEffect, useRef } from "react";

/**
 * check is online or offline
 *
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

/**
 * コンポーネントがマウントされた後（初期レンダリング後）、一度だけ実行する React Hook
 * ※クラスコンポーネントの componentDidMount ライフサイクル相当
 * @param func 実行するコールバック
 */
export function useComponentDidMount(func: React.EffectCallback): void {
  useEffect(func, []);
}

/**
 * コンポーネントがマウントされる前に一度だけ実行する React Hook
 * ※クラスコンポーネントの componentWillMount ライフサイクル相当
 * @param func 実行するコールバック
 */
export function useComponentWillMount(func: React.EffectCallback): void {
  const willMount = useRef(true);

  if (willMount.current) {
    func();
  }

  useComponentDidMount(() => {
    willMount.current = false;
  });
}
