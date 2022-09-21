import { ApiProperty } from '@nestjs/swagger';
import { Appartment } from 'src/models/appartments/entity/appartment.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Unit {
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty()
  @Column()
  public name: string;

  @OneToMany(() => Appartment, (appartment) => appartment.unit)
  appartment: Appartment[];
}
