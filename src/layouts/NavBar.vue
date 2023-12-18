<template>
  <div class="navbar">
    <div class="navbar-left d-flex">
      <div class="navbar-ti-menu-alt">
        <i class="ti-menu-alt"></i>
      </div>
      <div data-v-697cd28c="">
        <button data-v-697cd28c="" type="button" class="back-icon">
          <span class="v-btn__overlay"></span>
          <span class="v-btn__underlay"></span>
          <span class="v-btn__content" data-no-activator="">
            <router-link to="/home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              tag="i"
              class="v-icon notranslate v-theme--light v-icon--size-default iconify iconify--mdi"
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m5 13l4 4l-1.4 1.42L1.18 12L7.6 5.58L9 7l-4 4h16v2H5m16-7v2H11V6h10m0 10v2H11v-2h10Z"
              ></path>
            </svg>
          </router-link>
          </span>
        </button>
        Phòng IT
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
        <div>
          <router-link to="/accountinformation">Thông tin tài khoản</router-link>
        </div>
        <div>
          <router-link to="/changepassword">Đổi mật khẩu </router-link>
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
  }
}
</script>

<style scoped>
@import '../assets/css/navbar.css';
</style>
