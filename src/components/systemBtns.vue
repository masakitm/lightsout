<template>
  <div class="systemBtns">
    <button @click="splashOpen()">Rules</button>
    <button @click="randomStart()">Random</button>
    <button @click="reset()">Reset</button>
    <button @click="cheat()">Cheat!</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'reset',
      'cheat',
      'randomStart',
      'splashOpen'
    ])
  }
}
</script>

<style lang="scss" scoped>
.systemBtns{
  position: absolute;
  top: 0;
  right: 1rem;
}
</style>
