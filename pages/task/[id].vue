<template>
  <div class="min-h-screen bg-muted/70">
    <div class="container pt-32">
      <TaskDetails :task="task" :onDelete="redirect" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import TaskDetails from "~/components/TaskDetails.vue";
import { useTaskStore } from "~/composables/useTaskStore";
const { getTaskById } = useTaskStore();

const id = useRoute()?.params?.id;
const task = computed(() => {
  return getTaskById(id as string);
});

const redirect = () => {
  navigateTo("/");
};
</script>
