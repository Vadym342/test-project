import { ApiProperty } from '@nestjs/swagger';
import { Appartment } from 'src/models/appartments/entity/appartment.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Resident {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ManyToOne(() => Appartment, (appartment) => appartment.resident)
  appartment: Appartment;
}
