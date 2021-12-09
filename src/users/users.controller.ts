import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { NotFoundError } from 'rxjs';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiCreatedResponse({type:User})
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @ApiCreatedResponse({type:User})
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number){
    return this.findOneItem(id);
  }

  @ApiCreatedResponse({type:User})
  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {

    const user = await this.findOneItem(id);

    if(updateUserDto.name) user.name = updateUserDto.name;
    if(updateUserDto.email) user.email = updateUserDto.email;
    if(updateUserDto.password) user.password = updateUserDto.password;
    if(updateUserDto.phone) user.phone = updateUserDto.phone;
    if(updateUserDto.role) user.role = updateUserDto.role;
    if(updateUserDto.disabled != null) user.disabled = updateUserDto.disabled;

    return this.usersService.update(user);
  }

  @ApiCreatedResponse({type:User})
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    const user = await this.findOneItem(id)
    return this.usersService.remove(user);
  }

  @ApiNotFoundResponse()
  async findOneItem(id: number): Promise<User>{
    const user = await this.usersService.findOne(+id);
    if(!user)
      throw new NotFoundException();
    return user;
  }
}
