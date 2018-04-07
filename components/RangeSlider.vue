<template>
    
    <div>
        <input type="number" class="input mb30" placeholder="0" v-model="$store.state.val" />
        <input type="range" min="0" max="100" class="range" v-model="$store.state.val" />
    </div>

</template>

<script>
    export default {
        name: 'range-slider'
    }
</script>