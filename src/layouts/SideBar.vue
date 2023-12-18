<template>
  <div class="left">
    <ul class="sidebar">
      <li class="sub-sidebar-header">
        <div class="d-flex">
          <img
            src="../assets/image/logoDTP.png"
            alt="logo"
            class="logo-img"
            width="50"
            height="20"
          />
          <strong class="logo-title">QLTS!</strong>
        </div>
      </li>
      <li class="sub-sidebar" @click="handlePushUser">
        <div class="d-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            tag="i"
            class="v-icon notranslate v-theme--light v-icon--size-default nav-item-icon iconify iconify--mdi"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3"
            ></path>
          </svg>
          <p class="title-sidebar">Trang Chủ</p>
        </div>
      </li>
      <li class="sub-sidebar" @click="handlePushToTable2">
        <div class="d-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            tag="i"
            class="v-icon notranslate v-theme--light v-icon--size-default nav-item-icon iconify iconify--mdi"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 5a3.5 3.5 0 0 0-3.5 3.5A3.5 3.5 0 0 0 12 12a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 12 5m0 2a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 10a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 7M5.5 8A2.5 2.5 0 0 0 3 10.5c0 .94.53 1.75 1.29 2.18c.36.2.77.32 1.21.32c.44 0 .85-.12 1.21-.32c.37-.21.68-.51.91-.87A5.42 5.42 0 0 1 6.5 8.5v-.28c-.3-.14-.64-.22-1-.22m13 0c-.36 0-.7.08-1 .22v.28c0 1.2-.39 2.36-1.12 3.31c.12.19.25.34.4.49a2.482 2.482 0 0 0 1.72.7c.44 0 .85-.12 1.21-.32c.76-.43 1.29-1.24 1.29-2.18A2.5 2.5 0 0 0 18.5 8M12 14c-2.34 0-7 1.17-7 3.5V19h14v-1.5c0-2.33-4.66-3.5-7-3.5m-7.29.55C2.78 14.78 0 15.76 0 17.5V19h3v-1.93c0-1.01.69-1.85 1.71-2.52m14.58 0c1.02.67 1.71 1.51 1.71 2.52V19h3v-1.5c0-1.74-2.78-2.72-4.71-2.95M12 16c1.53 0 3.24.5 4.23 1H7.77c.99-.5 2.7-1 4.23-1Z"
            ></path>
          </svg>
          <p class="title-sidebar">Thành viên</p>
        </div>
      </li>
      <li class="sub-sidebar" @click="toggleDropdown">
        <div class="d-flex">
          <i class="ti-home me-1 icon-sidebar"></i>
          <p class="title-sidebar">Thiết Bị</p>
        </div>
        <ul v-if="isDropdownOpen" class="dropdown-content">
          <li @click="handlePushDeviceList('Hồ sơ thiết bị')">Hồ sơ thiết bị</li>
          <li @click="handlePushToTable2('Lịch theo dõi')">Lịch theo dõi</li>
          <li @click="handlePushToTable2('Hồ sơ thiết bị báo lỗi')">Hồ sơ thiết bị báo lỗi</li>
          <li @click="handlePushToTable2('Luân chuyển')">Luân chuyển</li>
        </ul>
      </li>
      <li class="sub-sidebar" @click="handlePushToTable2">
        <div class="d-flex">
          <i class="ti-home me-1 icon-sidebar"></i>
          <p class="title-sidebar">Vật tư</p>
        </div>
      </li>
      <li class="sub-sidebar" @click="handlePushToTable2">
        <div class="d-flex">
          <i class="ti-home me-1 icon-sidebar"></i>
          <p class="title-sidebar">Tài khoản</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: false
    }
  },
  methods: {
    handlePushDeviceList() {
      this.$router.push('/deviceList')
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen
    },
    handlePushToTable2(item) {
      // Xử lý khi một mục trong dropdown được chọn
      console.log(`Chọn: ${item}`)
      // Thêm logic xử lý tại đây, ví dụ chuyển hướng hoặc thực hiện các thao tác khác
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 14px;
}
.sub-sidebar-header {
  padding: 0px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title-sidebar {
  font-size: 15px;
  margin-left: 10px;
}
.title-sidebar:hover {
  color: #fff !important;
  font-size: 15px;
  margin-left: 10px;
}
.left {
  width: 260px;
  position: relative;
  top: 0;
  left: 0;
  z-index: 99;
}

.logo-title {
  font-weight: 800;
  margin-left: 0.4rem;
  margin-top: 5px;
  font-size: 25px;
}

ul li {
  list-style-type: none;
  padding: 20px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;
}

ul .sub-sidebar:hover {
  background-color: #263445;
  color: #fff; /* Màu chữ trắng khi hover */
}
.sub-sidebar:hover {
  background-color: #263445;
  color: #fff !important; /* Màu chữ trắng khi hover */
}

ul .sub-sidebar:focus {
  background-color: #263445;
  color: #fff;
}

li .sub-sidebar:hover {
  background-color: #263445;
  color: #fff;
}

.logo-img {
  margin-top: 12px;
}
</style>
