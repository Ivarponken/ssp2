<script setup>
import { useGameStore } from '@/stores/gameStore'

function nollstall() {
  useGameStore().nollStall()
}
</script>

<template>
  <button class="nollstall" @click="nollstall">Nollställ</button>
</template>

<style scoped>
.nollstall {
  display: block;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  margin: auto;
  font-family: 'Press Start 2P', cursive;
  text-shadow:
    2px 2px 0 gray,
    4px 4px 0 gray;
}

@media (max-width: 699px) {
  .nollstall {
    font-size: 1.8rem;
    padding: 0.8rem 1.2rem;
    width: 90%;
    margin: 1rem auto;
  }
}
button:hover {
  background-color: lightcoral;
  color: aliceblue;
}
</style>
