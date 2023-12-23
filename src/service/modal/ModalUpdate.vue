<template>
  <!-- modal update thiet bi-->
  <div class="modal fade" id="modalupdate" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- title modal -->
        <div class="modal-header">
          <h4 class="modal-title" id="exampleModalLabel">Cập nhật hồ sơ thiết bị</h4>
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
                    v-model="deviceData.value.CategoryType"
                    class="input-text-device"
                    placeholder="* Loại thiết bị"
                  />
                </div>
                <div class="v-messages__message">Ví dụ: Máy tính để bản, Máy in, Ghế, ...</div>
              </div>
              <!-- <div class="col-12 col-lg-6">
                <div class="v-field__inputs">
                  <input
                    type="number"
                  
                    class="input-text-device"
                    placeholder="* Số lượng"
                  />
                </div>
              </div> -->
            </div>

            <div class="row">
              <div class="col-12 col-lg-8 mt-3">
                <div class="row gx-4 gy-3">
                  <div class="text-body-2">Thông tin thiết bị</div>
                  <div class="col-12 col-md-6">
                    <div class="v-input-col6-left">
                      <input
                        type="text"
                        class="input-content-device"
                        v-model="deviceData.value.DeviceName"
                        placeholder="* Tên thiết bị"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="v-input-col6-left">
                      <input
                        type="text"
                        v-model="deviceData.value.DeviceValue"
                        class="input-content-device"
                        placeholder="* Giá trị"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="v-input-col6-left">
                      <input
                        type="text"
                        v-model="deviceData.value.DeviceCode"
                        class="input-content-device"
                        placeholder="* Mã thiết bị"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="v-input-col6-left">
                      <input
                        type="text"
                        v-model="deviceData.value.ReferenceCode"
                        class="input-content-device"
                        placeholder="* Mã tham chiếu"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="v-input-col6-left">
                      <input
                        type="text"
                        v-model="deviceData.value.Serial"
                        class="input-content-device"
                        placeholder="* Mã Serial"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="v-input-col6-left">
                      <input
                        type="text"
                        v-model="deviceData.value.Model"
                        class="input-content-device"
                        placeholder="* Mã model"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="v-input-col6-left">
                      <select class="input-content-device" v-model="deviceData.value.Type">
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
                      <select class="input-content-device" v-model="deviceData.value.ImportStatus">
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
                        v-model="deviceData.value.Origin"
                        class="input-content-device"
                        placeholder="* Xuất xứ"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="v-input-col6-left">
                      <input
                        type="text"
                        v-model="deviceData.value.Manufacturer"
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
                      v-model="deviceData.value.TimeImport"
                      class="v-field__inputname"
                      placeholder="* Thời gian nhập"
                      :config="datetimeOption"
                    ></flat-pickr>
                  </div>

                  <div class="v-field__input">
                    <flat-pickr
                      v-model="deviceData.value.TimeStart"
                      class="v-field__inputname"
                      placeholder="* Bắt đầu sử dụng"
                      :config="datetimeOption"
                    ></flat-pickr>
                  </div>

                  <div class="v-field__input">
                    <flat-pickr
                      v-model="deviceData.value.TimeEnd"
                      class="v-field__inputname"
                      placeholder="Dự kiến sử dụng đến"
                      :config="datetimeOption"
                    ></flat-pickr>
                  </div>

                  <div class="v-field__input">
                    <flat-pickr
                      v-model="deviceData.value.Warranty"
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
                  v-model="deviceData.value.Note"
                  class="v-field__inputtext"
                  placeholder="Mô tả"
                ></textarea>
              </div>

              <div class="col-12 col-md-6 col-lg-4" style="height: fit-content">
                <div class="text-body-2 mt-3 mb-2" id="fileStatus">Tệp đính kèm</div>
                <div class="v-field__input">
                  <div class="v-input__prepend">
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
                    <label :for="inputId" @click="openFilePicker">
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
            </div>
          </form>
        </div>

        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            style="background-color: #e7f2fb; color: #1a598c"
            data-bs-dismiss="modal"
          >
            ĐẶT LẠI
          </button>
          <button
            @click="updateDeviceInfo"
            type="button"
            style="background-color: #1a598c"
            class="btn btn-primary"
            data-bs-dismiss="modal"
          >
            CẬP NHẬT HỒ SƠ THIẾT BỊ
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- ket thuc modal -->
</template>

<script setup>
import { ref, defineProps, watch } from 'vue'
import 'flatpickr/dist/flatpickr.css'
import datetimePicker from 'vue-flatpickr-component'
const inputId = ref('fileInput')
const openFilePicker = () => {
  document.getElementById(inputId.value).click()
}
const handleFileChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    alert('Đã chọn ảnh: ' + file.name)
  }
}
const flatPickr = datetimePicker
const datetimeOption = {
  enableTime: true,
  dateFormat: 'Y-m-d H:i:S'
}

const datetimeOptions = {
  enableTime: true,
  dateFormat: 'Y-m-d H:i:S',
  mode: 'range'
}

const props = defineProps({
  itemDeviceUpdate: {
    type: Object,
    required: true
  }
})
console.log(props)
const deviceData = ref({
  value: {
    CategoryType: props.itemDeviceUpdate?.Type || '',
    DeviceName: props.itemDeviceUpdate?.DeviceName || '',
    DeviceValue: props.itemDeviceUpdate?.DeviceValue || '',
    DeviceCode: props.itemDeviceUpdate?.DeviceCode || '',
    ReferenceCode: props.itemDeviceUpdate?.ReferenceCode || '',
    Serial: props.itemDeviceUpdate?.Serial || '',
    Model: props.itemDeviceUpdate?.Model || '',
    Type: props.itemDeviceUpdate?.Type || '',
    ImportStatus: props.itemDeviceUpdate?.ImportStatus || '',
    Origin: props.itemDeviceUpdate?.Origin || '',
    Manufacturer: props.itemDeviceUpdate?.Manufacturer || '',
    TimeImport: props.itemDeviceUpdate?.TimeImport || '',
    TimeStart: props.itemDeviceUpdate?.TimeStart || '',
    TimeEnd: props.itemDeviceUpdate?.TimeEnd || '',
    Warranty: props.itemDeviceUpdate?.Warranty || '',
    Note: props.itemDeviceUpdate?.Note || ''
  }
})
watch(deviceData, (newData, oldData) => {
  if (JSON.stringify(newData) !== JSON.stringify(oldData)) {
    callUpdateApi(newData)
  }
})
const callUpdateApi = (data) => {
  fetch('https://icpc1hn.work/QLTSAPI/Device/UpdateDeviceInfo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data)
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}
</script>
<style>
@import '../../assets/css/content-create-update.css';
</style>
