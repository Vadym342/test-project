import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Appartment } from './entities/appartment.entity';
import { CreateAppartmentDto } from './dto/create-appartment.dto';
import { UpdateAppartmentDto } from './dto/update-appartment.dto';

@Injectable()
export class AppartmentsService {
  constructor(
    @InjectRepository(Appartment)
    private appartmentRepository: Repository<Appartment>,
  ) {}

  getAllAppartments() {
    return this.appartmentRepository.find();
  }

  async getAppartmentById(id: string) {
    const appartment = await this.appartmentRepository.findOne({
      where: { appartmentId: id },
    });
    if (appartment) {
      return appartment;
    }
    throw new HttpException('Appartment not found', HttpStatus.NOT_FOUND);
  }

  async createAppartment(Appartment: CreateAppartmentDto) {
    const newAppartment = await this.appartmentRepository.create(Appartment);
    await this.appartmentRepository.save(newAppartment);

    return newAppartment;
  }

  async updateAppartment(id: string, post: UpdateAppartmentDto) {
    await this.appartmentRepository.update(id, post);
    const appartment = await this.appartmentRepository.findOne({
      where: { appartmentId: id },
    });
    if (appartment) {
      return appartment;
    }

    throw new HttpException('Appartment not found', HttpStatus.NOT_FOUND);
  }

  async deleteAppartment(id: string) {
    const deletedAppartment = await this.appartmentRepository.delete(id);
    if (!deletedAppartment.affected) {
      throw new HttpException('Appartment not found', HttpStatus.NOT_FOUND);
    }
  }
}
