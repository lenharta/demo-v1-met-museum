import axios from "../axios";
import { MetDeptObject } from "../config";

export async function getDepartmentList(): Promise<MetDeptObject[]> {
  const response = await axios.get(`/departments`);
  return (await response.data) as MetDeptObject[];
}
