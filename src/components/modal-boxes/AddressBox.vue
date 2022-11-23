<template>
  <div class="modal fade" id="address-box">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
          ></button>
          <h4 class="modal-title fw-700">تغییر آدرس</h4>
        </div>
        <div class="modal-body">
          <div class="location-picker">
            <input
              type="text"
              class="form-control"
              placeholder="آدرس جدید وارد نمایید"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddressBox",
};
</script>

<style scoped></style>
