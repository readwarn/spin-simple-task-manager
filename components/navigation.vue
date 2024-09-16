<template>
  <header
    class="flex items-center justify-between px-6 py-2 bg-background shadow-md shadow-gray-200/50 relative"
  >
    <NuxtLink to="/"> Home </NuxtLink>

    <ProfileMenu />
  </header>
</template>

<script lang="ts" setup>
import ProfileMenu from "./profile-menu.vue";
</script>
