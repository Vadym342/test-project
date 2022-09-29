import { IsString, IsNotEmpty, Length } from 'class-validator';

export class CreateResidentDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 20)
  name: string;
}
