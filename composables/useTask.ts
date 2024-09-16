import type { Task } from "~/types/task";
const TASK_KEY = Symbol() as InjectionKey<Task & { onDelete?: () => void }>;

export const provideTask = (task: Task, onDelete?: () => void) => {
  provide(TASK_KEY, { ...task, onDelete });
};

export const useTask = () => {
  const task = inject(TASK_KEY);
  if (!task) throw new Error("Provide task first!");
  return task;
};
