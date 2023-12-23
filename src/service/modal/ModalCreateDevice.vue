<template>
  <!-- modal create add thiet bi-->
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
                  <input
                    type="text"
                    v-model="req.DeviceInfo.CategoryType"
                    class="input-text-device"
                    placeholder="* Loại thiết bị"
                  />
                </div>
                <div class="v-messages__message">Ví dụ: Máy tính để bản, Máy in, Ghế, ...</div>
              </div>
              <div class="col-12 col-lg-6">
                <div class="v-field__inputs">
                  <input
                    type="number"
                    v-model="req.DeviceInfo.Quantity"
                    class="input-text-device"
                    placeholder="* Số lượng"
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12 col-lg-8 mt-3">
                <div class="row gx-4 gy-3">
                  <div class="text-body-2">Thông tin thiết bị</div>
                  <div class="col-12 col-md-6">
                    <input
                      type="text"
                      v-model="req.DeviceInfo.DeviceName"
                      class="input-content-device"
                      placeholder="* Tên thiết bị"
                    />
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="v-input-col6-left">
                      <input
                        type="text"
                        v-model="req.DeviceInfo.DeviceValue"
                        class="input-content-device"
                        placeholder="* Giá trị"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="v-input-col6-left">
                      <input
                        type="text"
                        v-model="req.DeviceInfo.DeviceCode"
                        class="input-content-device"
                        placeholder="* Mã thiết bị"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="v-input-col6-left">
                      <input
                        type="text"
                        v-model="req.DeviceInfo.ReferenceCode"
                        class="input-content-device"
                        placeholder="* Mã tham chiếu"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="v-input-col6-left">
                      <input
                        type="text"
                        v-model="req.DeviceInfo.Serial"
                        class="input-content-device"
                        placeholder="* Mã Serial"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="v-input-col6-left">
                      <input
                        type="text"
                        v-model="req.DeviceInfo.Model"
                        class="input-content-device"
                        placeholder="* Mã model"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="v-input-col6-left">
                      <select v-model="req.DeviceInfo.Type" class="input-content-device">
                        <option value="" disabled selected>* Danh mục</option>
                        <option value="Thiết bị văn phòng">Thiết bị văn phòng</option>
                        <option value="Thiết bị quản lý">Thiết bị quản lý</option>
                        <option value="Nhà cửa, vật kiến trúc">Nhà cửa, vật kiến trúc</option>
                        <option value="Phương tiện vận tải">Phương tiện vận tải</option>
                        <option value="Tài sản vô hình">Tài sản vô hình</option>
                        <option value="Thiết bị sản xuất">Thiết bị sản xuất</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="v-input-col6-left">
                      <select v-model="req.DeviceInfo.ImportStatus" class="input-content-device">
                        <option value="" disabled selected>* Tình trạng</option>
                        <option value="1">Mới</option>
                        <option value="2">Đã sử dụng</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="v-input-col6-left">
                      <input
                        type="text"
                        v-model="req.DeviceInfo.Origin"
                        class="input-content-device"
                        placeholder="* Xuất xứ"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="v-input-col6-left">
                      <input
                        type="text"
                        v-model="req.DeviceInfo.Manufacturer"
                        class="input-content-device"
                        placeholder="* Nhà cung cấp"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4 mt-3">
                <div class="row gx-4 gy-3">
                  <div class="text-body-2">Thời gian sử dụng</div>
                  <div class="v-field__input">
                    <flat-pickr
                      v-model="req.DeviceInfo.TimeImport"
                      class="v-field__inputname"
                      placeholder="Thời gian nhập"
                      :config="datetimeOption"
                    ></flat-pickr>
                  </div>

                  <div class="v-field__input">
                    <flat-pickr
                      v-model="req.DeviceInfo.TimeStart"
                      class="v-field__inputname"
                      placeholder="Bắt đầu sử dụng"
                      :config="datetimeOption"
                    ></flat-pickr>
                  </div>

                  <div class="v-field__input">
                    <flat-pickr
                      v-model="req.DeviceInfo.TimeEnd"
                      class="v-field__inputname"
                      placeholder="Dự kiến sử dụng đến"
                      :config="datetimeOption"
                    ></flat-pickr>
                  </div>

                  <div class="v-field__input">
                    <flat-pickr
                      v-model="req.DeviceInfo.Warranty"
                      class="v-field__inputname"
                      placeholder="Thời gian bảo hành"
                      :config="datetimeOptions"
                    ></flat-pickr>
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-6 col-lg-8 note">
                <div class="text-body-2">Ghi chú/Mô tả thiết bị</div>
                <textarea
                  class="v-field__inputtext"
                  v-model="req.DeviceInfo.Note"
                  placeholder="Mô tả"
                ></textarea>
              </div>

              <div class="col-12 col-md-6 col-lg-4" style="height: fit-content">
                <div class="text-body-1 mt-3 mb-2" id="fileStatus">Tệp đính kèm</div>
                <div class="v-input__prepend">
                  <label :for="inputId" @click="openFilePicker" style="display: flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      class="v-icon"
                      width="1.8em"
                      height="1.8em"
                      viewBox="0 0 25 25"
                    >
                      <path
                        fill="currentColor"
                        d="M16.5 6v11.5a4 4 0 0 1-4 4a4 4 0 0 1-4-4V5A2.5 2.5 0 0 1 11 2.5A2.5 2.5 0 0 1 13.5 5v10.5a1 1 0 0 1-1 1a1 1 0 0 1-1-1V6H10v9.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5V5a4 4 0 0 0-4-4a4 4 0 0 0-4 4v12.5a5.5 5.5 0 0 0 5.5 5.5a5.5 5.5 0 0 0 5.5-5.5V6h-1.5Z"
                      ></path>
                    </svg>

                    <p>File đính kèm</p>
                  </label>
                  <input
                    :id="inputId"
                    type="file"
                    accept="image/*"
                    style="display: none; border: 1px"
                    @change="handleFileChange"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Bỏ qua</button>
          <button
            @click="addDeviceInfo"
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
          >
            Thêm hồ sơ thiết bị
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- ket thuc modal -->
</template>

