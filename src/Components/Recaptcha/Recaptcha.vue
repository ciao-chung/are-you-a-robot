<template>
  <div racaptha="root" v-if="recaptcha">
    <PartialHeader></PartialHeader>
    <PartialBody></PartialBody>
    <PartialFooter></PartialFooter>
  </div>
</template>

<script>
import PartialHeader from 'Components/Recaptcha/Partials/Header.vue'
import PartialBody from 'Components/Recaptcha/Partials/Body.vue'
import PartialFooter from 'Components/Recaptcha/Partials/Footer.vue'
export default {
  components: {
    PartialHeader,
    PartialBody,
    PartialFooter,
  },
  computed: {
    recaptcha() {
      return this.$store.getters.recaptcha
    },
  },
}
</script>

<style lang="sass" type="text/sass" scoped>
@import 'assets/color.sass'
div[racaptha="root"]
  max-width: 100%
  width: 400px
  height: 580px
  border: 1px $light-gray solid
  padding: 10px
</style>