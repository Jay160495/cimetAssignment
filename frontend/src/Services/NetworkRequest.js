import { CimetRequest } from "./cimetRequest";

export async function post(url, data, headers, token) {
  const conn = await new CimetRequest(headers, token);
  return conn.post(url, data);
}