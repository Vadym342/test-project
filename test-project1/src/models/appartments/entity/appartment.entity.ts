import { ApiProperty } from '@nestjs/swagger';
import { Resident } from 'src/models/residents/entities/resident.entity';
import { Unit } from 'src/models/units/entities/unit.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Appartment {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ManyToOne(() => Unit, (unit) => unit.appartment)
  unit: Unit;

  @OneToMany(() => Resident, (resident) => resident.appartment)
  resident: Resident[];
}
