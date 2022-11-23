<template>
  <div class="modal fade" id="search-box" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
          ></button>
          <div class="search-box p-relative full-width">
            <input
              type="text"
              class="form-control border rounded shadow-sm"
              placeholder=" جستجو کنید ( پیتزا، کباب و ... )"
            />
          </div>
        </div>
        <!--        <div class="modal-body"></div>-->
      </div>
    </div>
  </div>
  <!-- Modal -->
</template>

<script>
export default {
  name: "SearchBox",
};
</script>

<style scoped></style>
