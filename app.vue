<template>
  <ConfigProvider :use-id="useIdFunction">
    <NuxtLayout>
      <Toast :message="message" :type="type" :showToast="showToast" />
      <NuxtPage />
    </NuxtLayout>
  </ConfigProvider>
</template>

<script lang="ts" setup>
import { ConfigProvider } from "radix-vue";
const useIdFunction = () => useId();
import Toast from "./components/shared/toast.vue";
const { showToast, message, type } = provideToast();
</script>
