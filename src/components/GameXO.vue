<template>
    <div class="conainer-game">
        <button @click="reset()">reset</button>
        <div class="container-field">
            <FieldXO  num="1"/>
            <FieldXO  num="2"/>
            <FieldXO  num="3"/>
            <FieldXO  num="4"/>
            <FieldXO  num="5"/>
            <FieldXO  num="6"/>
            <FieldXO  num="7"/>
            <FieldXO  num="8"/>
            <FieldXO  num="9"/>
        </div>
        <div class="result-cont">
            <div v-if="state.win == 1" class="">
                Победа!
            </div>
            <div v-if="state.win == 2" class="">
                Ничья!
            </div>
        </div>
    </div>

</template>

<script lang="ts" setup>


import FieldXO from '@/components/FieldXO.vue'
import axios from 'axios'
import { reactive, watch, ref } from 'vue'
import { useStore } from 'vuex'


const reset = async () => {
    try {
        store.commit('toRestart', 1)
        store.commit('changeCurrent', 0)
        const response = await axios.get('http://localhost:3000/reset')
        store.commit('toRestart', 0)
    } catch (error) {
        console.log(error)
    }
}

const store = useStore()

const state = reactive({
    win : store.state.win
})


watch(() => store.state.win, (newValue, oldValue) => {
    state.win = newValue
})


reset()

</script>

<style scoped>
.container-field{
    display: flex;
    width: 900px;
    height: 900px;
    flex-wrap: wrap;

}

.result-cont{
    width: 100%;
    font-size: 40px;
}
    
</style>