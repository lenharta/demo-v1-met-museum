import axios from "axios";
import { MET_BASEURL } from "./config";

export const testObjects = {
  1: { urlSlug: "/collection/v1/objects/", id: "546802" },
  2: { urlSlug: "/collection/v1/objects/", id: "437133" },
};

export default axios.create({
  baseURL: MET_BASEURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
