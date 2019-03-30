<template lang="html">
	<div class="actions">
		<svg class="more-info" v-on:click="openTeamModal" v-on:keyup.enter="openTeamModal" :aria-labelledby="getMoreInfoId" role="button" tabindex="0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;" viewBox="0 0 333 333" x="0px" y="0px" fill-rule="evenodd" clip-rule="evenodd">
			<title :id="getMoreInfoId">Click to view team details</title>
			<g>
				<path d="M48 8l238 0c12,0 22,10 22,23l0 271c0,13 -10,23 -22,23l-238 0c-13,0 -23,-10 -23,-23l0 -271c0,-13 10,-23 23,-23zm35 58l26 0 0 26 -26 0 0 -26zm0 175l26 0 0 26 -26 0 0 -26zm49 0l119 0 0 26 -119 0 0 -26zm-49 -58l26 0 0 26 -26 0 0 -26zm49 0l119 0 0 26 -119 0 0 -26zm-49 -59l26 0 0 26 -26 0 0 -26zm49 0l119 0 0 26 -119 0 0 -26zm0 -58l119 0 0 26 -119 0 0 -26zm-78 -28l225 0 0 258 -225 0 0 -258z"></path>
			</g>
		</svg>

		<svg class="follow-icon" :class="{selected: isSelected }" v-on:click="toggleTeam" v-on:keyup.enter="toggleTeam" :aria-labelledby="getFollowIconId" role="button" tabindex="0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" x="0px" y="0px" viewBox="0 0 100 100">
			<title :id="getFollowIconId">Click to follow or unfollow the team</title>
			<g transform="translate(0,-952.36218)">
				<path d="m 33.780493,970.3622 c -11.63849,0 -18.78049,10.17801 -18.78049,18.52632 0,18.05128 20.51725,34.80698 35,45.47368 14.482764,-10.6667 34.999994,-27.4224 34.999994,-45.47368 0,-8.34831 -7.14198,-18.52632 -18.78046,-18.52632 -6.50001,0 -12.052864,5.1822 -16.219534,10.10527 -4.16666,-4.92307 -9.71959,-10.10527 -16.21951,-10.10527 z" style="color:#000000;enable-background:accumulate;" fill="#000000" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible"></path>
			</g>
		</svg>
	</div>
</template>

<script>
export default {
	name: 'team-icons',
	props: ['team'],
	computed: {
		isSelected(){
			const followedTeams = this.$store.getters.getFollowedTeams; //we don't want to change the original followedTeams state
			if(followedTeams.length != 0){
				return followedTeams.map(team => team.name).includes(this.team.name)
			} else {
				return false;
			}
		},
		getMoreInfoId(){
			return 'more-info-' + this.team.name
		},
		getFollowIconId(){
			return 'follow0icon-' + this.team.name
		}
	},
	methods: {
		toggleTeam(){
			this.$store.dispatch('toggleFollowedTeam', this.team);
			this.saveFollowedTeams();
		},
		openTeamModal(){
			this.$store.dispatch('setShowModal', this.team.name);
		},
		saveFollowedTeams(){ //TODO move this to right location when refactoring
			const parsed = JSON.stringify(this.followedTeams);
			localStorage.setItem('followedTeams', parsed);
		}
	}
}
</script>

<style lang="css" scoped>
	.actions {
		display:flex;
		align-items:center;
		justify-content: center;
	}

	svg:hover {
		cursor: pointer;
	}

	.follow-icon {
		height: 30px;
		width: 30px;
	}

	.more-info {
		height: 25px;
		width: 25px;
		margin-right: 5px;
	}

	.follow-icon path,
	.more-info path {
		fill: #ccc;
		transition: all 400ms ease;
	}

	.follow-icon:hover path,
	.more-info:hover path {
			fill: #000;
		}

	.selected path {
		fill: #4B9130;
	}
</style>
