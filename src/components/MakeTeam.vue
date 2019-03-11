<template lang="html">
	<div class="team">
		<h3> {{team.name}} </h3>
		<p class="description"> {{team.description}}</p>
	</div>
</template>

<script>
export default {
	name: "make-team",
	props: ['team']
}
</script>

<style lang="css" scoped>
	.team {
		padding: 10px;
		border: 1px solid #ccc;
		margin: 10px auto;
	}

	@media (min-width: 768px){
		.team {
			width: 30%;
		}
	}
</style>
