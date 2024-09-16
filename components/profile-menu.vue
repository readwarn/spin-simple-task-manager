<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger asChild>
      <Button :variant="'ghost'" class="w-auto h-auto !p-0 !rounded-full">
        <AvatarRoot
          class="bg-muted inline-flex size-[40px] select-pointer items-center justify-center overflow-hidden rounded-full align-middle"
        >
          <AvatarFallback
            class="leading-1 flex h-full w-full items-center justify-center text-[15px] font-medium uppercase"
          >
            {{ initials }}
          </AvatarFallback>
        </AvatarRoot>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuPortal>
      <DropdownMenuContent
        class="z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
      >
        <DropdownMenuItem
          class="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
          @select="logOutUser"
        >
          <LogOut class="size-4 mr-2" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>

<script lang="ts" setup>
import Button from "./ui/button.vue";
import { LogOut } from "lucide-vue-next";
const { logOut: logOutUser, initials } = useAuth();
</script>
