import { useEffect } from "react";

export function connectionTest(key: string, connection: Storage) {
  const testConnection = connection.getItem(key);
  if (!testConnection) return undefined;
  return "Connected!";
}

export default function useLocalConnection<T>(
  key: string,
  stateObj: T,
  connection: Storage
) {
  function composeStorage(key: string, data: T) {
    return connection.setItem(key, JSON.stringify(data));
  }
  function parseStorage(key: string) {
    if (!testConnection) return;
    return connection.getItem(JSON.parse(key));
  }

  const testConnection = connectionTest(key, connection);
  if (!testConnection) return composeStorage(key, stateObj);

  useEffect(() => {
    composeStorage(key, stateObj);
  }, [stateObj]);

  return parseStorage(key);
}
