import { ApiProperty } from '@nestjs/swagger';
import { Resident } from './../../residents/entities/resident.entity';
import { Unit } from './../../units/entities/unit.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'appartments' })
export class Appartment {
  @PrimaryGeneratedColumn('uuid')
  appartmentId: string;

  @ApiProperty()
  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @ManyToOne(() => Unit, (unit) => unit.appartments)
  @JoinColumn({
    name: 'unit',
    referencedColumnName: 'unitId',
  })
  unit: Unit;

  @OneToMany(() => Resident, (resident) => resident.appartment)
  residents: Resident[];
}
