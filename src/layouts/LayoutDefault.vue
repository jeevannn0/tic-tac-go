<script setup lang="ts">
import Logo from '../components/Logo.vue';

withDefaults(
  defineProps<{
    showFooter?: boolean;
    animateLogo?: boolean;
  }>(),
  {
    showFooter: true,
    animateLogo: false,
  }
);
</script>

<template>
  <div class="h-full flex flex-col">
    <Logo :animate-in="animateLogo" class="mt-4" />
    <main class="h-full relative">
      <slot />
    </main>
    <footer v-if="showFooter" class="text-center uppercase mb-3">
      <p class="text-white text-xs">Built  by</p>
      <a class="text-blue drop-shadow-blue" href="https://bento.me/jeevannn" target="_blank">Xeonz</a>
    </footer>
  </div>
</template>

<style scoped></style>
