<template>
    <Navbar/>
    <div class="container mt-5">
      <h2 class="mb-4">CRUD Sederhana</h2>
  
      <div class="input-group mb-3">
        <input
          v-model="data.title"
          type="text"
          class="form-control"
          placeholder="Masukkan judul"
        />
        <input
          v-model="data.content"
          type="text"
          class="form-control"
          placeholder="Masukkan konten"
        />
        <button class="btn btn-primary" @click="handleSubmit">Tambah</button>
      </div>
  
      <table class="table table-striped">
        <thead class="table-light">
          <tr>
            <th>Nama</th>
            <th>Judul</th>
            <th style="width: 160px;">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(artikel, index) in artikel" :key="index">
            <td>{{ artikel.content }}</td>
            <td>{{ artikel.title }}</td>
            <td>
              <div class="d-flex justify-content-start">
                <router-link :to="{ name: 'edit', params: { id: artikel.id } }" class="btn btn-warning btn-sm me-2">
                Edit
              </router-link>
                <button class="btn btn-danger btn-sm" @click="deleteItem(index)">Hapus</button>
              </div>
            </td>
          </tr>
          <tr v-if="artikel.length === 0">
            <td colspan="3" class="text-center text-muted">Belum ada data</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue'
  import { api } from '../hooks/hooks'
import Navbar from '../components/Navbar/Navbar.vue'
  const axios = api()
  const data = ref({
    title: '',
    content: ''
  })
  
  const artikel = ref([])
  
  onMounted(() => {
    axios.get('artikel').then((res) => {
      artikel.value = res.data.artikel
    }).catch((err) => {
      console.error('Error fetching articles:', err)  
    })
  })
  
  const handleSubmit = () => {
    axios.post('artikel/create', data.value)
      .then((res) => {
        artikel.value.push(res.data)
        data.value = { title: '', content: '' }  // Reset form
      }).catch((err) => {
        console.log('Error creating article:', err)
      })
  }
  
  const deleteItem = (index) => {
    const item = artikel.value[index]
  
    if (!item.id) {
      console.error('ID artikel tidak ditemukan', item)
      return
    }
  
    axios.delete(`artikel/${item.id}`)
      .then((res) => {
        console.log('Artikel berhasil dihapus', res.data)
        artikel.value.splice(index, 1)
      })
      .catch((err) => {
        console.error('Error saat menghapus artikel:', err)
      })
  } 
  </script>
  