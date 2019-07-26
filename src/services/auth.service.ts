import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';
import { PasswordService } from './password.service';
import { User } from '@generated/photon';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly passwordService: PasswordService
  ) {}

  async login(email: string, password: string): Promise<string> {
    const user = await this.userService.findUserByEmail(email);

    if (!user) {
      throw new Error(`No user found for email: ${email}`);
    }

    const passwordValid = await this.passwordService.validatePassword(
      password,
      user.password
    );

    if (!passwordValid) {
      throw new Error('Invalid password');
    }

    return this.jwtService.sign({ userId: user.id });
  }

  getUserFromToken(token: string): Promise<User> {
    const userId = this.jwtService.decode(token)['userId'];
    return this.userService.findUserById(userId);
  }
}
