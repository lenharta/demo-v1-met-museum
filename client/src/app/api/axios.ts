import axios, { CreateAxiosDefaults } from "axios";
import { MET_MUSEUM_API_BASE_URL } from "./config";

type ConfigAxiosURL = { baseURL: typeof MET_MUSEUM_API_BASE_URL };

export default axios.create({
  baseURL: MET_MUSEUM_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
} as CreateAxiosDefaults & ConfigAxiosURL);
