import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  login(): boolean {
    return true;
  }
  signup(): boolean {
    return true;
  }
}
