import { GqlAuthGuard } from './../../guard/gql-auth.guard';
import { PhotonService } from './../../services/photon.service';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './../../services/auth.service';
import { PasswordService } from './../../services/password.service';
import { UserService } from './../../services/user.service';
import { authConstants } from './../../common/auth/constants';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: authConstants.jwtSecret
    })
  ],
  providers: [
    JwtStrategy,
    AuthResolver,
    AuthService,
    UserService,
    PasswordService,
    PhotonService,
    GqlAuthGuard
  ],
  exports: [GqlAuthGuard]
})
export class AuthModule {}
