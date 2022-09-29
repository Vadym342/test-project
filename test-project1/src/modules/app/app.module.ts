import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'src/config/typeorm.config-migrations';
import { AppartmentsModule } from '../appartments/appartments.module';
import { ResidentsModule } from '../residents/residents.module';
import { UnitsModule } from '../units/units.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    UnitsModule,
    ResidentsModule,
    AppartmentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
