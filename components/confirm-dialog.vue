<template>
  <Modal :size="'sm'">
    <template #trigger>
      <slot name="trigger">
        <div
          class="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent hover:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
        >
          <Trash2 class="size-4 mr-2" />
          <span>Delete</span>
        </div>
      </slot>
    </template>
    <template #title>
      <slot name="title">
        <div class="font-bold text-lg">Delete Task</div>
      </slot>
    </template>
    <template #description>
      <slot name="description">
        <div class="text-muted-foreground mb-6">
          Are you sure you want to delete this task?
        </div>
      </slot>
    </template>
    <template #default="{ toggle }">
      <div>
        <div class="flex justify-end gap-4">
          <Button @click="toggle" :variant="'ghost'">Cancel</Button>
          <Button
            @click="
              () => {
                onConfirm?.(task);
                toggle();
              }
            "
            :variant="'destructive'"
            >Delete</Button
          >
        </div>
      </div>
    </template>
  </Modal>
</template>

<script lang="ts" setup>
import Button from "./ui/button.vue";
import { Trash2 } from "lucide-vue-next";
import type { Task } from "~/types/task";

const props = defineProps<{
  task: Task;
  onConfirm?: (task: Task) => void;
}>();
</script>
