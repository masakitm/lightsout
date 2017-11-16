<template>
  <div id="app">
    <HeaderParts />
    <Bingo />
  </div>
</template>

<script>
import HeaderParts from './components/HeaderParts'
import Bingo from './components/Bingo'

export default {
  name: 'app',
  components: {
    Bingo,
    HeaderParts
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html,body{
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: linear-gradient(-135deg, #E4A972, #9941D8);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
button{
  background: #333;
  color: #fff;
  border: none;
  font-weight: bold;
  font-size: 0.7rem;
  padding:0.5rem;
  cursor: pointer;
}
</style>
