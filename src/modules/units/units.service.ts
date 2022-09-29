import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';
import { Unit } from './entities/unit.entity';

@Injectable()
export class UnitsService {
  constructor(@InjectRepository(Unit) private unitRepository: Repository<Unit>) {}

  getAllUnits() {
    return this.unitRepository.find();
  }

  async getUnitById(id: string) {
    const unit = await this.unitRepository.findOne({ where: { unitId: id } });
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

  async updateUnit(id: string, unit: UpdateUnitDto) {
    await this.unitRepository.update(id, unit);
    const updatedUnit = await this.unitRepository.findOne({
      where: { unitId: id },
    });
    if (updatedUnit) {
      return updatedUnit;
    }

    throw new HttpException('Unit not found', HttpStatus.NOT_FOUND);
  }

  async deleteUnit(id: string) {
    const deletedUnit = await this.unitRepository.delete(id);
    if (!deletedUnit.affected) {
      throw new HttpException('Unit not found', HttpStatus.NOT_FOUND);
    }
  }
}
