import Vue from 'vue'
import i18nData from 'static/i18n.js'
import config  from 'static/config.js'
import localStorage from 'libs/Storage/LocalStorage.js'

class Lang {
  constructor() {
    this.lang = localStorage.get('lang')
    this.locale = (navigator.language || navigator.userLanguage).replace('-', '_')
    localStorage.set('locale', this.locale)

    // 有找到localStorage的語系而且有翻譯
    if(this.lang && this.hasI18nData(this.lang)) {
      this.setLang(this.lang)
      this.setupMethod()
      return
    }

    // 找不到i18n內的翻譯就改成預設語系
    if(this.hasI18nData(this.locale)) {
      this.lang = this.locale
      this.setLang(this.locale)
      this.setupMethod()
      return
    }

    // 前面的條件都不成立, 直接設定成預設
    this._setDefaultLang()
  }

  setupMethod() {
    window.trans = (string) => {
      return this.trans(string)
    }

    Vue.filter('trans', (string) => {
      return this.trans(string)
    })
  }

  hasI18nData(lang) {
    return !!config.languages[lang]
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

  setLang(lang) {
    localStorage.set('lang', lang)
  }

  getLang() {
    return this.lang
  }
}

export default function() {
  return new Lang()
}