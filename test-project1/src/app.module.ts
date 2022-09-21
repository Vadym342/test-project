import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UnitsModule } from './models/units/units.module';
import { ResidentsModule } from './models/residents/residents.module';
import { AppartmentsModule } from './models/appartments/appartments.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Unit } from './models/units/entities/unit.entity';
import { Appartment } from './models/appartments/entity/appartment.entity';
import { Resident } from './models/residents/entities/resident.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: +configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        entities: [Unit, Appartment, Resident],
        autoLoadModels: true,
        synchronize: true,
      }),
    }),
    UnitsModule,
    ResidentsModule,
    AppartmentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
