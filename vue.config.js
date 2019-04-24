// See https://stackoverflow.com/questions/51214220/vue-cli-3-how-to-use-the-official-pwa-plugin-service-worker
// Also https://www.npmjs.com/package/@vue/cli-plugin-pwa
// vue.config.js
module.exports = {
	// ...other vue-cli plugin options...
	publicPath: '/mkwp/', //for testing production
	pwa: {
		// configure the workbox plugin
		// workboxPluginMode: 'GenerateSW'
		workboxPluginMode: 'InjectManifest',
		workboxOptions: {
			// swSrc is required in InjectManifest mode.
			swSrc: 'src/service-worker.js',
			include: [/\.html$/, /\.png$/, /\.js$/, /\.css$/]
		}
			// ...other Workbox options...
			// runTimeCaching:[{}]
		}
	}
