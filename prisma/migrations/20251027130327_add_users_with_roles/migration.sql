-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- CreateTable
CREATE TABLE "applicant" (
    "id" SERIAL NOT NULL,
    "full_name" VARCHAR(255) NOT NULL,

    CONSTRAINT "applicant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "caliber" (
    "id" SERIAL NOT NULL,
    "category_id" INTEGER NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "caliber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "case_record" (
    "id" SERIAL NOT NULL,
    "case_num" INTEGER NOT NULL,
    "register_date" DATE NOT NULL,
    "applicant_id" INTEGER NOT NULL,
    "ur_or_fiz" BOOLEAN NOT NULL,
    "contract_num" VARCHAR(50) NOT NULL,
    "contract_date" DATE NOT NULL,
    "contract_sum" INTEGER NOT NULL,
    "payment_num" VARCHAR(50) NOT NULL,
    "contract_payment_date" DATE NOT NULL,
    "products_id" INTEGER NOT NULL,
    "answer" INTEGER NOT NULL DEFAULT 0,
    "identif" INTEGER NOT NULL DEFAULT 0,
    "act_identif" INTEGER NOT NULL DEFAULT 0,
    "act_selections" INTEGER NOT NULL DEFAULT 0,
    "ref_for_test" INTEGER NOT NULL DEFAULT 0,
    "decision" INTEGER NOT NULL DEFAULT 0,
    "act_complete_work" INTEGER NOT NULL DEFAULT 0,
    "program_asp_or_po" INTEGER NOT NULL DEFAULT 0,
    "notification" INTEGER NOT NULL DEFAULT 0,
    "refusal" INTEGER NOT NULL DEFAULT 0,
    "refusal_comment" VARCHAR(255),
    "sertif_num" VARCHAR(50),
    "state_application" VARCHAR(50) NOT NULL,
    "performer_id" INTEGER,
    "payment_deadline" DATE NOT NULL, 

    CONSTRAINT "case_record_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "manufacturer" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "country" VARCHAR(100) NOT NULL,

    CONSTRAINT "manufacturer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "model" (
    "id" SERIAL NOT NULL,
    "model_name" VARCHAR(255) NOT NULL,
    "serial_number" VARCHAR(100) NOT NULL,
    "manufacturer_id" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,

    CONSTRAINT "model_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "performer" (
    "id" SERIAL NOT NULL,
    "full_name" VARCHAR(255) NOT NULL,

    CONSTRAINT "performer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "products_type_id" INTEGER NOT NULL,
    "product_category_id" INTEGER NOT NULL,
    "model_id" INTEGER NOT NULL,
    "manufacturer_id" INTEGER NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products_category" (
    "id" SERIAL NOT NULL,
    "products_type_id" INTEGER NOT NULL,
    "category_name" VARCHAR(100) NOT NULL,

    CONSTRAINT "products_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products_type" (
    "id" INTEGER NOT NULL,
    "products_type" TEXT,

    CONSTRAINT "weapon_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "caliber_unique" ON "caliber"("category_id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "manufacturer_unique" ON "manufacturer"("name", "country");

-- CreateIndex
CREATE UNIQUE INDEX "products_unique" ON "products"("model_id", "manufacturer_id", "product_category_id");

-- CreateIndex
CREATE UNIQUE INDEX "category_unique" ON "products_category"("products_type_id", "category_name");

-- CreateIndex
CREATE UNIQUE INDEX "User_login_key" ON "User"("login");

-- AddForeignKey
ALTER TABLE "caliber" ADD CONSTRAINT "caliber_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "products_category"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "case_record" ADD CONSTRAINT "fk_case_applicant" FOREIGN KEY ("applicant_id") REFERENCES "applicant"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "case_record" ADD CONSTRAINT "fk_case_performer" FOREIGN KEY ("performer_id") REFERENCES "performer"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "case_record" ADD CONSTRAINT "fk_case_products" FOREIGN KEY ("products_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "model" ADD CONSTRAINT "fk_model_manufacturer" FOREIGN KEY ("manufacturer_id") REFERENCES "manufacturer"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "fk_products_category" FOREIGN KEY ("product_category_id") REFERENCES "products_category"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "fk_products_manufacturer" FOREIGN KEY ("manufacturer_id") REFERENCES "manufacturer"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "fk_products_model" FOREIGN KEY ("model_id") REFERENCES "model"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "fk_products_type" FOREIGN KEY ("products_type_id") REFERENCES "products_type"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "products_category" ADD CONSTRAINT "fk_category_type" FOREIGN KEY ("products_type_id") REFERENCES "products_type"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
