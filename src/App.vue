<template>
	<div id="app">

		<header id="site-header">
			<!-- <img alt="Vue logo" src="./assets/wordpress-logo-hoz-rgb.png"> -->
			<div id="site-name">Stay Up-To-Date with Make WordPress</div>
			<nav id="main-navigation">
				<ul>
					<li><router-link to="/">Home</router-link></li>
					<li><router-link to="/teams">Teams You Follow</router-link></li>
				</ul>
			</nav>
		</header>

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

	#site-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		padding: 10px;
		padding-right:0;
		margin-bottom: 20px;
		background-color: #ddd;
		border-bottom: 1px solid #bbb;
		box-shadow: 3px 3px 5px #ccc;
	}

	/* #site-header > img {
		width: 30%;
		height: auto;
		margin-right: 10px;
	} */

	#site-name {
		font-size: 1.2em;
		font-weight: 700;
		text-transform: uppercase;
	}

	#main-navigation > ul {
		display: flex;
		list-style: none;
		margin-left: 0;
	}

	#main-navigation > ul li {
		margin-left: 10px;
	}

	#main-navigation > ul li a {
		font-size: 1.2em;
		text-decoration: none;
		padding: 10px 20px;
		color: #000;
		background-color: #ddd;
		transition: all 400ms ease;
	}

	#main-navigation > ul li a:hover,
	#main-navigation > ul li a.router-link-exact-active {
		background-color: #000;
		color: #fff;
	}

	main {
		padding: 60px 20px;
		background-color: #efefef;
	}

	h1, h2, h3 {
		margin: 20px 0;
	}
</style>
