<template>
    <div class="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div class="card p-4 shadow" style="width: 350px;">
        <h2 class="text-center mb-4">Login</h2>
        <form @submit.prevent="handleLogin">
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input v-model="username" type="text" id="username" class="form-control" placeholder="Enter username" required>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input v-model="password" type="password" id="password" class="form-control" placeholder="Enter password" required>
          </div>
          <button type="submit" class="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
//   components: { Navbar },
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      handleLogin() {
        if (this.username === 'admin' && this.password === '1234') {
          alert('Login sukses!');
          this.$router.push('/home');
        } else {
          alert('Username atau Password salah!');
        }
      }
    }
  }
  </script>
  