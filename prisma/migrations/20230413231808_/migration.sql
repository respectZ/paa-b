-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "penulis" TEXT NOT NULL,
    "jumlah_halaman" INTEGER NOT NULL,
    "penerbit" TEXT,
    "kota_penerbit" TEXT,
    "category_id" INTEGER NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "nama_kategori" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
