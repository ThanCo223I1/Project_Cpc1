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

    <!-- Hien thi danh sach thiet bi -->
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
          <tr v-for="(device, index) in paginatedItems" :key="index">
            <td>{{ device.DeviceName }}</td>
            <td>{{ device.DeviceCode }}</td>
            <td>{{ device.Type }}</td>
            <td>{{ device.CreaterName }}</td>
            <td>{{}}</td>
            <td>{{device.Note}}</td>
            <td>
              <div class="d-flex">
                <!-- nut xem chi tiet -->
                <button type="button" class="btn-modal-show" @click="detailDevice(device)">
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
                      data-bs-toggle="modal"
                      data-bs-target="#modaldetail"
                    >
                      <path
                        fill="currentColor"
                        d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2v6Z"
                      ></path>
                    </svg>
                  </span>
                  <span class="tooltip">Xem thông tin</span>
                </button>
                <!-- nut update device -->
                <button type="button" class="btn-modal-show" style="color: #1a589c; border: 0px">
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
                      data-bs-toggle="modal"
                      data-bs-target="#modalupdate"
                    >
                      <path
                        fill="currentColor"
                        d="M5 3c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7H5V5h7V3H5m12.78 1a.69.69 0 0 0-.48.2l-1.22 1.21l2.5 2.5L19.8 6.7c.26-.26.26-.7 0-.95L18.25 4.2c-.13-.13-.3-.2-.47-.2m-2.41 2.12L8 13.5V16h2.5l7.37-7.38l-2.5-2.5Z"
                      ></path>
                    </svg>
                  </span>
                  <span class="tooltip">Cập nhật thông tin</span>
                </button>
                <!-- nut xoa thiet bi -->
                <button
                  type="button"
                  class="btn-modal-show"
                  @click="deleteDevice(device)"
                  style="color: rgb(242, 76, 61); border: 0px"
                >
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
                      data-bs-toggle="modal"
                      data-bs-target="#modaldelete"
                    >
                      <path
                        fill="currentColor"
                        d="m20.37 8.91l-1 1.73l-12.13-7l1-1.73l3.04 1.75l1.36-.37l4.33 2.5l.37 1.37l3.03 1.75M6 19V7h5.07L18 11v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2m2 0h8v-6.8L10.46 9H8v10Z"
                      ></path>
                    </svg>
                  </span>
                  <span class="tooltip">Xóa thiết bị</span>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="row pb-2">
        <div class="row container-input">
          <div class="col-12 col-lg-2 cont-total">
            <div class="ms-3 total-item">
              <strong>Tổng: {{ Total }} Item</strong>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-8">
            <div class="container containers-pages">
              <ul class="pagination">
                <li class="page-item" :class="{ disabled: currentPage === 1 }">
                  <a class="page-link" href="#" @click="goToPage(currentPage - 1)">Previous</a>
                </li>

                <li
                  v-for="page in visiblePages"
                  :key="page"
                  class="page-item"
                  :class="{ active: currentPage === page }"
                >
                  <a class="page-link" href="#" @click="goToPage(page)">{{ page }}</a>
                </li>

                <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                  <a class="page-link" href="#" @click="goToPage(currentPage + 1)">Next</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-16 col-lg-2">
            <div class="v-field__input">
              <div class="me-3">Mỗi trang</div>
              <div class="v-select__selection">
                <select v-model="itemsPerPage" @change="fetchDataFromApi">
                  <option v-for="option in itemsPerPageOptions" :key="option" :value="option">
                    {{ option }} Item
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- show modal -->
  <ModalCreateDevice />
  <ModalDelete :itemDeviceProp="itemDevice"/>
  <ModalDetail :itemDeviceDetail="itemDevice" />
  <ModalUpdate :itemDeviceUpdate="itemDevice"/>
</template>

