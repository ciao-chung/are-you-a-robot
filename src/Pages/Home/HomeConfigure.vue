<template>
  <div class="form">
    <label>{{'configure.title'| trans}}</label>
    <textarea class="form-control" v-model="data.title"></textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        title: 'Select all images with ...'
      },
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.sync()
    },
    sync() {
      this.$store.dispatch('recaptcha.set.data', this.data)
    }
  },
  computed: {
    recaptcha() {
      return this.$store.getters.recaptcha
    }
  },
  watch: {
    data: {
      deep: true,
      handler() {
        this.sync()
      }
    },
    recaptcha: {
      deep: true,
      handler() {
        if(JSON.stringify(this.recaptcha) == JSON.stringify(this.data)) return
        this.data = this.recaptcha
      }
    }
  },
}
</script>

<style lang="sass" type="text/sass" scoped>
.form
  textarea
    min-height: 150px
</style>