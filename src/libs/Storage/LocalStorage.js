import cookieStorage from 'src/libs/Storage/Cookie.js'


class localStorage {
  constructor() {
    const _testProperty = Math.random()
    try {
      window.localStorage.setItem(_testProperty, _testProperty)
      window.localStorage.removeItem(_testProperty)
      this.supportedLocalStorage = true
    } catch (e) {
      this.supportedLocalStorage = false
      return
    }
  }

  all() {
    return window.localStorage
  }

  get(property) {
    try {
      let value = window.localStorage.getItem(property)
      if(typeof(value) != 'string') return null
      return JSON.parse(value)
    }
    catch(e) {
      return null
    }
  }

  set(property, value) {
    window.localStorage.setItem(property, JSON.stringify(value))
  }

  delete(property) {
    window.localStorage.removeItem(property)
  }
}

const generateStorage = () => {
  const _localStorage = new localStorage()
  if(_localStorage.supportedLocalStorage) return _localStorage
  return cookieStorage()
}

export default generateStorage()
