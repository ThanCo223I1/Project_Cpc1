<template>
  <header>
    <div class="row">
      <div class="col-8">
        <div class="header-img">
          <img
            alt="#"
            src="https://upharma.xyz/assets/login-banner-9610bf90.jpg"
            class="img-fluid"
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div class="col-4">
        <div class="auth-form-container">
          <div class="auth-form">
            <div class="auth-form__header">
              <h4 class="auth-form__header-title">
                Chào mừng đến với QLTS! 🚀
                <i class="fa-sharp fa-solid fa-hand-wave"></i>
              </h4>
              <p>Đăng ký tài khoản để quản lý tài sản.</p>
            </div>
            <div class="auth-form__">
              <div class="auth-form__">
                <input
                  type="text"
                  ref="nameInput"
                  class="auth-form__input"
                  placeholder="Họ & Tên"
                />
              </div>
              <div class="auth-form__">
                <input type="email" ref="emailInput" class="auth-form__input" placeholder="Email" />
              </div>
              <div class="auth-form__">
                <input
                  type="text"
                  ref="phoneInput"
                  class="auth-form__input"
                  placeholder="Số điện thoại "
                />
              </div>
              <div class="auth-form__">
                <input
                  type="text"
                  ref="addressInput"
                  class="auth-form__input"
                  placeholder="Địa chỉ"
                />
              </div>
            </div>
            <button class="btn btn-primary" @click="handleRegister">Đăng Ký</button>
            <div class="auth-form__ft">
              <p class="auth-form__text">Bạn đã có tài khoản?</p>
              <a href="/login" class="auth-form__register">Đăng Nhập</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    handleRegister() {
      const name = this.$refs.nameInput.value
      const email = this.$refs.emailInput.value
      const phone = this.$refs.phoneInput.value
      const address = this.$refs.addressInput.value
      const data = {
        name,
        email,
        phone,
        address
      }
      axios.post('https://icpc1hn.work/QLTSAPI/User/UserRegister', data)
      .then((response) => {
        console.log(response.data)
        if (response.data) {
          console.log(response.data)
          alert('Đăng ký thành công')
          this.$router.push('/login');
        } else {
          alert('Đăng ký không thành công')
        }
      })
      .catch(error => {
          console.error(error);
        }); 
    }
  }
}
</script>

<style scoped>
@import '../assets/css/register.css';
</style>
