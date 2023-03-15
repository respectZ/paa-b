import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;
  const user = [
    {
      id: 0,
      username: "miko",
      email: "miko@mail.com",
      password: "miko123",
    },
    {
      id: 1,
      username: "taro",
      email: "taro@miko.lovers",
      password: "tarolovemiko",
    },
  ];

  switch (method) {
    case "GET":
      try {
        const user_data = user;

        return res.status(200).json({
          message: "Data succesfully retrieved",
          data: user_data,
        });
      } catch (error) {
        console.log(error);

        return res.status(500).json({
          message: "Something went wrong",
          error: error,
        });
      }
      break;
    case "POST":
      try {
        const user_data = user;
        user_data.push(body);

        return res.status(200).json({
          message: "Data succesfully retrieved",
          data: user_data,
        });
      } catch (error) {
        console.log(error);

        return res.status(500).json({
          message: "Something went wrong",
          error: error,
        });
      }
      break;
  }
}
