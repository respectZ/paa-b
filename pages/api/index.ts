import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
      } catch (error) {}
      break;
    case "POST":
      try {
      } catch (error) {}
  }
}
