import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UpdateUnitDto } from './dto/update-unit.dto';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UnitsService } from './units.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Units')
@Controller('units')
export class UnitsController {
  constructor(private readonly unitsService: UnitsService) {}

  @Get()
  getAllUnits() {
    return this.unitsService.getAllUnits();
  }

  @Get(':id')
  getUnitById(@Param('id') id: string) {
    return this.unitsService.getUnitById(id);
  }

  @Post()
  async createUnit(@Body() unit: CreateUnitDto) {
    return this.unitsService.createUnit(unit);
  }

  @Put(':id')
  async updatePost(@Param('id') id: string, @Body() unit: UpdateUnitDto) {
    return this.unitsService.updateUnit(id, unit);
  }

  @Delete(':id')
  async deleteUnit(@Param('id') id: string) {
    this.unitsService.deleteUnit(id);
  }
}
