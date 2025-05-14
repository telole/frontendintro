<template>
    <div>
      <Navbar/>
  
      <div class="container my-4">
        <h2 class="text-center">Pokemon</h2>
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead class="table-light">
              <tr>
                <th>nama</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(pokemon, index) in pokemons" :key="index">
                <td>{{ pokemon.name }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import axios from 'axios'
  import { onMounted, ref } from 'vue'
  import Navbar from '../components/Navbar/Navbar.vue'
  
  const pokemons = ref([])
  
  onMounted(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
      .then((res) => {
        pokemons.value = res.data.results
      })
      .catch((err) => {
        console.error('Error fetching data:', err)
      })
  })
  </script>
  