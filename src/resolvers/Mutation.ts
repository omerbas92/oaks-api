import PhaseInput from 'src/types/inputs/PhaseInput';
import TaskInput from 'src/types/inputs/TaskInput';

import * as PhaseService from '../services/PhaseService';
import * as TaskService from '../services/TaskService';

export async function createTask(parent, { data }) {
  return await TaskService.create(data);
}

export async function updateTask(parent, { data }) {
  return await TaskService.update(data);
}

export async function updateTaskIsCompleted(parent, {data}) {
  return await TaskService.updateIsCompleted(data);
}

export async function deleteTask(parent, id: string) {
  return await TaskService.deleteById(id);
}

export async function createPhase(parent, { data }) {
  return await PhaseService.create(data);
}

export async function updatePhase(parent, { data }) {
  return await PhaseService.update(data);
}

export async function deletePhase(parent, id: string) {
  return await PhaseService.deleteById(id);
}