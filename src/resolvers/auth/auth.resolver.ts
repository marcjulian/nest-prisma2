import { AuthService } from './../../services/auth.service';
import { Resolver, Mutation, ResolveProperty, Parent } from '@nestjs/graphql';
import { Auth } from './auth';

@Resolver(of => Auth)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(returns => Auth)
  async login() {
    const token = await this.authService.login('lisa@simpson.de', 'secret42');
    return {
      token
    };
  }

  @ResolveProperty()
  async user(@Parent() auth: Auth) {
    return await this.authService.getUserFromToken(auth.token);
  }
}
