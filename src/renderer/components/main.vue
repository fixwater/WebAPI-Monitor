<template>
  <div class="container">
    <Control></Control>
    <Terminal></Terminal>
  </div>
</template>

<script>
import Control from "./control.vue";
import Terminal from "./terminal.vue";

export default {
  components: {
    Control,
    Terminal
  }
};
</script>

<style>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
