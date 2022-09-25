import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from 'src/config/typeorm.config';
import { AppartmentsModule } from '../appartments/appartments.module';
import { Appartment } from '../appartments/entity/appartment.entity';
import { Resident } from '../residents/entities/resident.entity';
import { ResidentsModule } from '../residents/residents.module';
import { Unit } from '../units/entities/unit.entity';
import { UnitsModule } from '../units/units.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
      // imports: [ConfigModule],
      // inject: [ConfigService],
      // useFactory: (configService: ConfigService) => ({
      //   type: 'postgres',
      //   host: configService.get('POSTGRES_HOST'),
      //   port: +configService.get('POSTGRES_PORT'),
      //   username: configService.get('POSTGRES_USER'),
      //   password: configService.get('POSTGRES_PASSWORD'),
      //   database: configService.get('POSTGRES_DB'),
      //   entities: [Unit, Appartment, Resident],
      //   autoLoadModels: true,
      //   synchronize: false,
      //   migrations:[
      //     'dist/src/db/migrations/*.js'
      //   ],
      //   cli:{
      //     migrationsDir: 'src/db/migrations'
      //   }
      // }),
    //}),
    UnitsModule,
    ResidentsModule,
    AppartmentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
