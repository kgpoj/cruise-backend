import { CreateAgentInput } from './create-agent.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateAgentInput extends PartialType(CreateAgentInput) {
  @Field(() => ID)
  id: string;
}
