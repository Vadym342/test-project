import { Resident } from '../../modules/residents/entities/resident.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class FillResidentsTable1664368334274 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(Resident).insert([
      {
        residentId: 'e74ad41b-a1e0-4b59-b78e-1ac82c55f579',
        name: 'Resident seed 1',
        appartment: { appartmentId: 'c2e177d7-56a5-4aac-a755-cb733aed83ef' },
      },
      {
        residentId: '5afa8cab-08a5-4fe9-b482-597455b9594b',
        name: 'Resident seed 2',
        appartment: { appartmentId: '1517e75b-f286-44c1-b502-15f1ff765038' },
      },
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(Resident).clear();
  }
}
