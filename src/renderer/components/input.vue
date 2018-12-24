<template>
  <div class="input">
    <input @change="change($event)" :class="sizeType" type="text">
  </div>
</template>

<script>
export default {
  props: {
    /** fill or auto */
    sizeType: {
      type: String,
      default: "auto"
    },
    change: {
      type: Function,
      default: () => {}
    }
  }
};
</script>

<style>
.fill {
  width: 100% !important;
}

.auto {
  width: fit-content !important;
}

.input input {
  height: 30px;
  border: none;
  outline: none;
  border-radius: 1000px;
  padding: 0 10px;
  font-size: 16px;
}
</style>
