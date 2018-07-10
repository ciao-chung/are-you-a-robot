class cookie {
  constructor() {
    this.cookie = {}
    this.storageItemName = 'cookieStorage'
    this.init()
  }

  init() {
    if(document.cookie.trim() == '') return

    const _cookies = decodeURI(document.cookie).split(`${this.storageItemName}=`)[1]
    try {
      this.cookie = JSON.parse(_cookies)
    } catch (e) {
      this.cookie = {}
    }
  }

  all() {
    return this.cookie
  }

  get(property, json = true) {

    if(document.cookie.trim() == '') return null
    let result = this.cookie[property]
    if(!result) return null
    return result
  }

  set(property, value) {
    this.cookie[property] = value
    this._write()
  }

  delete(property) {
    delete this.cookie[property]
    this._write()
  }

  _write() {
    document.cookie = `${this.storageItemName}=${encodeURI(JSON.stringify(this.cookie))}`
  }
}

export default () => {
  return new cookie()
}