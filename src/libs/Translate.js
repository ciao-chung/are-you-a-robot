import Vue from 'vue'
import i18nData from 'static/i18n.js'
import { defaultLang } from 'static/config.js'
import localStorage from 'libs/Storage/LocalStorage.js'

class Lang {
  constructor() {
    this.lang = localStorage.get('lang')
    if(this.lang == null) {
      this._setDefaultLang()
    }

    const locale = navigator.language || navigator.userLanguage
    localStorage.set('locale', locale.replace('-', '_'))

    window.trans = (string) => {
      return this.trans(string)
    }

    Vue.filter('trans', (string) => {
      return this.trans(string)
    })
  }

  trans(string) {
    if(!string) return string

    if(!i18nData[this.lang]) {
      return string
    }

    if(i18nData[this.lang][string]) return i18nData[this.lang][string]

    return string
  }

  _setDefaultLang() {
    localStorage.set('lang', config.defaultLang)
    this.lang = config.defaultLang
  }

  getLang() {
    return this.lang
  }
}

export default function() {
  return new Lang()
}