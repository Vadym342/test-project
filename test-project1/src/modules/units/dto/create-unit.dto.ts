import { IsNotEmpty, IsString, Length } from 'class-validator';
export class CreateUnitDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 20)
  name: string;
}
