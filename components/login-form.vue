<template>
  <form
    class="w-[500px] max-w-full mx-auto p-4 md:p-6 rounded-xl border bg-card text-card-foreground shadow"
  >
    <div class="space-y-1.5 mb-4">
      <div class="font-semibold leading-none tracking-tight">Login</div>
      <div class="text-sm text-muted-foreground">
        Enter your username to access your account.
      </div>
    </div>
    <div class="space-y-2 mb-8 relative">
      <Label for="username"> Username </Label>
      <input
        class="form-input"
        v-model="username"
        type="text"
        placeholder="Enter your username"
        @input="error = ''"
      />
      <small
        class="text-destructive animate-in slide-in-from-top-1 absolute -bottom-5"
        v-if="error"
        >{{ error }}</small
      >
    </div>
    <Button class="w-full" @click="logInUser" type="button">Submit</Button>
  </form>
</template>

<script lang="ts" setup>
import Label from "./ui/label.vue";
import Button from "./ui/button.vue";
import { useAuth } from "~/composables/useAuth";
import { z } from "zod";
const username = ref("");
const { logIn } = useAuth();
const error = ref("");
const usernameSchema = z
  .string()
  .min(5, { message: "Username should be at least five characters long" });

const logInUser = () => {
  const message = usernameSchema.safeParse(username.value).error?.issues[0]
    ?.message;

  if (message) {
    error.value = message;
    return;
  }
  logIn(username.value);
};
</script>
