import { register } from "./[type]";

export default async function handler(req, res) {
  return await register(req, res, "owner");
}
