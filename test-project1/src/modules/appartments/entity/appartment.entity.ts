import { ApiProperty } from '@nestjs/swagger';
import { Resident } from 'src/modules/residents/entities/resident.entity';
import { Unit } from 'src/modules/units/entities/unit.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Appartment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ApiProperty()
  @Column()
  name: string;

  @ManyToOne(() => Unit, (unit) => unit.appartment)
  unit: Unit;

  @OneToMany(() => Resident, (resident) => resident.appartment)
  resident: Resident[];
}
