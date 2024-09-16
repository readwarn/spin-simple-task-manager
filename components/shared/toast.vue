<template>
  <div
    :class="[
      'p-4 min-w-[350px] text-background fixed right-0 top-10 transition-all duration-700 ease-in-out z-50',
      type === 'success' && 'bg-primary',
      type === 'warning' && 'bg-orange-500',
      type === 'error' && 'bg-destructive',
      showToast ? '-translate-x-10 opacity-100' : 'translate-x-full opacity-0',
    ]"
  >
    <div class="capitalize font-semibold mb-1">
      {{ type }}
    </div>
    <div>{{ message }}</div>
  </div>
</template>

<script lang="ts" setup>
import type { ToastType } from "~/composables/useToast";

defineProps<{ message: string; type: ToastType; showToast: boolean }>();
</script>
