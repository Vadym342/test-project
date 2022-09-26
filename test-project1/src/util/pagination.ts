import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsInt, IsPositive, Max } from 'class-validator';

export class Pagination {
  @IsInt()
  @IsPositive()
  @Transform(({ value }) => Number(value))
  page: number;

  @IsInt()
  @IsPositive()
  @Max(1000)
  @Transform(({ value }) => Number(value))
  pageSize: number;

  @Expose()
  @IsDefined()
  @Transform(({ obj }) => obj.pageSize * (obj.page - 1))
  offset: number;

  @Expose()
  @IsDefined()
  @Transform(({ obj }) => Number(obj.pageSize))
  limit: number;
}

export class Paginated<T> {
  items: T[];
  count: number;
}
