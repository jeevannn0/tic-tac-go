<script lang="ts" setup>
import { useForm } from 'vee-validate';
import { object, string } from 'yup';
import Heading from '../components/Heading.vue';
import LayoutDefault from '../layouts/LayoutDefault.vue';
import InputText from '../components/InputText.vue';
import Button from '../components/Button.vue';
import IconChevron from '../components/icons/IconChevron.vue';
import { useGameStore } from '../stores/game';

const { newGame } = useGameStore();

const validationSchema = object({
  name: string().required('Player name is required').max(20, 'Player name must be less than 20 characters'),
});

const { errors, values, handleSubmit } = useForm({
  validationSchema,
});

const createGame = handleSubmit(() => {
  newGame(values.name);
});
</script>

<template>
  <LayoutDefault>
    <div class="py-12 px-6 flex flex-col justify-between h-full">
      <Heading class="text-center">New game</Heading>

      <form @submit="createGame">
        <InputText name="name" label="Enter player name:" />
      </form>

      <div class="flex justify-between">
        <Button as="router-link" to="/" theme="secondary"><IconChevron class="h-5 rotate-180 mr-2" /> Back</Button>
        <Button :disabled="!values.name || !!Object.keys(errors).length" @click="createGame"
          >Next <IconChevron class="h-5 ml-2"
        /></Button>
      </div>
    </div>
  </LayoutDefault>
</template>

<style scoped></style>
