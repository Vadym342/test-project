import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateAppartmentDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 20)
  name: string;
}

export default CreateAppartmentDto;
