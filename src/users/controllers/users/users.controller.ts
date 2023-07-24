import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model'; // Import the User model

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers(): User[] {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string): User {
    return this.usersService.getUserById(id);
  }

  @Post()
  createUser(@Body() newUser: User): User {
    return this.usersService.createUser(newUser);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() updatedUser: User): User {
    return this.usersService.updateUser(id, updatedUser);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string): User {
    return this.usersService.deleteUser(id);
  }
}
