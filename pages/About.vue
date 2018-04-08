<template>

    <section class="hero is-info is-fullheight" :style="{ backgroundColor: $store.state.bg.color }">
        <div class="hero-body">
            <div class="container">
                <div>
                    <nuxt-link to="/">Balik lagi</nuxt-link>
                </div>
                <h1 class="title"> So this is About page. </h1>
                <h4 class="subtitle">Semua yang kamu mau pasti tidak ada di sini...</h4>
                <button :class="['button', $store.state.button.class]" @click="$store.commit('toggleButton')">
                    {{$store.state.button.text}}
                </button>
            </div>
        </div>
    </section>

</template>

<script>

    export default {
        name: 'about',
        components: {}
    }
</script>

<style lang="scss">
    .container {
        display: block;
    }
</style>
