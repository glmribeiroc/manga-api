-- CreateTable
CREATE TABLE "manga" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "other_name" TEXT,
    "author" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "release" TEXT NOT NULL,
    "synopsis" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "manga_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "description" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "description_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "manga_description" (
    "id" SERIAL NOT NULL,
    "fk_id_manga" INTEGER NOT NULL,
    "fk_id_description" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "manga_description_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "manga_name_key" ON "manga"("name");

-- CreateIndex
CREATE UNIQUE INDEX "description_name_key" ON "description"("name");

-- AddForeignKey
ALTER TABLE "manga_description" ADD CONSTRAINT "manga_description_fk_id_manga_fkey" FOREIGN KEY ("fk_id_manga") REFERENCES "manga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "manga_description" ADD CONSTRAINT "manga_description_fk_id_description_fkey" FOREIGN KEY ("fk_id_description") REFERENCES "description"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
