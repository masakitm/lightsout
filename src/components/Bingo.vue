<template>
  <div>
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
export default {
  methods: {
    clicked (num) {
      this.$store.dispatch('clicked', num)
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
    transition: 0.14s;
    border-radius: 3px;
    cursor: pointer;
    transform:perspective(600px) rotateX(180deg);

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
      transform:perspective(600px) rotateX(0deg);
    }
  }

  @media only screen and (orientation: portrait){
    &{
      width: calc(18vw * 5 + 20px;
    }
    &__single{
      width: 18vw;
      height: 18vw;

      &:hover{
        opacify: 1;
      }
    }
  }
}
</style>
