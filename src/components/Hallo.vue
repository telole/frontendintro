<template>
    <div>
      <h1>Counter: {{ counter.value }}</h1>
      <button @click="increment">Tambah</button>

      <button @click="decrement">kurang</button>
    </div>
  </template>
  

  <script setup>
  // import axios from 'axios'
import { onMounted, reactive } from 'vue'
import { api } from '../hooks/hooks'
const axios = api();
  
  const counter = reactive({
    value: 0
  })

 

  // onMounted(() => {
  //   axios.get('artikel')
  // })
  
  function increment() {
    counter.value++
  }

  function decrement() {
    counter.value--
  }
  
  </script>
  