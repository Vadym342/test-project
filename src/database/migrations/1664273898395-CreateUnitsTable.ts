import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUnitsTable1664273898395 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "units" ("unitId" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_c32ae183c9a49b7e0845f09a912" PRIMARY KEY ("unitId"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "units"`);
  }
}
