<template>
  <div>
    <div class="font-bold text-lg">Add Task</div>
    <div class="text-muted-foreground mb-6">
      Add title and description and save changes
    </div>

    <div class="space-y-4">
      <div class="space-y-1.5 relative">
        <Label>Titile</Label>
        <input
          type="text"
          class="form-input"
          placeholder="Enter task title"
          v-model="title"
          @input="clearTitleError"
        />
        <small
          class="text-destructive animate-in slide-in-from-top-1 absolute -bottom-5"
          v-if="titleError"
          >{{ titleError }}</small
        >
      </div>
      <div class="space-y-1.5 relative">
        <Label>Description</Label>
        <textarea
          v-model="description"
          placeholder="Enter task description"
          class="form-textarea"
          @input="clearDescriptionError"
        />
        <small
          class="text-destructive animate-in slide-in-from-top-1 absolute -bottom-5"
          v-if="descriptionError"
          >{{ descriptionError }}</small
        >
      </div>
      <div class="flex justify-end">
        <Button @click="addTask" type="button">Add task</Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from "./ui/button.vue";
import Label from "./ui/label.vue";
import { nanoid } from "nanoid";
const title = ref("");
const description = ref("");
const newTask = computed(() => ({
  id: nanoid(),
  title: title.value,
  description: description.value,
  done: false,
}));
const { setToast } = useToast();
const { addNewTask } = useTaskStore();
const {
  valid,
  titleError,
  descriptionError,
  validateSchema,
  clearDescriptionError,
  clearTitleError,
} = useTaskValidation();

const addTask = () => {
  validateSchema(newTask.value);
  if (valid.value) {
    addNewTask(newTask.value);
    setToast("Task added", "success");
    title.value = "";
    description.value = "";
  }
};
</script>
