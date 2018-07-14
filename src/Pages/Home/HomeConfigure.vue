<template>
  <div class="configure">
    <h1>{{'site.title'| trans}}</h1>
    <h5 class="help">{{'configure.help'| trans}}</h5>

    <div class="row">
      <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <ComponentQuantity v-model="data.quantity"/>
      </div>

      <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
        <ComponentLanguage/>
      </div>
    </div>

    <ComponentTitle v-model="data.title"/>

    <div class="action">
      <button theme @click="exportStart" :disabled="onProgress">
        <i class="fa fa-refresh fa-spin" v-if="onProgress"></i>
        <i class="fa fa-download" v-if="!onProgress"></i>
        <span>{{'action.export'| trans}}</span>
      </button>
    </div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'
import downloadjs from 'downloadjs'
import ComponentQuantity from 'Pages/Home/Configure/Quantity.vue'
import ComponentLanguage from 'Pages/Home/Configure/Language.vue'
import ComponentTitle from 'Pages/Home/Configure/Title.vue'
export default {
  data() {
    return {
      data: {
        title: trans('configure.title.default'),
        quantity: 9,
      },
      onProgress: false,
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
      this.onProgress = true
      const element = $('div[racaptha="root"]')[0]
      const canvas = await html2canvas(element, { logging: false })
      const base64Url = canvas.toDataURL('image/jpeg', 1.0)
      downloadjs(base64Url, `${trans('site.title')}.jpg`, 'image/jpeg')
      this.$nextTick(() => {
        this.$root.$emit('exportEnd')
      })

      setTimeout(() => this.onProgress = false, 700)
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
    ComponentQuantity,
    ComponentLanguage,
    ComponentTitle,
  },
}
</script>

<style lang="sass" type="text/sass">
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