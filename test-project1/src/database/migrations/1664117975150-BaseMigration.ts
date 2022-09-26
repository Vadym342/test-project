import {MigrationInterface, QueryRunner} from "typeorm";

export class BaseMigration1664117975150 implements MigrationInterface {
    name = 'BaseMigration1664117975150'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "resident" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "appartmentId" uuid, CONSTRAINT "PK_f1a321823d6f69d0e348535fd37" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "appartment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "unitId" uuid, CONSTRAINT "PK_4ba66ffcde56347caf7b1413426" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "unit" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_4252c4be609041e559f0c80f58a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "resident" ADD CONSTRAINT "FK_3f638054b90f0dc1ab0a827ea98" FOREIGN KEY ("appartmentId") REFERENCES "appartment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "appartment" ADD CONSTRAINT "FK_934277883a0cfe547e6b14ff682" FOREIGN KEY ("unitId") REFERENCES "unit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "appartment" DROP CONSTRAINT "FK_934277883a0cfe547e6b14ff682"`);
        await queryRunner.query(`ALTER TABLE "resident" DROP CONSTRAINT "FK_3f638054b90f0dc1ab0a827ea98"`);
        await queryRunner.query(`DROP TABLE "unit"`);
        await queryRunner.query(`DROP TABLE "appartment"`);
        await queryRunner.query(`DROP TABLE "resident"`);
    }

}
