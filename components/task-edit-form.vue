<template>
  <Modal :size="'sm'">
    <template #trigger>
      <div
        class="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent hover:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
      >
        <Edit3 class="size-4 mr-2" />
        <span>Edit</span>
      </div>
    </template>
    <template #title>
      <div class="font-bold text-lg">Edit Task</div>
    </template>
    <template #description>
      <div class="text-muted-foreground mb-6">
        Make changes to the task here. Click save when you're done.
      </div>
    </template>
    <template v-slot="{ toggle }">
      <div class="space-y-4">
        <div class="space-y-1.5 relative">
          <Label>Title</Label>
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
          <Button @click="save(toggle)" type="button"> Save changes </Button>
        </div>
      </div>
    </template>
  </Modal>
</template>

<script lang="ts" setup>
import Button from "./ui/button.vue";
import { Edit3 } from "lucide-vue-next";
import Label from "./ui/label.vue";
const task = useTask();
const title = ref(task?.title);
const description = ref(task?.description);
const { editTask } = useTaskStore();
const { setToast } = useToast();
const {
  valid,
  titleError,
  descriptionError,
  validateSchema,
  clearDescriptionError,
  clearTitleError,
} = useTaskValidation();

const updatedTask = computed(() => ({
  ...task,
  title: title.value,
  description: description.value,
}));

const save = (toggle: () => void) => {
  validateSchema(updatedTask.value);
  if (valid.value) {
    editTask(updatedTask.value);
    toggle();
    setToast("Task updated", "success");
  }
};
</script>
