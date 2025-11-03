import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGameStore = defineStore('game', () => {
  const score = ref({ user: 0, computer: 0 })
  const alternatives = ref(['sten', 'sax', 'påse'])
  const reset = ref(true)

  const message = ref('Spelar dags!')

  function updateMessage(winner) {
    if (winner === 'user') {
      message.value = 'Du vann!'
    } else if (winner === 'computer') {
      message.value = 'Du förlorade'
    } else {
      message.value = 'Oavgjort!'
    }
  }

  const computerChoise = ref(-1)

  function userChoise(choise) {
    computerChoise.value = Math.floor(Math.random() * alternatives.value.length)
    determineWinner(choise, computerChoise.value)
    reset.value = false
  }
  function determineWinner(user, computer) {
    if (user === computer) {
      updateMessage('draw')
    } else if (user % 2 === computer % 2) {
      if (user > computer) {
        updateMessage('user')
        score.value.user++
      } else {
        updateMessage('computer')
        score.value.computer++
      }
    } else {
      if (user < computer) {
        updateMessage('user')
        score.value.user++
      } else {
        updateMessage('computer')
        score.value.computer++
      }
    }
  }
  function nollStall() {
    score.value.user = 0
    score.value.computer = 0
    message.value = 'Spelar dags!!'
    reset.value = true
  }

  return { score, alternatives, message, computerChoise, userChoise, nollStall, reset }
})
