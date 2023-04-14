import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;
  switch (method) {
    case "GET":
      try {
        // Mengambil data dari database
        const category = await prisma.category.findMany();

        // Mengembalikan / mengirimkan hasil
        return res
          .status(200)
          .json({ message: "Success get all data", data: category });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
      }
    case "POST":
      try {
        const { nama_kategori } = body;

        const created_category = await prisma.category.create({
          data: {
            nama_kategori: nama_kategori,
          },
        });
        return res.status(200).json({
          message: "Category created",
          data: created_category,
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
      }
  }
}
