import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
class ResourceInput {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;
}

@InputType()
export class CreateAgentInput {
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

  @Field(() => [ResourceInput])
  resources: ResourceInput[];
}
