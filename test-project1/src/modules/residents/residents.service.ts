import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateResidentDto } from './dto/create-resident.dto';
import { UpdateResidentDto } from './dto/update-resident.dto';
import { Resident } from './entities/resident.entity';

@Injectable()
export class ResidentsService {
  constructor(
    @InjectRepository(Resident)
    private residentRepository: Repository<Resident>,
  ) {}

  getAllResidents() {
    return this.residentRepository.find();
  }

  async getResidentById(id: string) {
    const resident = await this.residentRepository.findOne({
      where: { residentId: id },
    });
    if (resident) {
      return resident;
    }
    throw new HttpException('Resident not found', HttpStatus.NOT_FOUND);
  }

  async createResident(Resident: CreateResidentDto) {
    const newResident = await this.residentRepository.create(Resident);
    await this.residentRepository.save(newResident);

    return newResident;
  }

  async updateResident(id: string, rsdt: UpdateResidentDto) {
    await this.residentRepository.update(id, rsdt);
    const resident = await this.residentRepository.findOne({
      where: { residentId: id },
    });
    if (resident) {
      return resident;
    }

    throw new HttpException('Resident not found', HttpStatus.NOT_FOUND);
  }

  async deleteResident(id: string) {
    const deletedResident = await this.residentRepository.delete(id);
    if (!deletedResident.affected) {
      throw new HttpException('Resident not found', HttpStatus.NOT_FOUND);
    }
  }
}
