import Vuex from 'vuex'

const store = () => {
    return new Vuex.Store({
        state: {
            count: 0,
            count1: 0,
            val: 0,
            bg: {
                color: "white"
            },
            button: {
                text: "Off",
                enabled: false,
                class: 'is-danger'
            }
        },
        mutations: {
            increment(state) { state.count++ },
            decrement(state) { state.count1 -= 1 },
            getBgColor(state) { return state.bg.color },
            toggleButton(state) {
                state.button.enabled = !state.button.enabled
                state.button.text = state.button.enabled ? "On" : "Off"
                state.button.class = state.button.enabled ? 'is-info' : 'is-danger'
            }
        }
    })
}

export default store