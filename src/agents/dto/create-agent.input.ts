import { InputType, Field, ID } from '@nestjs/graphql';
import {
  AgentType,
  Availability,
  ResourceName,
} from '../entities/agent.entity';

@InputType()
class ResourceInput {
  @Field(() => ID)
  id: string;

  @Field(() => ResourceName)
  name: ResourceName;
}

@InputType()
export class CreateAgentInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  iconUrl?: string;

  @Field()
  ipAddress: string;

  @Field(() => Availability, { defaultValue: Availability.idle })
  availability: Availability;

  @Field(() => AgentType, { defaultValue: AgentType.physical })
  agentType: AgentType;

  @Field(() => [ResourceInput])
  resources: ResourceInput[];
}
