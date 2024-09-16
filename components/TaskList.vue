<template>
  <div class="grid grid-cols-task-gallery gap-6 py-10">
    <div
      class="aspect-[1.2] border rounded-lg shadow-sm hover:border-primary"
      v-for="task in tasks"
      :key="task.id"
    >
      <NuxtLink :to="`/task/${task.id}`">
        <TaskCard :task="task" />
      </NuxtLink>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { Task } from "~/types/task";
defineProps<{ tasks: Task[] }>();
</script>
