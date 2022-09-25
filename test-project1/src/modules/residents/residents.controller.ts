import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import CreateResidentDto from './dto/create-resident.dto';
import UpdateResidentDto from './dto/update-resident.dto';
import { ResidentsService } from './residents.service';

@Controller('residents')
export class ResidentsController {
  constructor(private readonly residentsService: ResidentsService) {}

  @Get()
  getAllResidents() {
    return this.residentsService.getAllResidents();
  }

  @Get(':id')
  getResidentById(@Param('id') id: string) {
    return this.residentsService.getResidentById(id);
  }

  @Post()
  async createResident(@Body() todo: CreateResidentDto) {
    return this.residentsService.createResident(todo);
  }

  @Put(':id')
  async updateResident(
    @Param('id') id: string,
    @Body() todo: UpdateResidentDto,
  ) {
    return this.residentsService.updateResident(id, todo);
  }

  @Delete(':id')
  async deleteResident(@Param('id') id: string) {
    this.residentsService.deleteResident(id);
  }
}
