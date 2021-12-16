import { Inject, Injectable } from '@nestjs/common';
import { retry } from 'rxjs';
import { Photo } from 'src/photos/entities/photo.entity';
import { PhotosController } from 'src/photos/photos.controller';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { MaterialsController } from './crafts.controller';
import { AddPhotoCraftDto } from './dto/addphoto-craft.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CreateCraftDto } from './dto/create-craft.dto';
import { CreateMaterialDto } from './dto/create-material.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { UpdateCraftDto } from './dto/update-craft.dto';
import { Category } from './entities/category.entity';
import { Craft } from './entities/craft.entity';
import { Material } from './entities/material.entity';

@Injectable()
export class CraftsService {

  constructor(
    @Inject('craft')
    private craftRepository: Repository<Craft>,

    @Inject('category')
    private categoryRepo: Repository<Category>,

    @Inject('material')
    private materialRepo: Repository<Material>,

    @Inject('photo')
    private photoRepo: Repository<Photo>,

    @Inject('user')
    private userRepo: Repository<User>,
  ) { }


  createCategory(createCategoryDto: CreateCategoryDto) {
    return this.categoryRepo.save(createCategoryDto);
  }

  async removeCategory(id: number): Promise<Category> {
    const category = await this.categoryRepo.findOne(id);
    return this.categoryRepo.save(category);
  }

  categories(): Promise<Category[]> {
    return this.categoryRepo.find();
  }



  createMaterial(createMaterialDto: CreateMaterialDto) {
    return this.materialRepo.save(createMaterialDto);
  }

  async removeMaterial(id: number): Promise<Material> {
    const material = await this.materialRepo.findOne(id);
    return this.materialRepo.save(material);
  }

  materials(): Promise<Material[]> {
    return this.materialRepo.find();
  }



  async create(createCraftDto: CreateCraftDto): Promise<Craft> {
    const material: Material = await this.materialRepo.findOne(createCraftDto.material);
    const category: Category = await this.categoryRepo.findOne(createCraftDto.category);
    const user: User = await this.userRepo.findOne(createCraftDto.author);
    const thumbnail: Photo = await this.photoRepo.findOne(createCraftDto.thumbnail);

    var ids: any[] = [];
    createCraftDto.photos.forEach(val => {
      ids.push({ id: val });
    });
    let photos: Photo[] = await this.photoRepo.find({
      where: ids
    });

    let newCraft: Craft = {
      name: createCraftDto.name,
      description: createCraftDto.description,
      material: material,
      author: user,
      thumbnail: thumbnail,
      category: category,
      photos: photos,
    };

    return this.craftRepository.save(newCraft);
  }

  findAll(): Promise<Craft[]> {

    return this.craftRepository.find({
      relations: ['thumbnail', 'photos', 'author', 'material', 'category'],
      where: {
        disabled: false
      }
    });
  }

  async findOne(id: number): Promise<Craft> {
    return await this.craftRepository.findOne(id, { relations: ['thumbnail', 'photos', 'author', 'material', 'category'] });
  }

  async update(id: number, updateCraftDto: UpdateCraftDto): Promise<Craft> {
    let craft: Craft = await this.findOne(id);
    if (updateCraftDto.material) {
      const material: Material = await this.materialRepo.findOne(updateCraftDto.material);
      craft.material = material;
    }

    if (updateCraftDto.category) {
      const category: Category = await this.categoryRepo.findOne(updateCraftDto.category);
      craft.category = category;
    }

    if (updateCraftDto.author) {
      const user: User = await this.userRepo.findOne(updateCraftDto.author);
      craft.author = user;
    }

    if (updateCraftDto.thumbnail) {
      const thumbnail: Photo = await this.photoRepo.findOne(updateCraftDto.thumbnail);
      craft.thumbnail = thumbnail;
    }

    if (updateCraftDto.name) {
      craft.name = updateCraftDto.name;
    }

    if (updateCraftDto.description) {
      craft.description = updateCraftDto.description;
    }

    return this.craftRepository.save(craft);
  }

  async addPhoto(addPhotoCraftDto : AddPhotoCraftDto): Promise<Craft> {
    let craft: Craft = await this.findOne(addPhotoCraftDto.craftId);
    let photo: Photo = await this.photoRepo.findOne(addPhotoCraftDto.photoId);

    craft.photos.push(photo);
    
    return this.craftRepository.save(craft);
  }

  async removePhoto(addPhotoCraftDto : AddPhotoCraftDto): Promise<Craft> {
    let craft: Craft = await this.findOne(addPhotoCraftDto.craftId);

    let index = -1;
    craft.photos.forEach(val => {
      if(val.id === addPhotoCraftDto.photoId){
        index = craft.photos.indexOf(val);
      }
    });
    if(index > -1) craft.photos.splice(index, 1);
    
    return this.craftRepository.save(craft);
  }

  async remove(id: number) {
    let craft: Craft = await this.findOne(id);
    craft.disabled = true;
    return;
  }
}
