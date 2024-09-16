import { taskStore } from "~/stores/task.store";

export const useTaskStore = () => {
  const store = taskStore();
  const tasks = computed(() => store.tasks);

  return {
    ...store,
    tasks,
  };
};
