<template lang="">
    <div>
        <Navbar />
        <ul class="">
            <li v-for="item in gogo" :key="item.id" class="coantainer">{{ item.name }}</li>
        </ul>
    </div>
</template>
<script setup>
import Navbar from '../components/Navbar/Navbar.vue';


const gogo = [
    {id:2, name:"blablabla"},
    {id:2, name:"blablabla"},
    {id:2, name:"blablabla"},
    {id:2, name:"blablabla"},
    {id:2, name:"blablabla"},
    {id:2, name:"blablabla"},
]
</script>
<style lang="">
    
</style>