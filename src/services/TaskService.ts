import TaskInput from 'src/types/inputs/TaskInput';
import TaskIsCompletedInput from 'src/types/inputs/TaskIsCompletedInput';
import Db from '../../lib/Db';

export async function findById(id: string) {
  const d = Db.get();
  const q = d.from('task');

  q.select([
    { taskId: 'task_id' },
    { phaseId: 'phase_id' },
    { name: 'name' },
    { isCompleted: 'is_completed' },
  ]);

  q.where('task_id', id);

  return q.first();
}

export async function find() {
  const d = Db.get();
  const q = d.from('task');

  q.select([
    { taskId: 'task_id' },
    { phaseId: 'phase_id' },
    { name: 'name' },
    { isCompleted: 'is_completed' },
  ]);

  return q;
}

export async function create(data: TaskInput) {
  return Db.get()
    .into('task')
    .insert({
      phase_id: data.phaseId,
      name: data.name,
      is_completed: data.isCompleted,
    })
    .then((result) => findById(result[0]));
}

export async function update(data: TaskInput) {
  return Db.get()
    .into('task')
    .update({
      phase_id: data.phaseId,
      name: data.name,
      is_completed: data.isCompleted,
    })
    .where('task_id', data.taskId)
    .then((result) => findById(result[0]));
}

export async function updateIsCompleted(data: TaskIsCompletedInput) {
  // TODO Don't allow if previous phases tasks are not completed

  return Db.get()
    .into('task')
    .update({
      is_completed: data.isCompleted,
    })
    .where('task_id', data.taskId)
    .then(() => findById(data.taskId));
}

export async function deleteById(id: string) {
  return Db.get().into('task').delete().where('task_id', id);
}
