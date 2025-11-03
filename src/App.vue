<script setup>
import KnappRad from './components/KnappRad.vue'
import NollStall from './components/NollStall.vue'
import PoangRad from './components/PoangRad.vue'
import ResultatRad from './components/ResultatRad.vue'
</script>

<template>
  <header>
    <h1>Sten, sax, påse</h1>
    <p class="revisited">Revisited</p>
  </header>
  <br />

  <KnappRad />
  <br />
  <ResultatRad />
  <PoangRad />
  <br />

  <NollStall />
</template>

<style scoped>
header {
  line-height: 1.5;
}
.revisited {
  text-shadow: 2px 2px 0 darkgray;
  color: gold;
}
</style>
