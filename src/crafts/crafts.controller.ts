import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CraftsService } from './crafts.service';
import { AddPhotoCraftDto } from './dto/addphoto-craft.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CreateCraftDto } from './dto/create-craft.dto';
import { CreateMaterialDto } from './dto/create-material.dto';
import { UpdateCraftDto } from './dto/update-craft.dto';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly craftsService: CraftsService) {}

  @Post()
  create(@Body() create: CreateCategoryDto) {
    return this.craftsService.createCategory(create);
  }

  @Get()
  findAll() {
    return this.craftsService.categories();
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.craftsService.removeCategory(+id);
  }
}

@ApiTags('materials')
@Controller('materials')
export class MaterialsController {
  constructor(private readonly craftsService: CraftsService) {}

  @Post()
  create(@Body() create: CreateMaterialDto) {
    return this.craftsService.createMaterial(create);
  }

  @Get()
  findAll() {
    return this.craftsService.materials();
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.craftsService.removeMaterial(+id);
  }
}

@ApiTags('crafts')
@Controller('crafts')
export class CraftsController {
  constructor(private readonly craftsService: CraftsService) {}

  @Post()
  create(@Body() createCraftDto: CreateCraftDto) {
    return this.craftsService.create(createCraftDto);
  }

  @Get()
  findAll() {
    return this.craftsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.craftsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCraftDto: UpdateCraftDto) {
    return this.craftsService.update(+id, updateCraftDto);
  }

  @Post('addphoto')
  addphoto(@Body() addPhotoCraftDto: AddPhotoCraftDto) {
    return this.craftsService.addPhoto(addPhotoCraftDto);
  }

  @Post('removephoto')
  removephoto(@Body() addPhotoCraftDto: AddPhotoCraftDto) {
    return this.craftsService.removePhoto(addPhotoCraftDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.craftsService.remove(+id);
  }
}
