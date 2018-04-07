<template>
    <div>
        <button class="button" @click="$store.commit('increment')">
            {{ $store.state.count }}
        </button>
        <button class="button" @click="$store.commit('decrement')">
            {{ $store.state.count1 }}
        </button>
    </div>
</template>

<script>
    export default {
        name: 'counter'
    }
</script>