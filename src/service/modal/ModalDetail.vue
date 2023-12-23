<template>
  <!-- modal hien thi chi tiet thiet bi -->
  <div class="modal fade" id="modaldetail" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- title modal -->
        <div class="modal-header">
          <h4 class="modal-title" id="exampleModalLabel">Thông tin thiết bị</h4>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <!-- end title modal -->

        <div class="v-card-text">
          <div class="row row-md-reverse">
            <div class="col-12 col-md-8">
              <div class="text-body-2 mb-2">Tên thiết bị: {{ itemDeviceDetail.DeviceName }}</div>
              <div class="text-body-2 mb-2">Trạng thái: {{ itemDeviceDetail.Status }}</div>
              <div class="text-body-2 mb-2">Mã: {{ itemDeviceDetail.DeviceCode }}</div>
              <div class="text-body-2 mb-2">Mã tham chiếu:</div>
              <div class="text-body-2 mb-2">Loại: {{ itemDeviceDetail.Type }}</div>
              <div class="text-body-2 mb-2">Giá trị: {{ itemDeviceDetail.DeviceValue }}đ</div>
              <div class="text-body-2 mb-2">Nhà cung cấp: {{ itemDeviceDetail.Manufacturer }}</div>
              <div class="text-body-2 mb-2">Xuất xứ: {{ itemDeviceDetail.Origin }}</div>
              <hr class="v-divider v-theme--light mb-3" />
              <div class="text-body-2 mb-2">
                Phòng ban sử dụng: {{ itemDeviceDetail.OrganizationID }}
              </div>
              <div class="text-body-2 mb-2">Người tạo: {{ itemDeviceDetail.CreaterName }}</div>
              <div class="text-body-2 mb-2">Thời gian tạo: {{ itemDeviceDetail.TimeCreate }}</div>
              <div class="text-body-2 mb-2">Thời gian nhập: {{ itemDeviceDetail.TimeImport }}</div>
              <div class="text-body-2 mb-2">
                Thời gian sử dụng: {{ itemDeviceDetail.TimeStart }}
              </div>
              <div class="text-body-2 mb-2">
                Dự kiến sử dụng đến: {{ itemDeviceDetail.TimeEnd }}
              </div>

              <div class="text-body-2 mb-2">** Ghi chú: {{ itemDeviceDetail.Note }}</div>
            </div>
            <div class="col-4 justify-center">
              <qrcode-vue class="canvas-qrcode" :value="itemDeviceDetail.QrCode" />
            </div>
          </div>
          <div class="mt-2 mb-4 row">
            <div class="v-slide-group__container">
              <div class="v-slide-group__content" style="transform: translateX(0px)">
                <button
                  type="button"
                  class="v-btn-bd"
                  aria-selected="true"
                  value="three"
                  @click="showMaintenanceTable"
                >
                  <span class="v-btn__content"> Bảo dưỡng </span>
                </button>
                <button
                  type="button"
                  class="v-btn-bd"
                  aria-selected="false"
                  value="two"
                  @click="showHistoryTable"
                >
                  <span class="v-btn__content"> Lịch sử </span>
                </button>
              </div>
              <hr class="v-divider v-theme--light mb-3" style="margin-right: 20px" />
            </div>
            <div v-if="showMaintenance">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Bắt đầu</th>
                    <th scope="col">Kết thúc</th>
                    <th scope="col">Mô tả</th>
                    <th scope="col">Loại</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-if="showHistory">
              <table class="table">
                <thead>
                  <tr>
                    <th>Mã phiếu</th>
                    <th>Thời gian tạo</th>
                    <th>Mô tả</th>
                    <th>Loại</th>
                    <th>Trạng thái</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ket thuc modal -->
</template>

<script setup>
import QrcodeVue from 'qrcode.vue'
import { defineProps, ref } from 'vue'

const showMaintenance = ref(true)
const showHistory = ref(false)
const showMaintenanceTable = () => {
  showMaintenance.value = true
  showHistory.value = false
}
const showHistoryTable = () => {
  showMaintenance.value = false
  showHistory.value = true
}

defineProps({
  itemDeviceDetail: {
    type: Object,
    required: true
  }
})
</script>
<style>
@import '../../assets/css/content-create-update.css';
</style>
