<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger class="flex gap-x-1 items-center">
      <Ellipsis class="text-muted-foreground size-4" />
    </DropdownMenuTrigger>
    <DropdownMenuPortal>
      <DropdownMenuContent
        class="z-50 min-w-[8rem] text-muted-foreground overflow-hidden rounded-md border bg-popover p-1 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 space-y-1"
      >
        <DropdownMenuItem @select="handleSelect">
          <TaskEditForm />
        </DropdownMenuItem>
        <DropdownMenuItem @select="handleSelect">
          <ConfirmDialog :task="task" v-on:confirm="removeTask" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>

<script lang="ts" setup>
import { Ellipsis } from "lucide-vue-next";
import ConfirmDialog from "./confirm-dialog.vue";
const handleSelect = (e: Event) => {
  e.preventDefault();
};
const { setToast } = useToast();
const task = useTask();
const { deleteTask } = useTaskStore();

const removeTask = () => {
  deleteTask(task);
  setToast("Task deleted", "warning");
  task.onDelete?.();
};
</script>