<script setup>
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { v4 as uuidv4 } from 'uuid'
import dayjs from 'dayjs'
import 'flatpickr/dist/flatpickr.css'
import datetimePicker from 'vue-flatpickr-component'

import { ref, watch, onMounted } from'vue'

const storedData = JSON.parse(localStorage.getItem('username'))

const deviceInfo = ref({
  DeviceId: null,
  CategoryType: '',
  DeviceCode: '',
  DeviceName: '',
  DeviceParameterLst: [],
  DeviceValue: null,
  DeviceValueCurrent: null,
  ImportStatus: 1,
  Manufacturer: '',
  Model: '',
  Note: '',
  OrganizationID: '274',
  Origin: '',
  PackageLst: [],
  QRCode: '',
  Quantity: null,
  QuantityPackage: 0,
  ReferenceCode: '',
  Serial: '',
  TimeCreate: dayjs().format('YYYY-MM-DD HH:mm:ss'),
  TimeEnd: null,
  TimeImport: null,
  TimeStart: null,
  CreaterId: storedData.UserInfo.UserName,
  Type: '',
  Unit: '',
  UnitPackage: '',
  Warranty: [],
  WarrantyEnd: null,
  WarrantyStart: null,
  Token: '',
  UserName: storedData.UserInfo.UserName
})

const req = ref({
  DeviceInfo: deviceInfo.value,
  Token: storedData.Token,
  UserName: storedData.UserInfo.UserName
})

const datetimeOption = {
  enableTime: true,
  dateFormat: 'Y-m-d H:i:S'
}

const datetimeOptions = {
  enableTime: true,
  dateFormat: 'Y-m-d H:i:S',
  mode: 'range'
}

watch(deviceInfo.value.DeviceValue, (newDeviceValue) => {
  deviceInfo.value.DeviceValueCurrent = newDeviceValue
})

onMounted(() => {
  console.log(deviceInfo.value.CreaterName)
})

const addDeviceInfo = async () => {
  req.value.DeviceInfo.QRCode = uuidv4()
  try {
    const response = await axios.post(
      'https://icpc1hn.work/QLTSAPI/Device/CreateDeviceInfov2',
      req.value,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${req.value.Token}`,
          Username: req.value.UserName
        }
      }
    )

    location.reload();
    console.log('API response:', response.data)
    if (response.status === 200 && response.data) {
      alert('Thêm thiết bị thành công')
      this.$router.push('/deviceList')
    } else {
      alert('Failed to add device:', response.data)
    }
  } catch (error) {
    console.error('API error:', error.response)
  }
}

const flatPickr = datetimePicker
</script>

<style>
@import '../../assets/css/content-create-update.css';
</style>
