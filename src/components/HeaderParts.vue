<template>
  <header>
    <h1 class="title">
      <p class="title__text">Lights Out</p>
      <p><button @click="reset()">Reset</button></p>
    </h1>
  </header>
</template>

<script>
export default {
}
</script>

<style lang="scss">
header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

button{
  position: absolute;
  top: 0;
  right: 1rem;
  background: #333;
  color: #fff;
  border: none;
  font-weight: bold;
  font-size: 0.7rem;
  padding:0.5rem;
}

.title{
	color: #fff;
	background: #333;
	border-left:10px solid #00bbdd;
	text-align: left;
	font-size: 0.7rem;

	&__text{
		padding:0.5rem;
	}
}
</style>
