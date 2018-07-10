<template>
  <div class="row" page="home">
    <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12" partial>
      <ComponentRecaptcha></ComponentRecaptcha>
    </div>

    <div class="col-lg-9 col-md-9 col-sm-8 col-xs-12" partial>
      <ComponentConfigure></ComponentConfigure>
    </div>
  </div>
</template>

<script>
import ComponentRecaptcha from 'Components/Recaptcha/Recaptcha.vue'
import ComponentConfigure from 'Pages/Home/HomeConfigure.vue'
export default {
  components: {
    ComponentRecaptcha,
    ComponentConfigure,
  }
}
</script>

<style lang="sass" type="text/sass" scoped>
div[page="home"]
  margin: 0
  div[partial]
    padding: 10px
</style>