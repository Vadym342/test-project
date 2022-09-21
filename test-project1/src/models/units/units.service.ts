import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Unit } from './entities/unit.entity';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';

@Injectable()
export class UnitsService {
  constructor(
    @InjectRepository(Unit) private unitRepository: Repository<Unit>,
  ) {}

  getAllUnits() {
    return this.unitRepository.find();
  }

  async getUnitById(id: number) {
    const unit = await this.unitRepository.findOne({ where: { id: id } });
    if (unit) {
      return unit;
    }
    throw new HttpException('Unit not found', HttpStatus.NOT_FOUND);
  }

  async createUnit(unit: CreateUnitDto) {
    const newUnit = await this.unitRepository.create(unit);
    await this.unitRepository.save(newUnit);

    return newUnit;
  }

  async updateUnit(id: number, post: UpdateUnitDto) {
    await this.unitRepository.update(id, post);
    const updatedUnit = await this.unitRepository.findOne({
      where: { id: id },
    });
    if (updatedUnit) {
      return updatedUnit;
    }

    throw new HttpException('Unit not found', HttpStatus.NOT_FOUND);
  }

  async deleteUnit(id: number) {
    const deletedUnit = await this.unitRepository.delete(id);
    if (!deletedUnit.affected) {
      throw new HttpException('Unit not found', HttpStatus.NOT_FOUND);
    }
  }
}
