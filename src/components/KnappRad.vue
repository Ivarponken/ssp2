<script setup>
import { useGameStore } from '@/stores/gameStore'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'

const { alternatives, computerChoise, reset } = storeToRefs(useGameStore())

function setUserChoise(e) {
  for (const button of document.querySelectorAll('button')) {
    button.classList.remove('selected')
  }
  e.target.classList.add('selected')
  let index = alternatives.value.indexOf(e.target.innerText)
  useGameStore().userChoise(index)
}
watch(computerChoise, () => {
  for (let button of document.querySelectorAll('button')) {
    button.classList.remove('computer')
  }
  if (computerChoise.value > -1) {
    let text = alternatives.value[computerChoise.value]
    for (let button of document.querySelectorAll('button')) {
      if (button.innerText === text) {
        button.classList.add('computer')
      }
    }
  }
})
watch(reset, () => {
  if (reset.value) {
    for (let button of document.querySelectorAll('button')) {
      button.classList.remove('selected')
      button.classList.remove('computer')
    }
  }
})
</script>

<template>
  <div class="knapprad">
    <button v-for="knapp in alternatives" :key="knapp" @click="setUserChoise">{{ knapp }}</button>
  </div>
</template>
<style scoped>
.knapprad {
  display: flex;
  gap: 1em;
  justify-content: center;
}
button {
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  margin: auto;
  font-family: 'Press Start 2P', cursive;
  text-shadow:
    2px 2px 0 gainsboro,
    4px 4px 0 gainsboro;
}

@media (max-width: 699px) {
  .knapprad {
    gap: 0.8em;
    flex-direction: column;
    align-items: stretch;
  }
  button {
    font-size: 1.8rem;
    padding: 0.8rem 1.2rem;
    margin: 0.3rem;
  }
}
.selected {
  background-color: yellowgreen;
}
.computer {
  border: 4px solid lightcoral;
}
button:hover {
  background-color: darkgrey;
  color: rgb(19, 187, 103);
}
</style>
