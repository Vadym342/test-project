import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config();

export const seedConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [path.join(__dirname, '..', '**/*.entity{.ts,.js}')],
  migrations: [path.join(__dirname, '..', 'database/seeds/*{.ts,.js}')],
  migrationsTableName: 'seeds',
  logging: true,
};

export const seedingDataSource: DataSource = new DataSource(seedConfig);
