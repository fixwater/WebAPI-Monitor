<template>
  <div class="item">
    <span class="label-text">{{labelText}}:</span>
    <Input :change="handleInputChange" class="info-input" type="text" sizeType="fill"/>
  </div>
</template>

<script>
import Input from "./input.vue";
import { mapActions } from "vuex";
import { data } from "../config/form";

export default {
  props: ["labelText", "inputSizeType"],
  components: {
    Input
  },
  methods: {
    handleInputChange(e) {
      data[this.$props.labelText] = e.target.value;
    }
  }
};
</script>

<style>
.item {
  width: 100%;
  padding: 5px 0;
}

.label-text {
}

.info-input {
}
</style>
