import { Unit } from '../../modules/units/entities/unit.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class FillUnitsTable1664367462267 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(Unit).insert([
      {
        unitId: 'ee58ac3c-661f-4969-9761-e780d3d224d4',
        name: 'Unit seed 1',
      },
      {
        unitId: '5d4832d0-de15-4345-a1fd-ddbe8cf2b2f1',
        name: 'Unit seed 2',
      },
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(Unit).clear();
  }
}
