<template>
  	<section class="container">
		<div>
			<h2 class="subtitle"> A simple Nuxt project to go </h2>
			<div class="links">
				<a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation </a>
				<a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">github </a>
				<img src="@/assets/sun.png" width="140" alt="Sun">
			</div>
			<Counter />
			<RangeSlider />
		</div>
  	</section>
</template>

<script>
	import Counter from '~/components/Counter.vue'
	import RangeSlider from '~/components/RangeSlider'

	export default {
		components: { Counter, RangeSlider }
	}
</script>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.title {
		font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont,
			"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
		display: block;
		font-weight: 300;
		font-size: 100px;
		color: #35495e;
		letter-spacing: 1px;
	}

	.subtitle {
		font-weight: 300;
		font-size: 42px;
		color: #526488;
		word-spacing: 5px;
		padding-bottom: 15px;
	}

	.links {
		padding-top: 15px;
	}
</style>
