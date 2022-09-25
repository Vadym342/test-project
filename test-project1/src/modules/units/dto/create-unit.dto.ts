import { Length } from "class-validator";

export class CreateUnitDto {
  @Length(1, 20)
  name: string;
}

export default CreateUnitDto;
