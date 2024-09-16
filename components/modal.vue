<template>
  <DialogRoot v-model:open="modal_open" :default-open="open">
    <DialogTrigger as-child>
      <slot name="trigger">
        <Button :variant="'outline'">Open</Button>
      </slot>
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay
        class="bg-foreground/70 data-[state=open]:animate-overlayShow fixed inset-0 z-10"
      />
      <DialogContent
        class="[&[data-state='open']_.content]:animate-contentShow [&[data-state='open']_.header]:slide-in-from-top-1"
      >
        <div :class="modal_variants({ size })">
          <div>
            <DialogTitle>
              <slot name="title">
                <div class="sr-only">Modal Title</div>
              </slot>
            </DialogTitle>

            <DialogDescription>
              <slot name="description">
                <div class="sr-only">Modal Description</div>
              </slot>
            </DialogDescription>

            <slot :toggle>Modal Content</slot>
          </div>

          <DialogClose
            class="text-foreground/60 hover:bg-foreground/10 focus:shadow-foreground/50 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
            v-if="showClose"
          >
            <X />
          </DialogClose>
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<script setup lang="ts">
import { X } from "lucide-vue-next";
import Button from "./ui/button.vue";
import { cva } from "class-variance-authority";

const modal_variants = cva(
  "content fixed top-[50%] left-[50%] w-[98vw] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-background p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[51]",
  {
    variants: {
      size: {
        xl: "max-w-[4xl] max-h-[95vh]",
        lg: "max-w-3xl max-h-[85vh]",
        md: "max-w-xl max-h-[75vh]",
        sm: "max-w-[500px] max-h-[55vh]",
      },
    },
    defaultVariants: {
      size: "lg",
    },
  }
);

const props = withDefaults(
  defineProps<{
    showClose?: boolean;
    size?: "xl" | "lg" | "md" | "sm";
    open?: boolean;
  }>(),
  { showClose: true, size: "md", open: false }
);

const modal_open = ref(false);
const toggle = () => {
  modal_open.value = !modal_open.value;
};
</script>
