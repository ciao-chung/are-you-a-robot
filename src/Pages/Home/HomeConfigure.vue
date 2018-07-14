<template>
  <div class="configure">
    <h1>{{'site.title'| trans}}</h1>
    <h5 class="help">{{'configure.help'| trans}}</h5>

    <div class="form" quantity>
      <label>{{'configure.quantity'| trans}}</label>
      <VueSlider
        :data="[1, 4, 9, 16]"
        v-model="data.quantity"
        ></VueSlider>
    </div>

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
import html2canvas from 'html2canvas'
import downloadjs from 'downloadjs'
import VueSlider from 'vue-slider-component'
export default {
  data() {
    return {
      data: {
        title: trans('configure.title.default'),
        quantity: 9,
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

      this.$nextTick(this.exportAction)
    },
    async exportAction() {
      const element = $('div[racaptha="root"]')[0]
      const canvas = await html2canvas(element, { logging: false })
      const base64Url = canvas.toDataURL('image/jpeg', 1.0)
      downloadjs(base64Url, `${trans('site.title')}.jpg`, 'image/jpeg')

      this.$nextTick(() => {
        this.$root.$emit('exportEnd')
      })
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
  components: {
    VueSlider,
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
    &[quantity]
      max-width: 300px
</style>