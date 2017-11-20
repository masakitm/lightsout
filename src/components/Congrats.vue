<template>
  <transition name="congratsModal">
    <template v-if="this.$store.state.isCleared">
      <div class="congrats">
        <div class="congrats__catch">
          <div class="congratsText">
            Congraturations!
          </div>
          <button @click="reset()">Try Again?</button>
        </div>
      </div>
    </template>
  </transition>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: mapActions([
    'reset',
    'randomStart'
  ])
}
</script>

<style lang="scss" scoped>
.congrats{
  background-color: rgba(255, 255, 255, 0.8);
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &__catch {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &Text{
    color: #333;
    font-size: 5rem;
    font-weight: bold;
    margin-bottom: 1.5rem;

    @media only screen and (max-width:960px){
      &{
        font-size: 2rem;
      }
    }
  }
}

.congratsModal-enter-active{
  animation: congratsModal-in 1.5s;
}
.congratsModal-leave-active {
  animation: congratsModal-in .5s reverse;
}
@keyframes congratsModal-in {
  0% {
    transform: scale(0);
  }
  25% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
