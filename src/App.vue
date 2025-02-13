<template>
  <div id="app">
    <router-view />
    <dialog-view v-if="$store.state.app.dialog.active"></dialog-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
@import '@/assets/vendor/css/rtl/core.min.css';
@import '@/assets/vendor/css/rtl/theme-default.min.css';
@import '@/assets/vendor/css/rtl/sweetalert2.min.css';
@import '@/assets/vendor/css/rtl/theme-chalk.min.css';
</style>
