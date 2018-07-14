<template>
  <div class="form">
    <label>
      <i class="fa fa-language"></i>
      <span>Language</span>
    </label>
    <select class="form-control"
      v-if="languages"
      @change="changLanuage"
      v-model="currentLanguage">
      <option :value="language" v-for="label, language in languages">
        {{label}}
      </option>
    </select>
  </div>
</template>

<script>
import config  from 'static/config.js'
import localStorage from 'libs/Storage/LocalStorage.js'
export default {
  data() {
    return {
      currentLanguage: null,
      languages: null,
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.languages = config.languages
      this.currentLanguage = localStorage.get('lang')
    },
    changLanuage() {
      localStorage.set('lang', this.currentLanguage)
      window.location.reload()
    }
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>