<template>
  <transition name="splashAnime">
    <div class="splash" v-if="this.$store.state.splashOpen">
      <div class="splash__text">
        <div class="">
          PUSH BUTTONS
        </div>
        <div class="">
          TO CHANGE THEM ALL WHITE!
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.bgblack{
  background: rgba(0, 0, 0, 0.2);
}
.splash{
  position: fixed;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  z-index: 1000;
  transform: translate(-50%, 0);
  font-size: 3rem;
  font-weight: bold;
  color: #fff;

  &__text{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.splashAnime-enter-active{
  animation: splashAnime-in 5s;
}
.congratsModal-leave-active {
  animation: splashAnime-out 0s;
}
@keyframes splashAnime-in {
  0% {
    left: -100%;
    color: #000;
    animation-timing-function: ease-in;
  }
  5% {
    left: 49%;
  }
  20%{
    color: #000;
  }
  40%{
    color: #fff;
  }
  95% {
    left: 51%;
  }
  100% {
    left: 200%;
  }
}
@keyframes splashAnime-out{
  0%{
    left: -100%;
    color: #fff;
  }
}

</style>
