import { Appartment } from '../../modules/appartments/entities/appartment.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class FillAppartmentsTable1664368025009 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(Appartment).insert([
      {
        appartmentId: 'c2e177d7-56a5-4aac-a755-cb733aed83ef',
        name: 'Appartment seed 1',
        unit: { unitId: 'ee58ac3c-661f-4969-9761-e780d3d224d4' },
      },
      {
        appartmentId: '1517e75b-f286-44c1-b502-15f1ff765038',
        name: 'Appartment seed 2',
        unit: { unitId: '5d4832d0-de15-4345-a1fd-ddbe8cf2b2f1' },
      },
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(Appartment).clear();
  }
}
