<template>

    <section class="hero is-info is-fullheight" :style="{ backgroundColor: $store.state.bg.color }">
        <div class="hero-body">
            <div class="container">
                <h1 class="title"> So this is About page. </h1>
                <h4 class="subtitle">Semua yang kamu mau pasti tidak ada di sini...</h4>
                <InputText />
                <button :class="['button', $store.state.button.class]" @click="$store.commit('toggleButton')">
                    {{$store.state.button.text}}
                </button>
            </div>
        </div>
    </section>

</template>

<script>
    import Counter from '~/components/Counter'
    import InputText from '~/components/InputText'

    export default {
        name: 'about',
        components: { Counter, InputText }
    }
</script>

<style lang="scss">

    $yellow: #fed501;

    .title {
        color: $yellow !important;
    }

</style>
