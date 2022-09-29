import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppartmentsService } from './appartments.service';
import { CreateAppartmentDto } from './dto/create-appartment.dto';
import { UpdateAppartmentDto } from './dto/update-appartment.dto';

@ApiTags('Residents')
@Controller('appartments')
export class AppartmentsController {
  constructor(private readonly appartmentsService: AppartmentsService) {}

  @Get()
  getAllAppartments() {
    return this.appartmentsService.getAllAppartments();
  }

  @Get(':id')
  getAppartmentById(@Param('id') id: string) {
    return this.appartmentsService.getAppartmentById(id);
  }

  @Post()
  async createAppartment(@Body() appartment: CreateAppartmentDto) {
    return this.appartmentsService.createAppartment(appartment);
  }

  @Put(':id')
  async updateAppartment(@Param('id') id: string, @Body() appartment: UpdateAppartmentDto) {
    return this.appartmentsService.updateAppartment(id, appartment);
  }

  @Delete(':id')
  async deleteAppartment(@Param('id') id: string) {
    this.appartmentsService.deleteAppartment(id);
  }
}
