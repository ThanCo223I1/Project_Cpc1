<template>
  <form class="v-form" novalidate="">
    <div class="d-flex">
      <div class="mt-4 ms-3">
        <img
          class="item-img"
          src="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-2/images/avatars/1.png"
          alt=""
          width="130px"
          height="130px"
        />
      </div>
      <div class="btn-container">
        <div>
          <button type="file" class="s-bt-img">Tải ảnh mới</button>
          <button type="button" class="r-bt-img">RESET</button>
        </div>
        <div class="text">
          <p>Allowed PNG or JPEG. Max size of 800K.</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <input type="text" class="input-password" placeholder="Họ và tên" />
      </div>
      <div class="col-6">
        <input type="text" class="input-password" placeholder="Địa chỉ" />
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <input type="text" class="input-password" placeholder="Email" />
      </div>
      <div class="col-6">
        <input type="text" class="input-password" placeholder="Số điện thoại" />
      </div>

      <div class="text-container">
        <div class="bt-sa-re">
          <button type="button" class="s-bt">LƯU</button>
          <button type="button" class="r-bt">RESET</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {}
</script>

<style scoped>
.btn-container{
   margin-left: 10px;
 margin-top: 30px;
}
.text{
    font-size: 16px
}

.align-center .d-flex {
  margin-top: 50px;
}
.s-bt-img {
  height: 40px;
  width: 180px;
  color: #fff;
  border: 1px solid #1a598c;
  border-radius: 10px;
  background-color: #1a598c;
}
.r-bt-img {
  margin: 20px;
  height: 40px;
  width: 100px;
  color: #1a598c;
  border: 1px solid #1a598c;
  border-radius: 10px;
}
.s-bt {
  height: 40px;
  width: 180px;
  color: #fff;
  border: 1px solid #1a598c;
  border-radius: 10px;
  background-color: #1a598c;
}
.r-bt {
  margin: 20px;
  height: 40px;
  width: 180px;
  color: #1a598c;
  border: 1px solid #1a598c;
  border-radius: 10px;
}
.bt-sa-re {
  padding: 15px;
  padding-top: 10px;
}
.title-text {
  padding-left: 15px !important;
}

.input-password {
  height: 50px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #1a598c;
  text-align: justify;
  text-indent: 20px;
}
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}
.col-6 {
  padding: 15px;
}
.text-alain {
  padding-left: 30px;
}
</style>
