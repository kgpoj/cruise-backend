import { Injectable } from '@nestjs/common';
import { CreateAgentInput } from './dto/create-agent.input';
import { UpdateAgentInput } from './dto/update-agent.input';
import { mockAgentsData, mockResourcesData } from './mock';
import { Agent } from './entities/agent.entity';

@Injectable()
export class AgentsService {
  private readonly _agents: Agent[];
  constructor() {
    this._agents = mockAgentsData;
  }
  create(createAgentInput: CreateAgentInput) {
    return 'This action adds a new agent';
  }

  findAll() {
    return this._agents;
  }

  findOne(id: number) {
    return `This action returns a #${id} agent`;
  }

  update(id: string, updateAgentInput: UpdateAgentInput) {
    const targetIndex = this._agents.findIndex((agent) => agent.id === id);
    if (targetIndex !== -1) {
      this.updateAgents(targetIndex, updateAgentInput);
    }
    return this._agents[targetIndex];
  }

  private updateAgents(
    targetIndex: number,
    updateAgentInput: UpdateAgentInput,
  ) {
    this._agents[targetIndex] = {
      ...this._agents[targetIndex],
      ...updateAgentInput,
    };
  }

  remove(id: number) {
    return `This action removes a #${id} agent`;
  }

  removeResourceInAgent(agentId: string, resourceId: string) {
    const targetAgent = this._agents.find((agent) => agent.id === agentId);
    this.removeResource(targetAgent, resourceId);
    return targetAgent;
  }

  addResourcesInAgent(agentId: string, resourceIds: string[]) {
    const targetAgent = this._agents.find((agent) => agent.id === agentId);
    this.addResources(targetAgent, resourceIds);
    return targetAgent;
  }

  private addResources(targetAgent: Agent, resourceIds: string[]) {
    const currentResourceIds = targetAgent.resources.map((resource) => resource.id);
    const uniqueIds = Array.from(new Set([...currentResourceIds, ...resourceIds]));
    const newResources = uniqueIds.map((id) => mockResourcesData.find((resource) => resource.id === id));
    targetAgent.resources = newResources;
    }
  private removeResource(targetAgent: Agent, resourceId: string) {
    targetAgent.resources = targetAgent.resources.filter(
      (resource) => resource.id !== resourceId,
    );
  }
}
