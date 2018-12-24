<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "webapi-monitor"
};
</script>

<style>
html,
body {
  margin: 0;
  height: 100%;
  min-width: 570px;
}

* {
  box-sizing: border-box;
}

#app {
  height: 100%;
}
</style>
