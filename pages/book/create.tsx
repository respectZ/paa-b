import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Create() {
  const [Data, SetData] = useState({
    nama: "",
    penulis: "",
    penerbit: "",
    kota_penerbit: "",
    jumlah_halaman: 0,
    category_id: 1,
  });
  const [Category, SetCategory] = useState([]);

  const handleSubmit = () => {
    axios.post("http://localhost:3000/api/book", Data).then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    axios.get("http://localhost:3000/api/category").then((res) => {
      SetCategory(res.data.data);
    });
  }, []);

  return (
    <div className="bg-gradient-to-br from-amber-300 to-rose-500 flex justify-center items-center w-full h-screen">
      <div className=" text-neutral-700 w-[30rem] h-[35rem] rounded-2xl flex flex-col bg-white">
        <h1 className="text-4xl my-4 self-center">Tambah Buku</h1>
        <div className="flex flex-col mx-16 my-1">
          <p>Judul Buku</p>
          <input
            className="outline-none py-1 bg-white rounded-md px-1 text-neutral-700 placeholder:text-neutral-300 border border-teal-300 "
            onChange={(e) => SetData({ ...Data, nama: e.target.value })}
            value={Data.nama}
            name="nama"
          ></input>
        </div>
        <div className="flex flex-col mx-16 my-1">
          <p>Penerbit</p>
          <input
            className="outline-none py-1 bg-white rounded-md px-1 text-neutral-700 placeholder:text-neutral-300 border border-teal-300 "
            onChange={(e) => SetData({ ...Data, penerbit: e.target.value })}
            value={Data.penerbit}
            name="penerbit"
          ></input>
        </div>
        <div className="flex flex-col mx-16 my-1">
          <p>Penulis</p>
          <input
            className="outline-none py-1 bg-white rounded-md px-1 text-neutral-700 placeholder:text-neutral-300 border border-teal-300 "
            onChange={(e) => SetData({ ...Data, penulis: e.target.value })}
            value={Data.penulis}
            name="penulis"
          ></input>
        </div>
        <div className="flex flex-col mx-16 my-1">
          <p>Kota Penerbit</p>
          <input
            className="outline-none py-1 bg-white rounded-md px-1 text-neutral-700 placeholder:text-neutral-300 border border-teal-300 "
            onChange={(e) =>
              SetData({ ...Data, kota_penerbit: e.target.value })
            }
            value={Data.kota_penerbit}
            name="kota_penerbit"
          ></input>
        </div>
        <div className="flex flex-col mx-16 my-1">
          <p>Jumlah Halaman</p>
          <input
            className="outline-none py-1 bg-white rounded-md px-1 text-neutral-700 placeholder:text-neutral-300 border border-teal-300 "
            onChange={(e) =>
              SetData({ ...Data, jumlah_halaman: parseInt(e.target.value) })
            }
            value={Data.jumlah_halaman}
            name="jumlah_halaman"
          ></input>
        </div>
        <div className="flex flex-col mx-16 my-1">
          <p>Kategori</p>
          <select
            className="outline-none py-1 bg-white rounded-md px-1 text-neutral-700 placeholder:text-neutral-300 border border-teal-300 "
            onChange={(e) =>
              SetData({ ...Data, category_id: parseInt(e.target.value) })
            }
          >
            {Category.map((e, i) => (
              <option key={i} className="" value={e["id"]}>
                {e["nama_kategori"]}
              </option>
            ))}
          </select>
        </div>
        <div
          onClick={handleSubmit}
          className="w-[10rem] rounded-md bg-teal-600 text-white hover:bg-white hover:shadow-md hover:text-teal-600 duration-200 py-1 self-center my-2 cursor-pointer text-center text-2xl"
        >
          Submit
        </div>
      </div>
    </div>
  );
}
