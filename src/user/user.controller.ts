import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./user.model"; // Import the User model
import { CommentService } from "src/comment/comment.service";

@Controller("user")
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly commentService: CommentService,
  ) {}

  @Get()
  getAllUser(): User[] {
    return this.userService.getAllUser();
  }

  @Get("posts")
  getUserPost(): string[] {
    return ["post 1", "post 2"];
  }

  @Get(":id/comments")
  findAllCommentsByUser(@Param("id") id: string) {
    return this.commentService.findComments(id);
  }

  @Get(":id")
  findAllFlesh(@Param("id") flesh: string) {
    return flesh;
  }

  // @Get(":id")
  // getUserById(
  //   @Param("id")
  //   id: string,
  // ): User {
  //   return this.userService.getUserById(id);
  // }

  // @Post()
  // create() {
  //   return "Post a new user data here";
  // }

  @Post("new")
  createUser(@Body() newUser: User) {
    return newUser; // this.userService.createUser(newUser);
  }

  @Put(":id")
  updateUser(@Param("id") id: string, @Body() updatedUser: User): User {
    return this.userService.updateUser(id, updatedUser);
  }

  @Delete(":id")
  deleteUser(@Param("id") id: string): User {
    return this.userService.deleteUser(id);
  }
}
