import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UpdateUnitDto } from './dto/update-unit.dto';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UnitsService } from './units.service';

@Controller('units')
export class UnitsController {
  constructor(private readonly unitsService: UnitsService) {}

  @Get()
  getAllUnits() {
    return this.unitsService.getAllUnits();
  }

  @Get(':id')
  getUnitById(@Param('id') id: string) {
    return this.unitsService.getUnitById(Number(id));
  }

  @Post()
  async createUnit(@Body() todo: CreateUnitDto) {
    return this.unitsService.createUnit(todo);
  }

  @Put(':id')
  async updatePost(@Param('id') id: string, @Body() todo: UpdateUnitDto) {
    return this.unitsService.updateUnit(Number(id), todo);
  }

  @Delete(':id')
  async deleteUnit(@Param('id') id: string) {
    this.unitsService.deleteUnit(Number(id));
  }
}
