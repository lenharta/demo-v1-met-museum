import { useCallback } from "react";

export default function usePersistLocalStore<T>(key: string, state: T) {
  const connection = window.localStorage;
  const storage = connection.getItem(key);

  const parseJSON = (value: string) => JSON.parse(value);
  const composeJSON = (value: Partial<T>) => JSON.stringify(value);
  if (!storage) connection.setItem(key, composeJSON(state));

  const get = () => {
    if (!storage) return state ?? {};
    return parseJSON(storage);
  };

  const set = (value: Partial<T>) => {
    connection.setItem(key, composeJSON(value));
  };
  // const set = useCallback((value: Partial<T>) => {
  //   connection.setItem(key, composeJSON(value));
  // }, []);

  return { get, set };
}
