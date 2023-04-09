export enum STOREKEY {
  local = "LOCALSTORE",
  session = "SESSIONSTORE",
}

const useComposeJSON = <T extends {}>(data: T) => {
  return JSON.stringify(data) as string;
};
const useParseJSON = <T extends {}>(data: string) => {
  return JSON.parse(JSON.stringify(data)) as T;
};

const sessionState = { isUniqueSession: "isUniqueSession" };
const localState = { isThemeMode: "mode-dark", isThemeAvatar: "default" };

const useInitialStore = <T = unknown>(key: STOREKEY) => {
  if (key === STOREKEY.session) return sessionState as T;
  if (key === STOREKEY.local) return localState as T;
  return;
};

const connections = new Map([]);

// const connections = new Map([
//   [STOREKEY.local, [window.localStorage, useInitialStore(STOREKEY.local)]],
//   [
//     STOREKEY.session,
//     [window.sessionStorage, useInitialStore(STOREKEY.session)],
//   ],
// ]);

const useFetchStorage = async <T extends {}>(
  key: STOREKEY,
  timeout: number
) => {
  const connection = connections.get(key);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log(connection));
    }, timeout);
  });
};

const createLocalConnection = () => {
  return connections.forEach((connection, connectionKey) => {
    console.log(connection);
  });
};
