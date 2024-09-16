import { beforeEach, describe, expect, it } from "vitest";
import type { Task } from "~/types/task";

describe("TaskStore", () => {
  beforeEach(() => {
    const store = taskStore();
    store.$reset();
  });

  it("has right default tasks", () => {
    const store = taskStore();
    expect(store.tasks.length).toBe(4);
  });

  it("can add new task", () => {
    const store = taskStore();
    const newTask: Task = {
      title: "New it task",
      description: "it task description",
      id: "it-task-id",
      done: false,
    };
    store.addNewTask(newTask);
    expect(store.tasks.length).toBe(5);
    const lastTask = store.tasks?.[store.tasks.length - 1];
    expect(lastTask).toEqual(newTask);
  });

  it("can edit new task", () => {
    const store = taskStore();
    const firstTask = store.tasks[0];
    const updatedTask: Task = {
      ...firstTask,
      description: "Updated description",
    };
    store.editTask(updatedTask);
    const updatedFirstTask = store.tasks[0];
    expect(updatedFirstTask).toEqual(updatedTask);
  });

  it("can toggle task as done or not", () => {
    const store = taskStore();
    const newTask: Task = {
      title: "New it task",
      description: "it task description",
      id: "it-task-id",
      done: false,
    };
    store.addNewTask(newTask);
    store.markTaskAsDone(newTask.id, true);
    const storeLatestTask = store.tasks[store.tasks.length - 1];
    expect(storeLatestTask.done).toBe(true);
    store.markTaskAsDone(newTask.id, false);
    const updatedStoreLatestTask = store.tasks[store.tasks.length - 1];
    expect(updatedStoreLatestTask.done).toBe(false);
  });

  it("can get task by ID", () => {
    const store = taskStore();
    const newTask: Task = {
      title: "New it task",
      description: "it task description",
      id: "it-task-id",
      done: false,
    };
    store.addNewTask(newTask);
    const retrivedStore = store.getTaskById(newTask.id);
    expect(retrivedStore).toEqual(newTask);
  });
});
