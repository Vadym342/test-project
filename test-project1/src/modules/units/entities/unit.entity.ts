import { Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Appartment } from '../../appartments/entities/appartment.entity';

@Entity({ name: 'units' })
export class Unit {
  @PrimaryGeneratedColumn('uuid')
  unitId: string;

  @ApiProperty()
  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @OneToMany(() => Appartment, (appartment) => appartment.unit)
  appartments: Appartment[];
}
