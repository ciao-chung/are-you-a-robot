<template>
  <div racaptha="header" v-html="title">

  </div>
</template>

<script>
export default {
  computed: {
    recaptcha() {
      return this.$store.getters.recaptcha
    },
    title() {
      let data = this.recaptcha.title
      if(typeof data != 'string') return ''
      return data.replace(/\n/g, '<br>')
    },
  },
}
</script>

<style lang="sass" type="text/sass" scoped>
@import 'assets/color.sass'
div[racaptha="header"]
  background-color: $blue
  color: $white
  padding: 10px 20px
  font-size: 14px
</style>