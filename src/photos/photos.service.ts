import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { Photo } from './entities/photo.entity';

@Injectable()
export class PhotosService {
  constructor(@Inject('photo') private photoRepository: Repository<Photo> ){}

  create(createPhotoDto: CreatePhotoDto) : Promise<Photo> {
    return this.photoRepository.save(createPhotoDto);
  }

  findAll(): Promise<Photo[]> {
    return this.photoRepository.find();
  }

  findOne(id: number): Promise<Photo> {
    return this.photoRepository.findOne(id);
  }

  async remove(id: number): Promise<Photo> {
    let photo: Photo = await this.photoRepository.findOne(id);
    return this.photoRepository.remove(photo);
  }
}
