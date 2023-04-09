export const fakeUserData = [
  {
    uid: "uid2938475085",
    firstName: "Adam",
    lastName: "Smith",
  },
  {
    uid: "uid2938475086",
    firstName: "Jane",
    lastName: "Smith",
  },
];

export type ConfigErrorObject = {
  errorStatusCode: number;
  errorStatusText: string;
};

const useFakeFetch = <T extends {}>(data: T[]): Promise<T[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2500);
  });
};
export default useFakeFetch;
