import { AuthService } from './../../services/auth.service';
import { Resolver, Mutation } from '@nestjs/graphql';
import { Auth } from './auth';

@Resolver(of => Auth)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(returns => Auth)
  async login() {
    console.log('login');
    const token = await this.authService.login('lisa@simpson.de', 'secret42');
    return {
      token
    };
  }
}
