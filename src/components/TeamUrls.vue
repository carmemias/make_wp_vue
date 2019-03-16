<template lang="html">
	<div class="team-urls">
		<a :href="team.url" alt="team website, opens new tab" target="_blank">
			<svg class="web-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 58 58" version="1.1" x="0px" y="0px">
				<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
					<g transform="translate(-961.000000, -1003.000000)" stroke="#000000" stroke-width="2">
						<g transform="translate(962.000000, 1004.000000)">
							<path d="M28,56 L28,0"></path>
							<path d="M28,0 C27.786,0 27.574,0.011 27.361,0.016 C19.213,6.616 14,16.697 14,28 C14,39.303 19.213,49.384 27.361,55.984 C27.574,55.989 27.786,56 28,56"></path>
							<path d="M7.6983,8.7282 C13.4783,12.6832 20.4673,15.0002 28.0003,15.0002 C35.5323,15.0002 42.5213,12.6832 48.3013,8.7282"></path>
							<path d="M0,28 L56,28"></path>
							<path d="M56,28 C56,43.464 43.464,56 28,56 C12.536,56 0,43.464 0,28 C0,12.536 12.536,0 28,0 C43.464,0 56,12.536 56,28 L56,28 Z"></path>
							<path d="M48.3017,46.2718 C42.5217,42.3168 35.5327,39.9998 27.9997,39.9998 C20.4677,39.9998 13.4787,42.3168 7.6987,46.2718"></path>
							<path d="M28,0 C28.214,0 28.426,0.011 28.639,0.016 C36.787,6.616 42,16.697 42,28 C42,39.303 36.787,49.384 28.639,55.984 C28.426,55.989 28.214,56 28,56"></path>
						</g>
					</g>
				</g>
			</svg>
		</a>
		<a :href="handbookURL" alt="team handbook, opens new tab" target="_blank">
			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
				<g>
					<path d="M51.32,79.838l-2.769-0.592V26.418c0-3.921,3.191-7.11,7.111-7.11h36.892v55.597H55.784   C54.244,74.904,52.21,77.848,51.32,79.838z M55.664,22.2c-2.325,0-4.219,1.893-4.219,4.218V74.36   c1.164-1.282,2.643-2.348,4.339-2.348h33.877V22.2H55.664z"></path>
					<g>
						<path d="M50.193,24.972h-0.387C49.929,25.434,50,25.917,50,26.418C50,25.917,50.071,25.434,50.193,24.972z"></path>
						<path d="M91.107,24.972v2.893h3.299v49.935H50.761C50.279,78.628,50,79.246,50,79.246s-0.279-0.618-0.761-1.447H5.595V27.864    h3.298v-2.893H2.7v55.72h94.6v-55.72H91.107z"></path>
					</g>
					<path d="M48.681,79.838c-0.896-1.988-2.934-4.934-4.465-4.934H7.445V19.308h36.891c3.921,0,7.109,3.189,7.109,7.11v52.828   L48.681,79.838z M10.34,72.014h33.876c1.697,0,3.174,1.064,4.337,2.348V26.418c0-2.325-1.891-4.218-4.217-4.218H10.34V72.014z"></path>
				</g>
			</svg>
		</a>
		<a v-if="team.slackChannel" :href="slackURL" alt="Slack channel, opens new tab" target="_blank">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" x="0px" y="0px">
				<path d="M20.74,9.4l.48-.14c-1-3.47-2.35-5.47-4.24-6.5s-4.28-1-7.73,0S3.8,5.13,2.77,7s-1,4.29,0,7.73S5.13,20.21,7,21.23a6.69,6.69,0,0,0,3.28.77,15.72,15.72,0,0,0,4.46-.78c3.45-1,5.45-2.35,6.48-4.23s1-4.28,0-7.73Zm-.39,7.11c-.89,1.64-2.71,2.8-5.89,3.75s-5.32,1-7,.09-2.8-2.71-3.75-5.89-1-5.32-.09-7S6.36,4.7,9.54,3.74A14.82,14.82,0,0,1,13.72,3a5.71,5.71,0,0,1,2.78.64c1.64.89,2.8,2.71,3.76,5.91h0C21.22,12.72,21.25,14.87,20.35,16.51Z"></path>
				<path d="M17.32,11.57l-2.49.93-1-2.76,2.49-.93a.5.5,0,1,0-.35-.94l-2.49.93-.93-2.49a.5.5,0,0,0-.94.35l.93,2.49-2.76,1L8.81,7.71a.5.5,0,1,0-.94.35l.93,2.49-2.49.93a.5.5,0,0,0,.35.94l2.49-.93,1,2.76-2.49.93a.5.5,0,0,0,.35.94l2.49-.93.93,2.49a.5.5,0,1,0,.94-.35l-.93-2.49,2.76-1,.93,2.49a.5.5,0,1,0,.94-.35l-.93-2.49,2.49-.93a.5.5,0,1,0-.35-.94ZM11.13,13.9l-1-2.76,2.76-1,1,2.76Z"></path>
			</svg>
		</a>
	</div>
</template>

<script>
export default {
	name: "team-urls",
	props: ['team'],
	computed: {
		handbookURL(){
			return this.team.url + 'handbook'
		},
		slackURL(){
			const channel = this.team.slackChannel.split(' ')[0].substr(1)
			return 'https://wordpress.slack.com/messages/' + channel
		}
	}
}
</script>

<style lang="css" scoped>
	.team-urls {
		display: flex;
		justify-content: center;
	}
	a {
		margin: 5px;
		padding: 5px;
		background-color: #eee;
		transition: all 400ms ease;
	}
	a:hover {
		background-color: #000;
	}
	a:hover svg:not(.web-icon) path {
		fill: #eee;
	}
	a:hover svg.web-icon path {
		stroke: #eee;
	}
	svg {
		height: 30px;
		width: 30px;
	}
</style>
