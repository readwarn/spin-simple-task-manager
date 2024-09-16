<template>
  <div
    class="w-[550px] max-w-full aspect-square mx-auto bg-background rounded-lg"
  >
    <TaskCard v-if="task" :task="task" :onDelete="onDelete" />
    <div class="w-full h-full grid place-items-center text-destructive" v-else>
      Invalid Task
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Task } from "~/types/task";
defineProps<{ task?: Task; onDelete: () => void }>();
</script>
