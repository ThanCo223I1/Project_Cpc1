<template>
  <div class="left">
    <ul class="sidebar">
      <li class="sub-sidebar-header">
        <div class="d-flex">
          <img
            src="../assets/image/logoCpc1.png"
            alt="logo"
            class="logo-img"
            width="40"
            height="40"
          />
          <strong class="logo-title">QUẢN LÝ TÀI SẢN</strong>
        </div>
      </li>
      <li class="sub-sidebar" @click="handlePushToTable1">
        <div class="d-flex">
          <i class="ti-home me-1 icon-sidebar"></i>
          <p class="title-sidebar">Danh Sách Thiết Bị</p>
        </div>
      </li>
      <li class="sub-sidebar" @click="handlePushToTable2">
        <div class="d-flex">
          <i class="ti-home me-1 icon-sidebar"></i>
          <p class="title-sidebar">Thông Tin Thiết Bị</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    handlePushToTable1() {
      this.$router.push('/table1')
    },
    handlePushToTable2() {
      this.$router.push('/table2')
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
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title-sidebar{
    color: white;
    font-size: 15px;
}
.left {
  background-color: rgb(48, 65, 86);
  height: auto;
  width: 210px;
  position: relative;
  top: 0;
  left: 0;
  z-index: 99;
}

.logo-title {
  color: #fff;
  font-weight: 600;
  margin-left: 0.4rem;
  margin-top: 10px;
}

ul li {
  color: rgb(191, 203, 217);
  list-style-type: none;
  padding: 20px;
  cursor: pointer;
}

ul .sub-sidebar:hover {
  background-color: #263445;
}

ul .sub-sidebar:focus {
  background-color: #263445;
  color: #409eff;
}

</style>
