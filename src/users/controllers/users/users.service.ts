import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UsersService {
  deleteUser(id: string): User {
    throw new Error('Method not implemented.');
  }
  updateUser(id: string, updatedUser: User): User {
    throw new Error('Method not implemented.');
  }
  getAllUsers(): User[] {
    return [new User('1', 'noble', 'chukwukere', 'noble@gmail.com', 25)];
  }
  getUserById(id: string): User {
    throw new Error('Method not implemented.');
  }
  createUser(newUser: User): User {
    throw new Error('Method not implemented.');
  }
}
