import { Injectable } from "@nestjs/common";
import { User } from "./user.model";

@Injectable()
export class UserService {
  deleteUser(id: string): User {
    const userToDelete = this.getUserById(id);
    return userToDelete ? userToDelete : null;
  }
  noble = new User(
    "1",
    "noble",
    "chukwukere",
    "noble@gmail.com",
    25,
    "555 810 650 6762",
  );
  updateUser(id: string, updatedUser: User): User {
    // throw new Error('Method not implemented.');
    return;
  }
  getAllUser(): User[] {
    return [this.noble];
  }

  getUserById(id: string): User {
    const user = this.getAllUser().filter((u) => u.id === id);

    return user ? user[0] : null;
  }
  createUser(newUser: User): User {
    return newUser;
  }
}
