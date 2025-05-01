<template lang="">
    <div>
  
      <!-- v-if -->
      <h2>v-if Section</h2>
      <p v-if="test">In stock</p>
      <p v-if="login === 'admin'">Selamat datang, Admin!</p> 
      <p v-if="nilai > 80">Nilai kamu bagus!</p> 
  
      <hr>
  
      <!-- v-for -->
      <h2>v-for Section</h2>
      <ul>
        <li v-for="item in food" :key="item.id">{{ item.name }}</li>
      </ul>
  
      <hr>
  
      <!-- v-bind -->
      <h2>v-bind Section</h2>
      <img v-bind:src="img" alt="gambar" width="200">
  
      <hr>
  
      <!-- v-model -->
      <h2>v-model Section</h2>
      <input placeholder="Ketikkan nama..." v-model="name" />
      <br />
      <a>Halo, {{ name }}</a>
  
      <hr>
  
      <!-- v-on -->
      <h2>v-on Section</h2>
      <button v-on:click="increment">Klik Saya</button>
  
      <hr>
  
      <!-- v-show -->
      <h2>v-show Section</h2>
      <button @click="on = !on">Tampilkan/Sembunyikan</button>
      <p v-show="on">Tampil!</p>
  
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // v-if
  const test = ref(true);
  const login = ref('admin');
  const nilai = ref(90);
  
  // v-for
  const food = [
    { id: 1, name: 'Nasi Goreng' },
    { id: 2, name: 'Efanda' }
  ];
  
  // v-bind
  const img = ref('https://tse4.mm.bing.net/th?id=OIP.WC3WUdOUUUSG6pvrQtK3agHaFj&pid=Api&P=0&h=220');
  
  // v-model
  const name = ref('');
  
  // v-on
  function increment() {
    alert("Tombol diklik!");
  }
  
  // v-show
  const on = ref(true);
  </script>
  
  <style lang="">
    
  </style>
  