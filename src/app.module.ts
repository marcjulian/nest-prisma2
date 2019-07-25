import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { AppResolver } from './resolvers/app.resolver';
import { AuthModule } from './resolvers/auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: './src/schema.graphql',
      debug: true,
      playground: true,
      context: ({ req }) => ({ req })
    }),
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver]
})
export class AppModule {}
