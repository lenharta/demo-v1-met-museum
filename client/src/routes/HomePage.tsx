import { useEffect, useState } from "react";
import axios from "../app/api/axios";
import { useAppState } from "../App";
import { Page, PageHero } from "../components";

export const selectMetDeptList = async <T extends {}>(): Promise<T[]> => {
  const response = await axios.get(`/departments`);
  return (await response.data) as T[];
};

export const selectMetDept = async <T extends {}>(id: string): Promise<T[]> => {
  const response = await axios.get(`/departments/${id}`);
  return (await response.data) as T[];
};

export const selectMetObject = async <T extends {}>(id: string): Promise<T> => {
  const response = await axios.get(`/objects/${id}`);
  return (await response.data) as T;
};

export default function IndexRoute() {
  const [data, dataSet] = useState([]);
  const appState = useAppState();
  console.log(appState);
  useEffect(() => {}, []);

  return (
    <Page hero={<PageHero title="Home" />}>
      <h3>Page Content</h3>
    </Page>
  );
}

// useEffect(() => {
//   const fetchFakeData = async () => {
//     try {
//       const response = await useFakeFetch(fakeUserData);
//       console.log(response);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   fetchFakeData();
// }, []);
