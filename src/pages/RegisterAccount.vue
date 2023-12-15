
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
                    <input type="text" class="auth-form__input" placeholder="Họ & Tên" />
                  </div>
                  <div class="auth-form__">
                    <input type="email" class="auth-form__input" placeholder="Email" />
                  </div>
                  <div class="auth-form__">
                    <input type="text" class="auth-form__input" placeholder="Số điện thoại " />
                  </div>
                  <div class="auth-form__">
                    <input type="text" class="auth-form__input" placeholder="Địa chỉ" />
                  </div>
                </div>
                <button class="btn btn-primary">Đăng Ký</button>
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
  
  <style scoped>
  @import '../assets/css/register.css';
  </style>