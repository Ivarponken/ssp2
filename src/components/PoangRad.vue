<script setup>
import { useGameStore } from '@/stores/gameStore'
import { storeToRefs } from 'pinia'

const { score } = storeToRefs(useGameStore())
</script>

<template>
  <p class="poangrad">
    <span>{{ score.user }}</span> -
    <span>{{ score.computer }}</span>
  </p>
</template>

<style scoped>
.poangrad {
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  font-family: 'Press Start 2P', cursive;
}
</style>
