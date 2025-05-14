<template>
    <Navbar/>
    <div class="container mt-5">
      <h2 class="mb-4">Edit Artikel</h2>
  
      <!-- Form Edit Artikel -->
      <form @submit.prevent="saveEdit">
        <div class="mb-3">
          <label for="title" class="form-label">Judul</label>
          <input
            v-model="editData.title"
            type="text"
            class="form-control"
            id="title"
            required
            placeholder="Masukkan judul artikel"
          />
        </div>
  
        <div class="mb-3">
          <label for="content" class="form-label">Konten</label>
          <textarea
            v-model="editData.content"
            class="form-control"
            id="content"
            rows="6"
            required
            placeholder="Masukkan konten artikel"
          ></textarea>
        </div>
  
        <div class="d-flex justify-content-end">
          <!-- Tombol Simpan -->
          <button type="submit" class="btn btn-success me-2">Simpan</button>
  
          <!-- Tombol Kembali -->
          <router-link to="/" class="btn btn-secondary">Kembali</router-link>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { api } from '../hooks/hooks'
  import Navbar from '../components/Navbar/Navbar.vue'
  import axios from 'axios'
  
  const baxios = api()
  const route = useRoute()
  const router = useRouter()
  const id = route.params.id
  
  const editData = ref({
    id: id,
    title: '',
    content: ''
  })
  
  onMounted(() => {
    const articleId = route.params.id  // Mengambil ID artikel dari parameter URL
    console.log(articleId)  // Debugging ID artikel
    
    // Pastikan ID ada
    if (articleId) {
      baxios.get(`artikel/${articleId}`)  // Ambil artikel berdasarkan ID dari URL
        .then((res) => {
          console.log('Artikel diterima:', res.data)  // Debugging respons
          editData.value = res.data
        })
        .catch((err) => {
          console.error('Error fetching article:', err)
        })
    }
  })
  
  const saveEdit = () => {
    if (id) {
      baxios.put(`artikel/${id}`, editData.value)
        .then((res) => {
          console.log('Artikel berhasil diperbarui', res.data)
          router.push('/') // Kembali ke halaman utama setelah berhasil disimpan
        })
        .catch((err) => {
          console.error('Error saat menyimpan artikel:', err)
        })
    } else {
      console.error('ID artikel tidak ditemukan untuk update')
    }
  }
  </script>
  
  <style scoped>
  /* Tambahkan gaya untuk mempercantik tampilan */
  .container {
    max-width: 600px;
  }
  
  .form-label {
    font-weight: 600;
  }
  
  textarea.form-control {
    resize: vertical;
  }
  
  button {
    font-weight: 600;
  }
  
  .btn-success, .btn-secondary {
    padding: 0.6rem 1.5rem;
  }
  </style>
  