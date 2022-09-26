import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from 'src/config/typeorm.config';
import { AppartmentsModule } from '../appartments/appartments.module';
import { ResidentsModule } from '../residents/residents.module';
import { UnitsModule } from '../units/units.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    UnitsModule,
    ResidentsModule,
    AppartmentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
