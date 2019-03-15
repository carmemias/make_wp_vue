<template lang="html">
	<div class="actions">
		<svg class="follow-icon" :class="{selected: isSelected }" v-on:click="toggleTeam" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" x="0px" y="0px" viewBox="0 0 100 100">
			<g transform="translate(0,-952.36218)">
				<path d="m 33.780493,970.3622 c -11.63849,0 -18.78049,10.17801 -18.78049,18.52632 0,18.05128 20.51725,34.80698 35,45.47368 14.482764,-10.6667 34.999994,-27.4224 34.999994,-45.47368 0,-8.34831 -7.14198,-18.52632 -18.78046,-18.52632 -6.50001,0 -12.052864,5.1822 -16.219534,10.10527 -4.16666,-4.92307 -9.71959,-10.10527 -16.21951,-10.10527 z" style="color:#000000;enable-background:accumulate;" fill="#000000" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible"></path>
			</g>
		</svg>
	</div>
</template>

<script>
import {eventBus} from '../main.js';

export default {
	name: 'team-icons',
	props: ['team', 'isSelected'],
	methods: {
		toggleTeam(){
			this.green = !this.green;
			eventBus.$emit('team-toggled', this.team);
		}
	}
}
</script>

<style lang="css" scoped>
	.follow-icon{
		height: 30px;
		width: 30px;
	}

	.follow-icon path {
		fill: #ccc;
		transition: all 400ms ease;
	}

	.follow-icon:hover path {
			fill: #000;
		}

	.selected path {
		fill: #4B9130;
	}
</style>
