<template>
	<div class="columns is-centered">
		<div :class="['column', 'is-half', isLoading === true ? 'fading' : '']">
			<div class="links">
				<img src="~/assets/leaf.png" width="120" alt="Logo Currency">
			</div>
			<h2 class="title"> Yuk, convert mata uang </h2>
			<div class="field has-addons">
				<div class="control">
					<span class="select">
						<select v-model="option.first" @change="getRate()">
							<option v-for="curr in currencies" :key="curr">{{curr}}</option>
						</select>
					</span>
				</div>
				<div class="control is-expanded">
					<input type="number" value="0" class="input"
						@input="convert()"
						v-model.number="inputValue.first"
						@focus="firstActive = true"
						placeholder="Masukkan angka kurs nya...">
				</div>
			</div>
			<div class="field has-addons">
				<div class="control">
					<span class="select">
						<select v-model="option.second" @change="getRate()">
							<option v-for="curr in currencies" :key="curr">{{curr}}</option>
						</select>
					</span>
				</div>
				<div class="control is-expanded">
					<input type="number" value="0" class="input"
						@input="convert()"
						@focus="firstActive = false"
						v-model.number="inputValue.second"
						placeholder="Masukkan angka kurs nya...">
				</div>
			</div>
			<div class="loading" v-if="isLoading">Loading...</div>
			<!-- <div class="box is-centered mt5em">
				<nuxt-link to="/about">About</nuxt-link>
			</div> -->
			<div class="version">
				<div class="content">Versi 1.0.2</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		name: 'index',
		data() {
			return {
				currencies: ['IDR', 'USD', 'SGD', 'INR', 'AUD', 'THB', 'MYR', 'GBP', 'KRW', 'JPY', 'CAD'],
				inputValue: {
					first: 0,
					second: 1
				},
				option: {
					first: 'USD',
					second: 'IDR'
				},
				conversionRate: 0,
				firstActive: true,
				isLoading: false
			}
		},
		created() {
			this.getRate()
		},
		methods: {
			getRate() {
				let { first, second } = this.option
				this.isLoading = true
                axios.get('https://api.fixer.io/latest', {
                    params: {
                        base: first,
                        option: second
                    }
                }).then(res => {
					this.conversionRate = res.data.rates[second] || 1.0
					this.convert()
					this.isLoading = false
				}).catch(err => console.log(err))
			},
			convert() {
				if (this.firstActive) {
					this.inputValue.second = (this.inputValue.first * this.conversionRate).toFixed(2)
				} else {
					this.inputValue.first = (this.inputValue.second / this.conversionRate).toFixed(2)
				}
			}
		}
	}

</script>

<style>
.title {
	font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
	text-align: center;
}

.links {
  	padding-top: 15px;
	margin: 0 auto;
	text-align: center;
}

.mt5em {
  	margin-top: 5em;
}

.loading {
	display: flex;
	justify-content: center;
	align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 1;
}

.column {
	position: relative;
}

.column.fading {
	opacity: .2;
}
</style>
