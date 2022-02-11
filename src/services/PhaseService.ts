import PhaseInput from 'src/types/inputs/PhaseInput';
import Db from '../../lib/Db';

export async function findById(id: string) {
  const d = Db.get();
  const q = d.from('phase');

  q.select([
    { phaseId: 'phase_id' },
    { name: 'name' },
    { order: 'order' },
  ]);

  q.where('phase_id', id);

  return q.first();
}

export async function find() {
  const d = Db.get();
  const q = d.from('phase');

  q.select([
    { phaseId: 'phase_id' },
    { name: 'name' },
    { order: 'order' },
  ]);

  return q;
}

export async function create(data: PhaseInput) {
  return Db.get()
    .into('phase')
    .insert({
      name: data.name,
      order: data.order,
    })
    .then((result) => findById(result[0]));
}

export async function update(data: PhaseInput) {
  return Db.get()
    .into('phase')
    .update({
      name: data.name,
      order: data.order,
    })
    .where('task_id', data.phaseId)
    .then((result) => findById(result[0]));
}

export async function deleteById(id: string) {
  return Db.get().into('phase').delete().where('phase_id', id);
}
