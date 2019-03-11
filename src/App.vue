<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/wordpress-logo-hoz-rgb.png">
		<div id="nav">
			<router-link to="/">Home</router-link>
		</div>
		<router-view/>
	</div>
</template>

<style>
	body {
		margin:0;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 10px;
	}
</style>
