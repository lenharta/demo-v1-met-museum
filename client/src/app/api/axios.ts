import axios from "axios";
import { API_METMUSEUM } from "./config";

export default axios.create({
  baseURL: API_METMUSEUM.baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
