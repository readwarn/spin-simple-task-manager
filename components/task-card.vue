<template>
  <div
    class="p-4 shadow-md h-full w-full flex flex-col relative transition-colors"
  >
    <div class="absolute right-4 top-4 cursor-pointer">
      <TaskMenuActions />
    </div>
    <div class="font-medium mb-2">{{ task.title }}</div>
    <div
      class="text-muted-foreground text-sm max-h-[90%] overflow-hidden text-ellipsis line-clamp-[5] leading-6"
    >
      {{ task.description }}
    </div>
    <label
      class="pt-2 border- mt-auto flex items-center justify-end gap-x-2 cursor-pointer"
      :for="task.id"
      @click.stop
    >
      <div class="text-sm">Mark as completed</div>
      <input
        type="checkbox"
        :name="task.id"
        :id="task.id"
        class="h-4 w-4"
        v-model="done"
        @change="() => updateTaskCompletionStatus()"
      />
    </label>
  </div>
</template>

<script lang="ts" setup>
import type { Task } from "~/types/task";
const props = defineProps<{ task: Task; onDelete?: () => void }>();
const done = ref(props?.task?.done);
const task = computed(() => props.task);
provideTask(task.value, props.onDelete);
const { markTaskAsDone } = useTaskStore();
const updateTaskCompletionStatus = () => {
  markTaskAsDone(task.value.id, done.value);
};
</script>
