import { Injectable } from "@nestjs/common";

@Injectable()
export class CommentService {
  findComments(id: string) {
    return `the user ${id} made these comments`;
  }
}
