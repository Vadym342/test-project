import { ApiProperty } from '@nestjs/swagger';
import { Appartment } from 'src/modules/appartments/entity/appartment.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Unit {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ApiProperty()
  @Column({name:'name', type: 'varchar'})
  name: string;

  @OneToMany(() => Appartment, (appartment) => appartment.unit)
  appartment: Appartment[];
}
