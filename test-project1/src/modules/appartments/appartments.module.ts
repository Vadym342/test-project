import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppartmentsController } from './appartments.controller';
import { AppartmentsService } from './appartments.service';
import { Appartment } from './entities/appartment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Appartment])],
  controllers: [AppartmentsController],
  providers: [AppartmentsService],
})
export class AppartmentsModule {}
