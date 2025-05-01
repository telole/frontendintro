<script setup>
import { ref } from 'vue'
import Hallo from './Hallo.vue'
import Nama from './Nama.vue'


defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
<div>HAllo</div>
<Nama/>


</template>

