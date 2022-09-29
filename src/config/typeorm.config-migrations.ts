import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config();

export const typeOrmConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [path.join(__dirname, '..', '**/*.entity{.ts,.js}')],
  migrations: [path.join(__dirname, '..', 'database/migrations/*{.ts,.js}')],
  synchronize: false,
  logging: true,
};
export const AppDataSource: DataSource = new DataSource(typeOrmConfig);
