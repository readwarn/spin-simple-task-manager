<template>
  <div class="pt-20">
    <div class="container">
      <div class="flex justify-end">
        <Button :variant="'outline'">
          <NuxtLink to="/add-task"> Add new task </NuxtLink>
        </Button>
      </div>
      <TaskList :tasks="tasks" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from "~/components/ui/button.vue";
const { tasks } = useTaskStore();
</script>
