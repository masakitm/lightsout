<template>
  <header>
    <h1 class="title">
      <p class="title__text">Lights Out</p>
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
