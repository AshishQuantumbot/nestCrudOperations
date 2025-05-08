/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';

@Controller('users')
// export class UsersController {
//   private users: CreateUserDto[] = [];

//   @Post()
//   create(@Body() userData: CreateUserDto) {
//     const duplicateName = this.users.find((u) => u.name === userData.name);
//     const duplicateEmail = this.users.find((u) => u.email === userData.email);
//     if (duplicateName) {
//       throw new BadRequestException('Name already exists');
//     }

//     if (duplicateEmail) {
//       throw new BadRequestException('Email already exists');
//     }

//     this.users.push(userData);
//     return {
//       message: 'User created successfully',
//       user: userData,
//     };
//   }

//   @Get()
//   findAll() {
//     return this.users;
//   }

// }
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(
    @Body() createUserDto: CreateUserDto,
  ): Promise<{ message: string; user: User }> {
    const user = await this.usersService.create(createUserDto);
    return {
      message: 'User created successfully',
      user,
    };
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
