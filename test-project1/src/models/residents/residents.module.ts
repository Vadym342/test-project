import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Resident } from './entities/resident.entity';
import { ResidentsController } from './residents.controller';
import { ResidentsService } from './residents.service';

@Module({
  imports: [TypeOrmModule.forFeature([Resident])],
  controllers: [ResidentsController],
  providers: [ResidentsService],
})
export class ResidentsModule {}
