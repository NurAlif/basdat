import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateCraftDto } from './dto/create-craft.dto';
import { UpdateCraftDto } from './dto/update-craft.dto';
import { Craft } from './entities/craft.entity';

@Injectable()
export class CraftsService {

  constructor(
    @Inject('craft')
    private craftRepository: Repository<Craft>
  ){}

  create(createCraftDto: CreateCraftDto) {
    return 'This action adds a new craft';
  }

  findAll(): Promise<Craft[]> {
    return this.craftRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} craft`;
  }

  update(id: number, updateCraftDto: UpdateCraftDto) {
    return `This action updates a #${id} craft`;
  }

  remove(id: number) {
    return `This action removes a #${id} craft`;
  }
}
