<template>
    <NavBar class="navbar"></NavBar>
    <div class="middle d-flex">
      <div class="middle-sidebar">
        <SideBar class="sidebar"></SideBar>
      </div>
      <div class="middle-content">
        <router-view class="router-view"></router-view>
      </div>
    </div>
  </template>
  
  <script>
  import NavBar from './NavBar.vue';
  import SideBar from './SideBar.vue';
  export default {
    components: {
      NavBar,
      SideBar,
    },
  };
  </script>
  
  <style scoped>
  .navbar {
    width: calc(100% - 260px);
  }
  
  .home-page {
    top: 50px;
  }
  
  .middle {
      height: 100vh;
  }
  
  .middle-sidebar {
      height: 100%;
  }
  
  
  .sidebar {
      height: 100%;
  }
  
  .middle-content {
    position: relative;
    margin-top: 60px;
    width: 100vw;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    padding: 2px;
    background-color: #eee;
    overflow: hidden;
    overflow-y: scroll;
  }
  
  .router-view{
      background-color: #fff;
  }
  @media (max-width: 767px) {
  .middle-sidebar {
    display: none;
  }
  .navbar {
    width: 100%;
  }
}
  </style>