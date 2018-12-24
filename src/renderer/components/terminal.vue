<template>
  <div class="terminal">
    <p class="info" v-for="info in infos" :key="info.key">
      <strong>$ {{info}}</strong>
    </p>
  </div>
</template>

<script>
import { data } from "../config/form";

export default {
  data: () => {
    return {
      infos: data.infos
    };
  }
};
</script>

<style>
.terminal {
  width: 100%;
  height: 100%;
  background: #000;
  padding: 5px;
  overflow: scroll;
}

.info {
  color: green;
}
</style>
