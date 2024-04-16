<script lang="ts" setup>
import Heading from '../components/Heading.vue';
import LayoutDefault from '../layouts/LayoutDefault.vue';
import Button from '../components/Button.vue';
import IconChevron from '../components/icons/IconChevron.vue';
</script>

<template>
  <LayoutDefault>
    <div class="py-12 px-6 flex flex-col justify-between h-full">
      <Heading class="text-center">About</Heading>

      <div class="space-y-6">
        <p>
          Tic Tac Go is a game created by
          <a class="underline text-blue" target="_blank" href="https://bento.me/jeevannn">Xenoz</a> ,
          Built this real-time game with
          <a class="underline text-blue" target="_blank" href="https://supabase.com">supabase</a> and
          <a class="underline text-blue" target="_blank" href="https://vuejs.org">Vue.js</a>
        </p>

        <p>
          CheckOut Source Code
          <a class="underline text-blue" href="https://github.com/jeevannn0" target="_blank"
            >Github</a
          >
        </p>
      </div>

      <div class="flex justify-between">
        <Button as="router-link" to="/" theme="secondary"><IconChevron class="h-5 rotate-180 mr-2" /> Back</Button>
      </div>
    </div>
  </LayoutDefault>
</template>

<style scoped></style>
