<template>
  <form class="v-form" novalidate="">
    <div class="row">
      <div class="col-6">
        <input type="text" class="input-password" placeholder="Mật khẩu hiện tại" />
      </div>
      <div class="col-6"></div>
    </div>
    <div class="row">
      <div class="col-6">
        <input type="text" class="input-password" placeholder="Mật khẩu mới" />
        <!-- <div class="v-field__append-inner">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            role="button"
            tag="i"
            class="v-icon notranslate v-theme--light v-icon--size-default v-icon--clickable iconify iconify--mdi"
            aria-label="Mật khẩu hiện tại appended action"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0Z"
            ></path>
          </svg>
        </div> -->
      </div>
      <div class="col-6">
        <input type="text" class="input-password" placeholder="Xác nhận mật khẩu" />
      </div>

      <div class="text-container">
        <div class="title-text"><p>Yêu cầu mật khẩu:</p></div>
        <div class="text-alain">
          <ul>
            <li>Có ít nhất 8 ký tự - càng nhiều, càng tốt</li>
            <li>Có ít nhất 1 ký tự viết thường và ký tự viết hoa</li>
            <li>Có ít nhất một ký tự, 1 chữ số</li>
          </ul>
        </div>
        <div class="bt-sa-re">
          <button type="button" class="s-bt ">LƯU</button>
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
.s-bt {
color: #fff;
  height: 40px;
  width: 180px;
  border: 1px solid #1a598C;
  border-radius: 10px;
  background-color: #1a598C;
}
.r-bt {
  margin: 20px;
  height: 40px;
  width: 180px;
  color: #1a598C;
  border: 1px solid #1a598C ;
  border-radius: 10px;
}
.bt-sa-re {
  padding: 10px;
  padding-top: 20px;
}
.title-text {
  padding-left: 15px !important;
}
.text-container {
  padding-top: 20px;
}
.input-password {
  height: 50px;
  width: 100%;
  border-radius: 10px;
  color: #1a598C;
  border: 1px solid #1a598C;
  text-align: justify;
  text-indent: 20px;
}
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}
.col-6 {
  padding: 10px;
}
.text-alain {
  padding-left: 30px;
}
</style>
