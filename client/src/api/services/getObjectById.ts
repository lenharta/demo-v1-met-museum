import axios from "../axios";
import { MetObject } from "../config";

export async function getObjectById(id?: string): Promise<Partial<MetObject>> {
  const response = await axios.get(`/objects/${id}`);
  return (await response.data) as Partial<MetObject>;
}
