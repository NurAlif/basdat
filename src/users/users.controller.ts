import { Controller, Get, Param, Post, Body, Query, NotFoundException, ParseIntPipe } from '@nestjs/common';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './dto/user.entity';
import { UsersService } from './users.service';

@ApiTags('User')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @ApiCreatedResponse({type: User, isArray: true})
  @Get()
  getUsers(): User[] {
    return this.userService.findAll();
  }

  @Get("ok")
  get(@Query("name") name: string, @Query("age") age: number): any {
    return {data: this.userService.findAll(), name : name, age : age};
  }

  @ApiOkResponse({type: User, description: 'the user'})
  @ApiNotFoundResponse()
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number): User {
    const user = this.userService.findById(id);
    
    if(!user) throw new NotFoundException();

    return user;
  }

  @ApiCreatedResponse({type: User})
  @Post()
  createUser(@Body() body: CreateUserDto): User {
    return this.userService.createUser(body.name);
  }
}
