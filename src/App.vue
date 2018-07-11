<template>
  <div id="app">
    <router-view></router-view>
    <VueDialog/>
  </div>
</template>

<script>
import 'bootstrap/dist/js/bootstrap.js'
import Vue from 'vue'
import CiaoVueDialog from 'ciao-vue-dialog'
Vue.use(CiaoVueDialog)
export default {}
</script>

<style src="bootstrap/dist/css/bootstrap.min.css"></style>
<style src="font-awesome/css/font-awesome.min.css"></style>
<style src="ciao-vue-dialog/dist/ciao-vue-dialog.css"></style>
<style lang="sass" type="text/sass">
@import 'assets/base.sass'
</style>