import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Index() {
  const [Data, SetData] = useState([]);

  const deleteBook = (id: any) => {
    axios
      .delete(`http://localhost:3000/api/book/${id}`)
      .then((res) => console.log(res));
    location.reload();
  };

  const getBooks = () => {
    axios.get("http://localhost:3000/api/book").then((res) => {
      SetData(res.data.data);
    });
  };

  useEffect(() => {
    getBooks();
  }, []);
  console.log(Data);

  return (
    <div className=" bg-gradient-to-br from-amber-300 to-rose-500 flex justify-center items-center w-full h-screen ">
      <table className=" bg-white text-neutral-700 table-fixed text-center  ">
        <thead>
          <tr>
            <th className="border border-neutral-700 w-[2rem]">id</th>
            <th className="border border-neutral-700 w-[12rem]">nama</th>
            <th className="border border-neutral-700 w-[10rem]">penulis</th>
            <th className="border border-neutral-700 w-[5rem]">
              jumlah halaman
            </th>
            <th className="border border-neutral-700">penerbit</th>
            <th className="border border-neutral-700">kota penerbit</th>
            <th className="border border-neutral-700">kategori</th>
            <th className="border border-neutral-700 w-[7rem]">Action</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((e, i) => (
            <tr key={i}>
              <td className="border border-neutral-700">{e["id"]}</td>
              <td className="border border-neutral-700">{e["nama"]}</td>
              <td className="border border-neutral-700">{e["penulis"]}</td>
              <td className="border border-neutral-700">
                {e["jumlah_halaman"]}
              </td>
              <td className="border border-neutral-700">
                {e["kota_penerbit"]}
              </td>
              <td className="border border-neutral-700">
                {e["category"]["nama_kategori"]}
              </td>
              <td className="border border-neutral-700">sosial</td>
              <td className="border border-neutral-700">
                <div className="flex rounded-md gap-x-2 justify-center">
                  <Link
                    href={{ pathname: "/book/update", query: { id: e["id"] } }}
                    className=" cursor-pointer text-emerald-500 hover:text-emerald-300 duration-200 "
                  >
                    Edit
                  </Link>
                  <div
                    onClick={() => {
                      deleteBook(e["id"]);
                    }}
                    className=" cursor-pointer text-red-500 hover:text-red-300 duration-200 "
                  >
                    Hapus
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
