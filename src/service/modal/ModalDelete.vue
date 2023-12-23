<template>
  <!-- modal delete thiet bi-->
  <div class="modal fade" id="modaldelete" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- title modal -->
        <div class="modal-header">
          <h3 class="modal-title" id="exampleModalLabel">Xóa thiết bị?</h3>
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
              <div class="text-body-2 mb-2">Tên thiết bị: {{ itemDeviceProp.DeviceName }}</div>
              <div class="text-body-2 mb-2">Mã thiết bị: {{ itemDeviceProp.DeviceCode }}</div>
              <div class="text-body-2 mb-2">Loại thiết bị: {{ itemDeviceProp.Type }}</div>
              <div class="text-body-2 mb-2">Ghi chú: {{ itemDeviceProp.Note }}</div>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">BỎ QUA</button>
            <button
              type="button"
              class="btn btn-danger"
              data-bs-dismiss="modal"
              @click="deleteDeviced"
            >
              XÓA
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ket thuc modal -->
</template>

<script setup>
import axios from 'axios'
import { defineProps } from 'vue'

const Props = defineProps({
  itemDeviceProp: {
    type: Object,
    required: true
  }
})
console.log(Props)
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
    throw error
  }
}

const deleteDeviced = async () => {
  try {
    const storedData = JSON.parse(localStorage.getItem('username'))
    const userName = storedData.UserInfo.UserName
    const token = storedData.Token

    const DeviceId = Props.itemDeviceProp.DeviceId
    const data = {
      UserName: userName,
      Token: token,
      DeviceId: DeviceId
    }

    const responseData = await fetchData(
      'https://icpc1hn.work/QLTSAPI/Device/RemoveDeviceInfo',
      data
    )
    location.reload();
    console.log(responseData)
  } catch (error) {
    console.error(error)
  }
}
</script>
<style>
@import '../../assets/css/content-create-update.css';
</style>
