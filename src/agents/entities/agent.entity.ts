import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Resource {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;
}

@ObjectType()
export class Agent {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  iconUrl?: string;

  @Field()
  ipAddress: string;

  @Field()
  availability: string;

  @Field()
  agentType: string;

  @Field(() => [Resource])
  resources: Resource[];
}
