import axios from "../app/api/axios";
import { useEffect } from "react";
import { AxiosError } from "axios";
import { MET_MUSEUM_API_ENDPOINTS } from "../app/api/config";

import { Page, Hero } from "../components";
import { useStateDispatch, useStateStore } from "../app/StateStore";
import { AtomTestbox } from "../components/animated/atoms/Atom";

export const useAxiosFetch = <T extends {}>(url: MET_MUSEUM_API_ENDPOINTS) => {
  const state = useStateStore();
  const dispatch = useStateDispatch();

  const asyncFetch = async () => {
    dispatch({ loading: "loading" });
    try {
      const response = await axios.get(url);
      const { data } = response;
      dispatch({ data: data as T });
    } catch (err) {
      const { code, message, status } = err as AxiosError;
      dispatch({ error: err as Error });
      console.log({ code, message, status });
    } finally {
      dispatch({ loading: undefined });
    }
  };
  useEffect(() => void asyncFetch(), [url]);
  return { state, dispatch } as const;
};

export default function Home() {
  return (
    <Page hero={<Hero title="Home" />}>
      <AtomTestbox />
    </Page>
  );
}
