import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

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
        const books = await prisma.book.findMany({
          include: { category: true },
        });

        // Mengembalikan / mengirimkan hasil
        return res
          .status(200)
          .json({ message: "Success get all data", data: books });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
      }
    case "POST":
      try {
        const {
          nama,
          penulis,
          penerbit,
          jumlah_halaman,
          kota_penerbit,
          category_id,
        } = body;

        const created_book = await prisma.book.create({
          data: {
            nama: nama,
            penulis: penulis,
            penerbit: penerbit,
            jumlah_halaman: jumlah_halaman,
            kota_penerbit: kota_penerbit,
            category_id: category_id,
          },
        });
        return res.status(200).json({
          message: "Book created",
          data: created_book,
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
      }
  }
}
