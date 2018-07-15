<template>
  <div class="row" page="home">
    <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12" partial>
      <ComponentRecaptcha></ComponentRecaptcha>
    </div>

    <div class="col-lg-8 col-md-8 col-sm-7 col-xs-12" partial>
      <ComponentConfigure></ComponentConfigure>
    </div>

    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" partial>
      <ComponentFooter></ComponentFooter>
    </div>
  </div>
</template>

<script>
import ComponentRecaptcha from 'Components/Recaptcha/Recaptcha.vue'
import ComponentConfigure from 'Pages/Home/HomeConfigure.vue'
import ComponentFooter from 'Pages/Home/HomeFooter.vue'
export default {
  components: {
    ComponentRecaptcha,
    ComponentConfigure,
    ComponentFooter,
  }
}
</script>

<style lang="sass" type="text/sass" scoped>
div[page="home"]
  margin: 0
  div[partial]
    padding: 10px
</style>