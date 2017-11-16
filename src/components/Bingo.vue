<template>
  <div>
    <transition name="congratsModal">
      <template v-if="this.$store.state.isCleared">
        <div class="congrats">
          <div class="congrats__catch">
            <div class="congratsText">
              Congraturations!
            </div>
            <button @click="reset">Try Again?</button>
          </div>
        </div>
      </template>
    </transition>

    <systemBtns />

    <div class="bingoWrap">
      <div
        class="bingoWrap__single"
        v-for="(item, index) in this.$store.state.buttons"
        :class="{ active: item.isActive }"
        @click="clicked(item.number) + checkList()"
      >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import systemBtns from './systemBtns'

export default {
  data () {
    return {
    }
  },
  components: {
    systemBtns
  },
  methods: {
    clicked (num) {
      let wall = this.$store.state.buttons[num].wall
      let rightBtn = this.$store.state.buttons[num + 1]
      let leftBtn = this.$store.state.buttons[num - 1]
      let topBtn = this.$store.state.buttons[num - 5]
      let bottomBtn = this.$store.state.buttons[num + 5]

      this.$store.state.buttons[num].isActive = !this.$store.state.buttons[num].isActive

      if (wall.indexOf('left') === -1) {
        leftBtn.isActive = !leftBtn.isActive
      }
      if (wall.indexOf('right') === -1) {
        rightBtn.isActive = !rightBtn.isActive
      }
      if (wall.indexOf('top') === -1) {
        topBtn.isActive = !topBtn.isActive
      }
      if (wall.indexOf('bottom') === -1) {
        bottomBtn.isActive = !bottomBtn.isActive
      }
    },
    ...mapActions([
      'reset',
      'cheat',
      'checkList'
    ])
  }
}
</script>

<style lang="scss" scoped>
*{
  box-sizing: border-box;
}

.bingoWrap{
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  display: flex;
  flex-wrap: wrap;
  width: calc(90px * 5 + 20px;
  margin: 0 auto;

  &__single{
    position: relative;
    width: 90px;
    height: 90px;
    background-color: #333;
    margin: 2px;
    font-size: 1.1rem;
    transition: 0.15s;
    border-radius: 3px;
    cursor: pointer;

    &:hover{
      background-color: #444;
    }

    &:after{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.3))
    }

    &.active{
      background-color: #fff;
      color: #fff;
      font-weight: bold;
    }
  }

  @media only screen and (max-width:960px){
    &{
      width: calc(40px * 5 + 20px;
    }
    &__single{
      width: 40px;
      height: 40px;
    }
  }
}

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
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
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
