import { Injectable } from "@nestjs/common";
import { User, Bookmark } from "@prisma/client";

@Injectable({})
export class AuthService {
  login(): boolean {
    return true;
  }
  signup(): boolean {
    return true;
  }
}
