import * as PhaseService from '../services/PhaseService';
import * as TaskService from '../services/TaskService';

export async function returnSingleTask(parent, id: string) {
  return await TaskService.findById(id);
}

export async function returnAllTasks() {
  return await TaskService.find();
}

export async function returnSinglePhase(parent, id: string) {
  return await PhaseService.findById(id);
}

export async function returnAllPhases() {
  return await PhaseService.find();
}
