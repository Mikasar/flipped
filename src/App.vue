<template>
  <div id="app">
    <sider />
    <router-view class="app-container" />
  </div>
</template>

<script>
import Sider from '@/components/common/Sider'
export default {
  name: 'App',
  components: {
    sider: Sider
  },
  created() {
    document.getElementById('app').style.fontFamily = localStorage.getItem('lang') !== 'en' ? 'SYR' : 'MAXIL'
  }
}
</script>

<style>
@import './assets/font/font.css';
/* @import './mixin.scss'; */
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  display: flex;
  height: 100vh;
  padding: 0;
}

.app-container {
  flex: 1;
}
</style>
