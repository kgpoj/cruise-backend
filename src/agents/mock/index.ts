import {
  Agent,
  AgentType,
  Availability,
  Resource,
  ResourceName,
} from '../entities/agent.entity';

export const mockAgentsData: Agent[] = [
  {
    id: '1',
    name: 'Agent 1',
    iconUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    ipAddress: '192.168.1.102',
    availability: Availability.building,
    agentType: AgentType.physical,
    resources: [
      {
        id: '1',
        name: ResourceName.firefox,
      },
      {
        id: '2',
        name: ResourceName.chrome,
      },
      {
        id: '3',
        name: ResourceName.safari,
      },
      {
        id: '4',
        name: ResourceName.ubuntu,
      },
    ],
  },
  {
    id: '2',
    name: 'Agent 2',
    iconUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    ipAddress: '192.168.1.103',
    availability: Availability.idle,
    agentType: AgentType.virtual,
    resources: [
      {
        id: '1',
        name: ResourceName.firefox,
      },
      {
        id: '2',
        name: ResourceName.chrome,
      },
    ],
  },
  {
    id: '3',
    name: 'Agent 3',
    iconUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    ipAddress: '192.168.1.104',
    availability: Availability.building,
    agentType: AgentType.physical,
    resources: [
      {
        id: '1',
        name: ResourceName.firefox,
      },
      {
        id: '2',
        name: ResourceName.chrome,
      },
      {
        id: '3',
        name: ResourceName.safari,
      },
    ],
  },
  {
    id: '4',
    name: 'Agent 4',
    iconUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    ipAddress: '192.168.1.105',
    availability: Availability.idle,
    agentType: AgentType.virtual,
    resources: [
      {
        id: '1',
        name: ResourceName.firefox,
      },
    ],
  },
  {
    id: '5',
    name: 'Agent 5',
    iconUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    ipAddress: '192.168.1.106',
    availability: Availability.building,
    agentType: AgentType.physical,
    resources: [],
  },
  {
    id: '6',
    name: 'Agent 6',
    iconUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    ipAddress: '192.168.1.107',
    availability: Availability.idle,
    agentType: AgentType.virtual,
    resources: [
      {
        id: '4',
        name: ResourceName.ubuntu,
      },
    ],
  },
  {
    id: '7',
    name: 'Agent 7',
    iconUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    ipAddress: '192.168.1.108',
    availability: Availability.building,
    agentType: AgentType.physical,
    resources: [
      {
        id: '2',
        name: ResourceName.chrome,
      },
    ],
  },
  {
    id: '8',
    name: 'Agent 8',
    iconUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    ipAddress: '192.168.1.109',
    availability: Availability.idle,
    agentType: AgentType.virtual,
    resources: [
      {
        id: '3',
        name: ResourceName.safari,
      },
    ],
  },
];

export const mockResourcesData: Resource[] = [
  {
    id: '1',
    name: ResourceName.firefox,
  },
  {
    id: '2',
    name: ResourceName.chrome,
  },
  {
    id: '3',
    name: ResourceName.safari,
  },
  {
    id: '4',
    name: ResourceName.ubuntu,
  },
];
