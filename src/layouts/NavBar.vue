<template>
  <div class="navbar">
    <div class="navbar-left d-flex">
      <div class="navbar-ti-menu-alt">
        <i class="ti-menu-alt" :style="{ fontWeight: 'bold' }"></i>
      </div>
      <div class="navbar-title d-flex justify-content-between">
        <span>
          <p>QLTS</p>
        </span>
        <span>/</span>
        <span>
          <p :style="{ opacity: '0.5' }">Trang chủ</p>
        </span>
      </div>
    </div>
    <div class="navbar-right d-flex">
      <div class="logo">
        <img
          src="../assets/image/logoCpc1.png"
          alt="logo-user"
          class="logo-img"
          width="40"
          height="40"
        />
      </div>
      <div class="hello-user" @click="toggleDropdown">
        <p>Xin chào</p>
        <p class="user-name">Võ Vũ Thân!</p>
      </div>

      <div v-if="showDropdown" class="user-dropdown">
        <!-- Nội dung của dropdown -->
        <div>
          <router-link to="#">Thông tin cá nhân</router-link>
        </div>
        <div>
          <router-link to="/">Home</router-link>
        </div>
        <div>
          <router-link to="/login">Logout</router-link>
        </div>
      </div>
    </div>
  </div>
</template>





<script>
export default {
  data() {
    return {
      showDropdown: false
    }
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown
    }
    // logout() {
     
    // }
  }
}
</script>

<style scoped>
@import '../assets/css/navbar.css'
</style>
