<template>
  <div class="photo-container">
    <div class="control" v-show="editable">
      <div class="remove-button" @click.stop="updatePhoto(null)" v-if="photo">
        <i class="fa fa-close"></i>
      </div>
    </div>

    <!--圖片-->
    <img :src="photo" v-if="photo">

    <!--功能-->
    <div class="action" v-if="!photo" v-show="editable">

      <!--加入連結-->
      <a @click="addLink"
        @keydown.prevent
        :title="'configure.link_help'| trans">
        <i class="fa fa-link"></i>
      </a>

      <!--加入圖片-->
      <label :title="'configure.photo_help'| trans">
        <i class="fa fa-image"></i>
        <input type="file">
      </label>
    </div>
  </div>
</template>

<script>
import LinkForm from 'Components/Recaptcha/Dialog/Link.vue'
export default {
  props: {
    photo: {
      default: () => null,
    },
    index: {
      type: Number,
    },
  },
  data() {
    return {
      $FileBrowser: null,
      width: 600,
      editable: true,
    }
  },
  beforeDestroy() {
    this.$root.$off('exportStart')
    this.$root.$off('exportEnd')
  },
  created() {
    this.$root.$on('exportStart', () => this.editable = false)
    this.$root.$on('exportEnd', () => this.editable = true)
  },
  mounted() {
    this.setupHeight()
    this.setupFileBrowser()
    $(window).resize(() => {
      this.setupHeight()
    })
  },
  methods: {
    setupPhotoSize() {
      const self = this
      let image = new Image()
      image.src = this.photo
      image.onload = function() {
        let el = $(self.$el).find('img')
        if(this.width > this.height) {
          el.css({ width: 'auto', height: '100%' })
          return
        }

        el.css({ width: '100%', height: 'auto' })
      }
    },
    setupHeight() {
      const width = $(this.$el).width()
      $(this.$el).height(width)
    },
    setupFileBrowser() {
      this.$FileBrowser = null

      this.$nextTick(() => {
        this.$FileBrowser = $(this.$el).find('input[type="file"]')
        this.$FileBrowser.val('')
        this.$FileBrowser.change((event) => {
          this.handleFile(event.target.files)
        })
      })
    },
    handleFile(files) {
      if(!(files instanceof FileList)) return
      if(!(files[0] instanceof File)) return
      let file = files[0]

      let reader = new FileReader()
      const self = this
      reader.onload = ((file) => {
        return (event) => {
          self.createImagePreview(event.target.result)
        }
      })(file)
      reader.readAsDataURL(file)
    },
    createImagePreview(url) {
      let img  = document.createElement('img')
      img.src = url
      img.onload = () => {
        const width = Math.min(this.width, img.width)
        const height = img.height * (width / img.width)
        let canvas = document.createElement('canvas')
        let ctx = canvas.getContext('2d')
        canvas.width = width
        canvas.height = height
        ctx.drawImage(img, 0, 0, width, height)
        const result = canvas.toDataURL('image/png')
        this.updatePhoto(result)
      }
    },
    addLink() {
      this.$dialog({
        size: 'sm',
        title: trans('configure.link_help'),
        component: LinkForm,
        accept: {
          commitOnEnter: true,
          label: trans('action.accept'),
          callback: this.onAddLink,
        },
        dismiss: {
          commitOnEsc: true,
          label: trans('action.dismiss'),
        },
      })
    },
    onAddLink(data) {
      this.updatePhoto(data)
    },
    updatePhoto(data) {
      this.$emit('updatePhoto', {
        index: this.index,
        data,
      })
    },
  },
  watch: {
    photo() {
      this.setupFileBrowser()
      this.setupPhotoSize()
    },
  },
}
</script>

<style lang="sass" type="text/sass" scoped>
@import 'assets/color.sass'
$size: 150px
.photo-container
  display: inline-block
  margin: 2px
  width: calc(33.33% - 4px)
  border: 1px $light-gray solid
  position: relative
  overflow: hidden
  text-align: center
  .control
    position: absolute
    top: 0
    right: 0
    &>*
      display: inline-block
      padding: 3px
      color: $white
      width: 20px
      height: 20px
      cursor: pointer
      font-size: 12px
      text-align: center
    .remove-button
      background-color: $red
  img
    width: 100%
  .action
    position: absolute
    top: calc(50% - 10px)
    text-align: center
    width: 100%
    &>*
      color: $light-gray
      cursor: pointer
      margin: 0 10px
      transition: all 0.7s ease
      position: relative
      &:hover
        color: $blue
        transition: all 0.7s ease
      input[type="file"]
        position: absolute
        top: 0
        left: 0
        pointer-events: none
        opacity: 0
        width: 0
        height: 0
</style>