import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppartmentsService } from './appartments.service';
import { CreateAppartmentDto } from './dto/create-appartment.dto';
import { UpdateAppartmentDto } from './dto/update-appartment.dto';

@Controller('appartments')
export class AppartmentsController {
  constructor(private readonly appartmentsService: AppartmentsService) {}

  @Get()
  getAllAppartments() {
    return this.appartmentsService.getAllAppartments();
  }

  @Get(':id')
  getAppartmentById(@Param('id') id: string) {
    return this.appartmentsService.getAppartmentById(Number(id));
  }

  @Post()
  async createAppartment(@Body() todo: CreateAppartmentDto) {
    return this.appartmentsService.createAppartment(todo);
  }

  @Put(':id')
  async updateAppartment(
    @Param('id') id: string,
    @Body() todo: UpdateAppartmentDto,
  ) {
    return this.appartmentsService.updateAppartment(Number(id), todo);
  }

  @Delete(':id')
  async deleteAppartment(@Param('id') id: string) {
    this.appartmentsService.deleteAppartment(Number(id));
  }
}
