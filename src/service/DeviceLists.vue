<template>
  <div class="total-container">
    <div class="v-card-title">
      <h4 class="text-h6">Lọc thiết bị</h4>
      <div class="row container-input">
        <div class="col-12 col-md-6 col-lg-4">
          <input
            class="input-text"
            type="text"
            v-model="inputText"
            @focus="openDropdown"
            placeholder="Danh mục thiết bị"
          />
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <input
            class="input-text"
            type="text"
            v-model="inputText"
            @focus="openDropdown"
            placeholder="Phòng ban"
          />
        </div>
        <div class="col-12 col-md-12 col-lg-4">
          <input
            class="input-text"
            type="text"
            v-model="inputText"
            @focus="openDropdown"
            placeholder="Hiển thị"
          />
        </div>
      </div>
    </div>
    <hr class="v-divider" aria-orientation="horizontal" />

    <div class="row pa-4 v-container">
      <div class="col-12 col-md-6 mb-2 container-excel">
        <button type="button" class="v-btn-excel">
          <span class="v-btn__content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              tag="i"
              class="v-icon"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4 3h14a2 2 0 0 1 2 2v7.08a6.01 6.01 0 0 0-4.32.92H12v4h1.08c-.11.68-.11 1.35 0 2H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2m0 4v4h6V7H4m8 0v4h6V7h-6m-8 6v4h6v-4H4m15.44 8v-2h-4v-2h4v-2l3 3l-3 3"
              ></path>
            </svg>
            THÊM EXCEL
          </span>
        </button>
      </div>

      <div class="col-12 col-md-6 d-flex mb-2 container">
        <div class="v-input-device">
          <input class="v-input-search" placeholder="Tìm kiếm thiết bị" type="text" />
        </div>
        <button
          type="button"
          class="v-btn-addDevice"
          data-bs-toggle="modal"
          data-bs-target="#modalCreate"
        >
          <span class="v-btn__content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              tag="i"
              class="v-icon notranslate v-theme--light v-icon--size-default text-me-2 iconify iconify--mdi"
              width="0.8em"
              height="0.8em"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z"></path>
            </svg>
            THÊM THIẾT BỊ
          </span>
        </button>
      </div>
    </div>

    <!-- modal create -->
    <div class="modal fade" id="modalCreate" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- title modal -->
          <div class="modal-header">
            <h4 class="modal-title" id="exampleModalLabel">Thêm hồ sơ thiết bị</h4>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <!-- end title modal -->

          <div class="v-card-text">
            <form class="v-form" novalidate="">
              <div class="row gy-3">
                <div class="col-12 col-lg-6 start-conten-modal">
                  <div class="v-field__input">
                    <input type="text" class="input-text-device" placeholder="* Loại thiết bị" />
                  </div>
                  <div class="v-messages__message">Ví dụ: Máy tính để bản, Máy in, Ghế, ...</div>
                </div>
                <div class="col-12 col-lg-6">
                  <div class="v-field__inputs">
                    <input type="number" class="input-text-device" placeholder="* Số lượng" />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-12 col-lg-8 mt-3">
                  <div class="row gx-4 gy-3">
                    <div class="text-body-1">Thông tin thiết bị</div>
                    <div class="col-12 col-md-6">
                      <div class="v-input-col6-left">
                        <input
                          type="text"
                          class="input-content-device"
                          placeholder="* Tên thiết bị"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="v-input-col6-left">
                        <input type="text" class="input-content-device" placeholder="* Giá trị" />
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="v-input-col6-left">
                        <input
                          type="text"
                          class="input-content-device"
                          placeholder="* Mã thiết bị"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="v-input-col6-left">
                        <input
                          type="text"
                          class="input-content-device"
                          placeholder="* Mã tham chiếu"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="v-input-col6-left">
                        <input type="text" class="input-content-device" placeholder="* Mã Serial" />
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="v-input-col6-left">
                        <input type="text" class="input-content-device" placeholder="* Mã model" />
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="v-input-col6-left">
                        <input type="text" class="input-content-device" placeholder="* Danh mục" />
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="v-input-col6-left">
                        <input
                          type="text"
                          class="input-content-device"
                          placeholder="* Tình trạng"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="v-input-col6-left">
                        <input type="text" class="input-content-device" placeholder="* Xuất xứ" />
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="v-input-col6-left">
                        <input
                          type="text"
                          class="input-content-device"
                          placeholder="* Nhà cung cấp"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 mt-3">
                  <div class="row gx-4 gy-3">
                    <div class="text-body-1">Thời gian sử dụng</div>
                    <div class="v-field__input">
                      <input type="date" class="v-field__inputname" placeholder="Thời gian nhập" />
                    </div>
                    <div class="v-field__input">
                      <input type="date" class="v-field__inputname" placeholder="Bắt đầu sử dụng" />
                    </div>
                    <div class="v-field__input">
                      <input
                        type="date"
                        class="v-field__inputname"
                        placeholder="Dự kiến sử dụng đến"
                      />
                    </div>
                    <div class="v-field__input">
                      <input
                        type="date"
                        class="v-field__inputname"
                        placeholder="Thời gian bảo hành"
                      />
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-6 col-lg-8" >
                  <div class="text-body-1 mt-3 mb-2">Ghi chú/Mô tả thiết bị</div>
                  <div class="v-input__control">
                    <div class="v-field__field">
                      <label class="v-label v-field-label">Mô tả</label>
                      <textarea class="v-field__inputtext"></textarea>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-6 col-lg-4" style="height: fit-content">
                  <div class="text-body-1 mt-3 mb-2">Tệp đính kèm</div>
                  <div class="v-input__prepend">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      role="button"
                      tag="i"
                      class="v-icon notranslate v-theme--light v-icon--size-default v-icon--clickable iconify iconify--mdi"
                      aria-label="File đính kèm prepended action"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M16.5 6v11.5a4 4 0 0 1-4 4a4 4 0 0 1-4-4V5A2.5 2.5 0 0 1 11 2.5A2.5 2.5 0 0 1 13.5 5v10.5a1 1 0 0 1-1 1a1 1 0 0 1-1-1V6H10v9.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5V5a4 4 0 0 0-4-4a4 4 0 0 0-4 4v12.5a5.5 5.5 0 0 0 5.5 5.5a5.5 5.5 0 0 0 5.5-5.5V6h-1.5Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="v-field__field">
                    <label class="v-label v-field-label" for="input-1105">File đính kèm</label
                    ><input
                      type="file"
                      id="input-1105"
                      aria-describedby="input-1105-messages"
                      placeholder="Chọn file đính kèm thiết bị"
                      accept=".pdf"
                    />
                    <div class="v-field__input"></div>
                  </div>
                </div>
              </div>
              <div class="col-12 mt-4 justify-end d-flex">
                <button type="button" class="v-btn">
                  <span class="v-btn__content"> Bỏ qua </span>
                </button>
                <button type="button" class="v-btn">
                  <span class="v-btn__content">Thêm Hồ sơ thiết bị</span>
                </button>
              </div>
            </form>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
            <button type="button" class="btn btn-primary">Lưu</button>
          </div>
        </div>
      </div>
    </div>
    <!-- ket thuc modal -->

    <div class="container">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Tên thiết bị</th>
            <th>Mã thiết bị</th>
            <th>Danh mục</th>
            <th>Người tạo</th>
            <th>Trạng thái</th>
            <th>Ghi chú</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(device, index) in DeviceLst" :key="index">
            <td>{{ device.DeviceName }}</td>
            <td>{{ device.DeviceCode }}</td>
            <td>{{ device.Type }}</td>
            <td>{{ device.CreaterName }}</td>
            <td>{{}}</td>
            <td>{{}}</td>
            <td>
              <div class="d-flex">
                <button type="button" class="btn-tt">
                  <span class="v-btn__content">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      tag="i"
                      class="v-icon notranslate v-theme--light v-icon--size-default iconify iconify--mdi"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2v6Z"
                      ></path>
                    </svg>
                  </span>
                </button>

                <button type="button" class="btn-edit">
                  <span class="v-btn__content">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      tag="i"
                      class="v-icon"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M5 3c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7H5V5h7V3H5m12.78 1a.69.69 0 0 0-.48.2l-1.22 1.21l2.5 2.5L19.8 6.7c.26-.26.26-.7 0-.95L18.25 4.2c-.13-.13-.3-.2-.47-.2m-2.41 2.12L8 13.5V16h2.5l7.37-7.38l-2.5-2.5Z"
                      ></path>
                    </svg>
                  </span>
                </button>
                <button type="button" class="btn-delete" style="color: rgb(242, 76, 61)">
                  <span class="v-btn__content">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      tag="i"
                      class="v-icon"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="m20.37 8.91l-1 1.73l-12.13-7l1-1.73l3.04 1.75l1.36-.37l4.33 2.5l.37 1.37l3.03 1.75M6 19V7h5.07L18 11v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2m2 0h8v-6.8L10.46 9H8v10Z"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="row pb-2">
        <div class="row container-input">
          <div class="col-12 col-md-6 col-lg-4">
            <div class="ms-3">Tổng <strong>51 Item</strong></div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <ul class="v-pagination__list">
              <li class="v-pagination__prev" data-test="v-pagination-prev">
                <button
                  type="button"
                  class="v-btn v-btn--icon"
                  aria-label="Previous page"
                  aria-disabled="true"
                >
                  <span class="v-btn__content">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      tag="i"
                      class="v-icon notranslate"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.42Z"
                      ></path>
                    </svg>
                  </span>
                </button>
              </li>
              <li class="v-pagination__item">
                <button
                  type="button"
                  class="v-btn v-btn--icon"
                  ellipsis="false"
                  aria-current="true"
                  aria-label="Page 1, Current page"
                >
                  <span class="v-btn__content">1</span>
                </button>
              </li>
              <li class="v-pagination__item" data-test="v-pagination-item">
                <button
                  type="button"
                  class="v-btn v-btn--icon"
                  ellipsis="false"
                  aria-current="false"
                  aria-label="Go to page 2"
                >
                  <span class="v-btn__content">2</span>
                </button>
              </li>
              <li class="v-pagination__item" data-test="v-pagination-item">
                <button
                  type="button"
                  class="v-btn v-btn--icon"
                  ellipsis="false"
                  aria-current="false"
                  aria-label="Go to page 3"
                >
                  <span class="v-btn__content">3</span>
                </button>
              </li>
              <li class="v-pagination__item" data-test="v-pagination-item">
                <button
                  type="button"
                  class="v-btn v-btn--icon"
                  ellipsis="false"
                  aria-current="false"
                  aria-label="Go to page 4"
                >
                  <span class="v-btn__content">4</span>
                </button>
              </li>
              <li class="v-pagination__item" data-test="v-pagination-item">
                <button
                  type="button"
                  class="v-btn v-btn--icon"
                  ellipsis="false"
                  aria-current="false"
                  aria-label="Go to page 5"
                >
                  <span class="v-btn__content">5</span>
                </button>
              </li>
              <li class="v-pagination__item" data-test="v-pagination-item">
                <button
                  type="button"
                  class="v-btn v-btn--icon"
                  ellipsis="false"
                  aria-current="false"
                  aria-label="Go to page 6"
                >
                  <span class="v-btn__content">6</span>
                </button>
              </li>
              <li class="v-pagination__next" data-test="v-pagination-next">
                <button
                  type="button"
                  class="v-btn v-btn--icon"
                  aria-label="Next page"
                  aria-disabled="false"
                >
                  <span class="v-btn__content"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      tag="i"
                      class="v-icon notranslate v-theme--light v-icon--size-default iconify iconify--mdi"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.42Z"
                      ></path>
                    </svg>
                  </span>
                </button>
              </li>
            </ul>
          </div>

          <div class="col-12 col-md-16 col-lg-4">
            <div class="v-field__input">
              <div class="me-3">Mỗi trang</div>
              <div class="v-select__selection">
                <span class="v-select__selection-text">10</span>
              </div>
              <input
                readonly=""
                size="1"
                type="number"
                id="input-121"
                aria-describedby="input-121-messages"
                width="0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
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
    }
  },

  setup() {
    const DeviceLst = ref([])

    const fetchData = async (url, data) => {
      try {
        const response = await axios.post(url, data, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        console.log(response.data)
        return response.data
      } catch (error) {
        console.error('Error:', error.response.data)
      }
    }

    const fetchDataFromApi = async () => {
      try {
        // Lấy giá trị từ localStorage
        const storedData = JSON.parse(localStorage.getItem('username'))
        let User = storedData.UserInfo.UserName
        let Token = storedData.Token
        // Tạo đối tượng dữ liệu với các giá trị từ localStorage
        const data = {
          UserName: User,
          Token: Token,
          OrganizationID: '274',
          DeviceGroup: '',
          TypeDevice: '',
          Search: '',
          RowNumber: 51,
          PageNumber: 1
        }
        console.log(data)
        const responseData = await fetchData(
          'https://icpc1hn.work/QLTSAPI/Device/GetDeviceByCompany',
          data
        )
        console.log(responseData)
        if (responseData && responseData.DeviceLst.length > 0) {
          DeviceLst.value = responseData.DeviceLst
        } else {
          console.error('No data received from the API.')
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    onMounted(() => {
      fetchDataFromApi()
    })

    return {
      DeviceLst
    }
  }
}
</script>
<style scoped>
.v-field__inputtext{
  height: auto;
  width: 520px;
  text-indent: 10px;
  border: 0.5px solid #1a598c;
  border-radius: 5px;
}
.v-field__input {
  justify-content: start !important;
}
.v-field__inputname {
  height: 50px;
  width: 200px;
  text-indent: 10px;
  border: 0.5px solid #1a598c;
  border-radius: 5px;
}
.input-text-device {
  height: 50px;
  width: 375px;
  text-indent: 10px;
  border: 0.5px solid #1a598c;
  border-radius: 5px;
}
.input-content-device {
  height: 50px;
  width: 250px;
  text-indent: 10px;
  border: 0.5px solid #1a598c;
  border-radius: 5px;
}
.v-field__inputs {
  justify-content: end !important;
}
.gy-3 {
  padding: 20px;
}
.modal-content {
  width: 800px;
}
.modal-dialog {
  justify-content: center;
}
.v-pagination__item {
  padding-left: 10px;
  width: 50px;
  margin-top: 5px;
}
.v-pagination__prev {
  padding-right: 10px;
}
.v-pagination__next {
  padding-left: 10px;
}
.v-btn__content {
  margin-top: 5px;
  width: 20px;
  height: 20px;
}

.v-btn .v-btn--icon {
  height: 50px;
  width: 50px;
}
.v-pagination__list {
  display: flex;
  justify-content: center !important;
}

ul {
  list-style-type: none;
}

.v-field__input {
  display: flex;
  justify-content: end;
}

.container-input {
  justify-content: space-between;
}
.total-container {
  border: 0.5px solid #1a598c;
  border-radius: 5px;
}
.input-text {
  height: 40px;
  width: 357px;
  margin-top: 20px;
  border-radius: 5px;
  border: 0.5px solid #1a598c;
  text-indent: 10px;
}
.v-card-title {
  padding: 10px;
}

.v-btn-excel {
  width: 200px;
  border: 0.5px solid #1a598c;
  border-radius: 5px;
  color: #1a598c;
  height: 35px;
  background-color: #ddeefc;
}

.v-container {
  padding: 10px;
}
.btn-tt {
  margin: 5px;
  border: 0px solid;
  border-radius: 20px;
}
.btn-edit {
  margin: 5px;
  border: 0px solid;
  border-radius: 20px;
}
.btn-delete {
  margin: 5px;
  border: 0px solid;
  border-radius: 20px;
}
.v-btn__content svg {
  font-size: 1.6em;
}
.v-btn__content {
  padding-top: 10px;
}

.container {
  justify-content: space-between !important;
}
.v-input-search {
  width: 320px;
  height: 35px;
  border-radius: 5px;
  border: 0.5px solid #1a598c;
  text-indent: 10px;
}
.v-btn-addDevice {
  width: 200px;
  height: 35px;
  border-radius: 5px;
  border: 0.5px solid #1a598c;
  background-color: #1a598c;
  color: #fff;
}
</style>
