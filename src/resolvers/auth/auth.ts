import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Auth {
  @Field({ description: 'JWT Beare token' })
  token: string;
}
