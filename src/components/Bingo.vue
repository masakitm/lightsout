<template>
  <div>
    <div class="bingoWrap">
      <div
        class="bingoWrap__single"
        v-for="(item, index) in buttons"
        :class="{ active: item.isActive }"
        @click="clicked(item.number)"
      >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      buttons: [
        { number: 0, isActive: false, wall: ['top', 'left'] },
        { number: 1, isActive: false, wall: ['top'] },
        { number: 2, isActive: false, wall: ['top'] },
        { number: 3, isActive: false, wall: ['top'] },
        { number: 4, isActive: false, wall: ['top', 'right'] },
        { number: 5, isActive: false, wall: ['left'] },
        { number: 6, isActive: false, wall: [] },
        { number: 7, isActive: false, wall: [] },
        { number: 8, isActive: false, wall: [] },
        { number: 9, isActive: false, wall: ['right'] },
        { number: 10, isActive: false, wall: ['left'] },
        { number: 11, isActive: false, wall: [] },
        { number: 12, isActive: false, wall: [] },
        { number: 13, isActive: false, wall: [] },
        { number: 14, isActive: false, wall: ['right'] },
        { number: 15, isActive: false, wall: ['left'] },
        { number: 16, isActive: false, wall: [] },
        { number: 17, isActive: false, wall: [] },
        { number: 18, isActive: false, wall: [] },
        { number: 19, isActive: false, wall: ['right'] },
        { number: 20, isActive: false, wall: ['left', 'bottom'] },
        { number: 21, isActive: false, wall: ['bottom'] },
        { number: 22, isActive: false, wall: ['bottom'] },
        { number: 23, isActive: false, wall: ['bottom'] },
        { number: 24, isActive: false, wall: ['right', 'bottom'] }
      ]
    }
  },
  methods: {
    clicked (num) {
      let wall = this.buttons[num].wall
      let rightBtn = this.buttons[num + 1]
      let leftBtn = this.buttons[num - 1]
      let topBtn = this.buttons[num - 5]
      let bottomBtn = this.buttons[num + 5]

      this.buttons[num].isActive = !this.buttons[num].isActive

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

      this.check()
    },
    reset () {
      for (let i = 0; i < this.buttons.length; i++) {
        this.buttons[i].isActive = false
      }
    },
    check () {
      let checkList = this.buttons.map(obj => obj.isActive)

      if (checkList.indexOf('false') !== -1) {
        console.log('congrats!')
      } else {
        console.log('undone')
      }
    }
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
    line-height: 100px;
    background-color: #333;
    margin: 2px;
    font-size: 1.1rem;
    transition: 0.15s;
    border-radius: 3px;

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
      background-color: #00bbdd;
      color: #fff;
      font-weight: bold;
    }
  }
}


</style>
