import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

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
    case "POST":
      try {
        const { username, password } = body;

        // console.log(username == user[0].username , password);

        let is_username_exist = false;
        let payload = {
          id: -1,
          username: "",
          email: "",
        };
        user.map((e) => {
          if (e.username == username && password == e.password) {
            is_username_exist = true;
            // console.log("udah bener");

            (payload.id = e.id),
              (payload.username = e.username),
              (payload.email = e.email);
          }
        });

        if (is_username_exist) {
          console.log("username dan password");

          const token = jwt.sign(payload, "hashslingingslasher", {
            expiresIn: "6h",
          });
          console.log(token);

          return res.status(200).json({
            message: "Data succesfully retrieved",
            data: token,
          });
        } else {
          return res.status(404).json({
            message: "User not found",
          });
        }
      } catch (error) {
        console.log(error);

        return res.status(500).json({
          message: "Something went wrong",
          error: error,
        });
      }
  }
}
