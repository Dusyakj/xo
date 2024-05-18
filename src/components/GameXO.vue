<template>
    <div class="container">
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
</template>

<script lang="ts" setup>


import FieldXO from '@/components/FieldXO.vue'



</script>

<style scoped>
.container{
    display: flex;
    width: 900px;
    height: 900px;
    flex-wrap: wrap;

}
    
</style>