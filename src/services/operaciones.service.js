import { Contenedor } from "../container/main.js";
const conteiner = new Contenedor("./json/data.json");

export async function listTask() {
  const task = await conteiner.listAll();
  return task;
}
export async function addTask(req) {
  const task = {
    title: req.body.title,
    description: req.body.description,
  };
  return await conteiner.save(task);
}
export async function deleteTask(req) {
  const task = await conteiner.delete(req.params.id);
  return task;
}
