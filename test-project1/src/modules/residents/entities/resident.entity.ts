import { Appartment } from './../../appartments/entities/appartment.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'residents' })
export class Resident {
  @PrimaryGeneratedColumn('uuid')
  residentId: string;

  @ApiProperty()
  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @ManyToOne(() => Appartment, (appartment) => appartment.residents)
  @JoinColumn({
    name: 'appartment',
    referencedColumnName: 'appartmentId',
  })
  appartment: Appartment;
}