<script>
import { ref, onMounted, computed, watch } from 'vue'
import axios from 'axios'
import ModalDelete from './modal/ModalDelete.vue'
import ModalCreateDevice from './modal/ModalCreateDevice.vue'
import ModalDetail from './modal/ModalDetail.vue'
import ModalUpdate from './modal/ModalUpdate.vue'

export default {
  components: { ModalCreateDevice, ModalDelete, ModalDetail, ModalUpdate },

  setup() {
    const DeviceLst = ref([])
    const Total = ref()
    const currentPage = ref(1)
    const itemsPerPage = ref(10)
    const currentPage2 = ref(1)
    const itemsPerPage2 = ref(10)
    const itemsPerPageOptions = [10, 20, 30, 40, 50]

    const itemDevice = ref({})
    function deleteDevice(item) {
      itemDevice.value = item
    }
    function detailDevice(item) {
      itemDevice.value = item
    }

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
        const storedData = JSON.parse(localStorage.getItem('username'))
        let User = storedData.UserInfo.UserName
        let Token = storedData.Token
        const data = {
          UserName: User,
          Token: Token,
          OrganizationID: '274',
          DeviceGroup: '',
          TypeDevice: '',
          Search: '',
          RowNumber: itemsPerPage.value,
          PageNumber: currentPage.value
        }
        console.log(data)
        const responseData = await fetchData(
          'https://icpc1hn.work/QLTSAPI/Device/GetDeviceByCompany',
          data
        )
        console.log(responseData)
        Total.value = responseData.Total
        if (responseData && responseData.DeviceLst.length > 0) {
          DeviceLst.value = responseData.DeviceLst
          console.log(responseData.DeviceLst)
          console.log(DeviceLst.value)
        } else {
          console.error('No data received from the API.')
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    const totalPages = computed(() => Math.ceil(Total.value / itemsPerPage.value))

    const visiblePages = computed(() => {
      const pages = []
      const maxVisiblePages = 5

      if (totalPages.value <= maxVisiblePages) {
        for (let i = 1; i <= totalPages.value; i++) {
          pages.push(i)
        }
      } else {
        const buffer = Math.floor(maxVisiblePages / 2)

        if (currentPage.value <= buffer) {
          for (let i = 1; i <= maxVisiblePages; i++) {
            pages.push(i)
          }
        } else if (currentPage.value >= totalPages.value - buffer) {
          for (let i = totalPages.value - maxVisiblePages + 1; i <= totalPages.value; i++) {
            pages.push(i)
          }
        } else {
          for (let i = currentPage.value - buffer; i <= currentPage.value + buffer; i++) {
            pages.push(i)
          }
        }
      }

      return pages
    })

    const goToPage = (page) => {
      console.log(itemsPerPage.value)
      console.log(page)
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page
        itemsPerPage.value *= page

        fetchDataFromApi()
      }
    }

    const paginatedItems = computed(() => {
      console.log(Array.from(DeviceLst.value))
      const start = (currentPage2.value - 1) * itemsPerPage2.value
      const end = Math.min(start + itemsPerPage2.value, Array.from(DeviceLst.value).length)
      const remainingItems = Total.value - start
      console.log(start)
      console.log(end)
      console.log(Array.from(DeviceLst.value).slice(start, end))

      if (remainingItems <= itemsPerPage.value) {
        return Array.from(DeviceLst.value).slice(start)
      }

      return Array.from(DeviceLst.value).slice(start, end)
    })
    watch([itemsPerPage], () => {
      currentPage.value = 1
      fetchDataFromApi()
    })
    onMounted(() => {
      fetchDataFromApi()
    })

    return {
      DeviceLst,
      Total,
      currentPage,
      itemsPerPage,
      itemsPerPageOptions,
      totalPages,
      visiblePages,
      goToPage,
      fetchDataFromApi,
      paginatedItems,
      deleteDevice,
      itemDevice,
      detailDevice
    }
  }
}
</script>
<style scoped>
@import '../assets/css/content-create-update.css';
</style>
