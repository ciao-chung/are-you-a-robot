<template>
  <div class="configure">
    <h1>{{'site.title'| trans}}</h1>
    <h5 class="help">{{'configure.help'| trans}}</h5>

    <div class="form">
      <label>{{'configure.title'| trans}}</label>
      <textarea class="form-control" v-model="data.title"></textarea>
    </div>

    <div class="action">
      <button theme @click="exportStart">
        <i class="fa fa-download"></i>
        <span>{{'action.export'| trans}}</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        title: trans('configure.title.default')
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
    },
    exportStart() {
      this.$root.$emit('exportStart')
      setTimeout(() => this.$root.$emit('exportEnd'), 1000)
    },
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
@import 'assets/color.sass'
.configure
  color: $text-color
  .form
    margin: 20px 0
    padding: 20px 0
    textarea
      min-height: 150px
</style>