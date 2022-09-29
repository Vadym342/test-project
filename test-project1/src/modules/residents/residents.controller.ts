import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ResidentsService } from './residents.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateResidentDto } from './dto/create-resident.dto';
import { UpdateResidentDto } from './dto/update-resident.dto';
@ApiTags('Residents')
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
  async createResident(@Body() resident: CreateResidentDto) {
    return this.residentsService.createResident(resident);
  }

  @Put(':id')
  async updateResident(@Param('id') id: string, @Body() resident: UpdateResidentDto) {
    return this.residentsService.updateResident(id, resident);
  }

  @Delete(':id')
  async deleteResident(@Param('id') id: string) {
    this.residentsService.deleteResident(id);
  }
}
