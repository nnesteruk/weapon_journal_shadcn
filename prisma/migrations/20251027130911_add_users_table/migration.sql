-- AlterTable
ALTER TABLE "case_record" ALTER COLUMN "payment_deadline" DROP NOT NULL,
ALTER COLUMN "payment_deadline" SET DATA TYPE TIMESTAMP(3);
