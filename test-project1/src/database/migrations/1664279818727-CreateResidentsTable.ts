import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateResidentsTable1664279818727 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "residents" ("residentId" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "appartment" uuid, CONSTRAINT "PK_36f852c7307ae0c2991a749c0f7" PRIMARY KEY ("residentId"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "residents" ADD CONSTRAINT "FK_24ba15f2c916f27bfe902a95631" FOREIGN KEY ("appartment") REFERENCES "appartments"("appartmentId") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "residents" DROP CONSTRAINT "FK_24ba15f2c916f27bfe902a95631"`);
    await queryRunner.query(`DROP TABLE "residents"`);
  }
}
