import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@Inject('user') private userRepository: Repository<User> ){}

  create(createUserDto: CreateUserDto) {
    const user = this.userRepository.save(createUserDto);

    return user;
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
      const user = await this.userRepository.findOne(id);
      return user;
  }

  async update(user: User) {
    return this.userRepository.save(user); 
  }

  async remove(user: User) {
    return this.userRepository.remove(user);
  }
}
