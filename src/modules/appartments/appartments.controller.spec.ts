import { Test, TestingModule } from '@nestjs/testing';
import { AppartmentsController } from './appartments.controller';

describe('AppartmentsController', () => {
  let controller: AppartmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppartmentsController],
    }).compile();

    controller = module.get<AppartmentsController>(AppartmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
