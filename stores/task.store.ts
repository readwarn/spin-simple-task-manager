import { defineStore } from "pinia";
import { INITIAL_TASKS } from "../constant/index";
import type { Task } from "~/types/task";

export const taskStore = defineStore("tasks", {
  state() {
    return {
      tasks: INITIAL_TASKS,
    };
  },

  getters: {
    getTaskById: (state) => (id: string) =>
      state.tasks.find((task) => task.id === id),
  },

  actions: {
    addNewTask(task: Task) {
      this.tasks.push(task);
    },

    editTask(task: Task) {
      this.tasks = this.tasks.map((item) =>
        item.id === task.id ? task : item
      );
    },

    deleteTask(task: Task) {
      this.tasks = this.tasks.filter((item) => item.id !== task.id);
    },

    markTaskAsDone(id: string, state: boolean) {
      this.tasks = this.tasks.map((task) => {
        if (task.id === id) task.done = state;
        return task;
      });
    },
  },
  persist: true,
});
