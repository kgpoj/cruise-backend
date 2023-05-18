import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql';

export enum Availability {
  building = 'building',
  idle = 'idle',
}
registerEnumType(Availability, {
  name: 'Availability',
});

export enum AgentType {
  physical = 'physical',
  virtual = 'virtual',
}
registerEnumType(AgentType, {
  name: 'AgentType',
});

export enum ResourceName {
  firefox = 'Firefox',
  chrome = 'Chrome',
  safari = 'Safari',
  ubuntu = 'Ubuntu',
}
registerEnumType(ResourceName, {
  name: 'ResourceName',
});

@ObjectType()
export class Resource {
  @Field(() => ID)
  id: string;

  @Field(() => ResourceName)
  name: ResourceName;
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

  @Field(() => Availability, { defaultValue: Availability.idle })
  availability: Availability;

  @Field(() => AgentType, { defaultValue: AgentType.physical })
  agentType: AgentType;

  @Field(() => [Resource])
  resources: Resource[];
}
