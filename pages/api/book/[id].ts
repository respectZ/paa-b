import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { useRouter } from "next/router";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = parseInt(req.query.id as string);
  // const  = parseInt(id as string);

  const { method, body } = req;
  switch (method) {
    case "GET":
      try {
        // Mengambil data dari database
        const book = await prisma.book.findUnique({
          where: { id: id },
          include: { category: true },
        });

        // Mengembalikan / mengirimkan hasil
        return res
          .status(200)
          .json({ message: "Success get book data", data: book });
      } catch (error) {
        console.log(error);
        return res
          .status(500)
          .json({ message: "Something went wrong", error: error });
      }
    case "PUT":
      try {
        const {
          nama,
          penulis,
          penerbit,
          jumlah_halaman,
          kota_penerbit,
          category_id,
        } = body;

        const updated_book = await prisma.book.update({
          where: {
            id: id,
          },
          data: {
            nama: nama,
            penulis: penulis,
            penerbit: penerbit,
            jumlah_halaman: jumlah_halaman,
            kota_penerbit: kota_penerbit,
            category_id: category_id,
          },
        });
        return res
          .status(200)
          .json({ message: "Book Updated", data: updated_book });
      } catch (error) {
        console.log(error);
        return res
          .status(500)
          .json({ message: "Something went wrong", error: error });
      }
    case "DELETE":
      try {
        const deleted_book = await prisma.book.delete({ where: { id: id } });

        return res
          .status(200)
          .json({ message: "Book Deleted", data: deleted_book });
      } catch (error) {
        console.log(error);
        return res
          .status(500)
          .json({ message: "Something went wrong", error: error });
      }
  }
}
