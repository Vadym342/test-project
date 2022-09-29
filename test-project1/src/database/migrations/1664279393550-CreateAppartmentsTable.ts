import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAppartmentsTable1664279393550 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "appartments" ("appartmentId" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "unit" uuid, CONSTRAINT "PK_ae83dcfc8d3d790dfe62c164762" PRIMARY KEY ("appartmentId"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "appartments" ADD CONSTRAINT "FK_39b75b193ec1b625fa2564f59d2" FOREIGN KEY ("unit") REFERENCES "units"("unitId") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "appartments" DROP CONSTRAINT "FK_39b75b193ec1b625fa2564f59d2"`);
    await queryRunner.query(`DROP TABLE "appartments"`);
  }
}
