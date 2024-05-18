<template>
    <div v-if="!winField" class="container-field" :class="{'current': state.current == props.num || state.current == 0}">
        <div class="small-btn">
            <div v-if="state.current == props.num || state.current == 0 || cells[1] != '-'" class="">
                <button v-if="cells[1] === '-'"  @click="play(1)"></button>
                <div v-else class="small-value"> {{ cells[1] }}</div>
            </div>
        </div>
        <div class="small-btn">
            <div v-if="state.current == props.num || state.current == 0 || cells[2] != '-'" class="">
                <button v-if="cells[2] === '-'"  @click="play(2)"></button>
                <div v-else class="small-value"> {{ cells[2] }}</div>
            </div>
        </div>
        <div class="small-btn">
            <div v-if="state.current == props.num || state.current == 0 || cells[3] != '-'" class="">
                <button v-if="cells[3] === '-'"  @click="play(3)"></button>
                <div v-else class="small-value"> {{ cells[3] }}</div>
            </div>
        </div>
        <div class="small-btn">
            <div v-if="state.current == props.num || state.current == 0 || cells[4] != '-'" class="">
                <button v-if="cells[4] === '-'"  @click="play(4)"></button>
                <div v-else class="small-value"> {{ cells[4] }}</div>
            </div>
        </div>
        <div class="small-btn">
            <div v-if="state.current == props.num || state.current == 0 || cells[5] != '-'" class="">
                <button v-if="cells[5] === '-'"  @click="play(5)"></button>
                <div v-else class="small-value"> {{ cells[5] }}</div>
            </div>
        </div>
        <div class="small-btn">
            <div v-if="state.current == props.num || state.current == 0 || cells[6] != '-'" class="">
                <button v-if="cells[6] === '-'"  @click="play(6)"></button>
                <div v-else class="small-value"> {{ cells[6] }}</div>
            </div>
        </div>
        <div class="small-btn">
            <div v-if="state.current == props.num || state.current == 0 || cells[7] != '-'" class="">
                <button v-if="cells[7] === '-'"  @click="play(7)"></button>
                <div v-else class="small-value"> {{ cells[7] }}</div>
            </div>
        </div>
        <div class="small-btn">
            <div v-if="state.current == props.num || state.current == 0 || cells[8] != '-'" class="">
                <button v-if="cells[8] === '-'"  @click="play(8)"></button>
                <div v-else class="small-value"> {{ cells[8] }}</div>
            </div>
        </div>
        <div class="small-btn">
            <div v-if="state.current == props.num || state.current == 0 || cells[9] != '-'" class="">
                <button v-if="cells[9] === '-'"  @click="play(9)"></button>
                <div v-else class="small-value"> {{ cells[9] }}</div>
            </div>
        </div>
    </div>
    <div v-else class="container-field-win">{{ cells[0] }}</div>
</template>
<script setup lang="ts">
import { defineProps, watch,  ref, reactive } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex'

const props = defineProps({
  num: {
    type: String,
    required: true
  }
});

const store = useStore()

const state = reactive({
    win : store.state.win,
    current : store.state.current
})

const cells = ref(['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',])
const winField = ref(0)


const play = async (cell: number) => {
    // winField.value = 1
    const response = await axios.post('http://localhost:3000/click', { field: props.num, cell: cell });
    const data = response.data
    cells.value = data.fieldList
    store.commit('toWin', data.win)
    store.commit('changeCurrent', data.cell)
    winField.value = data.winField

    console.log(data)
}

watch(() => store.state.current, (newValue, oldValue) => {
    state.current = newValue
})

</script>

<style scoped>
.container-field{
    display: flex;
    width: 300px;
    height: 300px;
    flex-wrap: wrap;
    padding: 45px;
    outline: 1px solid black;
    
}
.container-field-win{
    display: flex;
    width: 300px;
    height: 300px;
    padding: 45px;
    justify-content: center;
    align-items: center;
    font-size: 160px;
    
}

.small-btn{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    font-size: 50px;
    border: 1px solid black;
}

button{
        all: unset;
        height: 60px;
        width: 60px;
        /* appearance: none; */
        /* background: #dddddd;
        color: #555555; */
        cursor: pointer;
        font-size: 30px;
    }
.current {
    outline: 3px dashed rgb(36, 255, 83);
}
</style>