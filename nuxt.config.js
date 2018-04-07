module.exports = {
	/*
	** Headers of the page
	*/
	head: {
		title: 'nuxteroo',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'A simple Nuxt project to go' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},

	css: [ '~/css/style.css' ],
	
	loading: { color: '#3B8070' },
	
	modules: [ 'nuxt-buefy' ],
	
	build: {
		
		extend (config, { isDev, isClient }) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		}
		
	}
}
