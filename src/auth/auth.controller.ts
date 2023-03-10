import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
    const loggedIn = this.authService.login();
    console.log(loggedIn);
  }
  // /auth/signup
  @Post('signup')
  signup() {
    return this.authService.signup();
  }
  // /auth/signin
  @Post('signin')
  signin() {
    return this.authService.login();
  }
}
