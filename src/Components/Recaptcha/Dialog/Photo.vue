<template>
  <div v-if="meta" photo-crop-zone>
    <div class="control">
      <button theme @click.stop="rotate(-15)" @keydown.prevent>
        <i class="fa fa-rotate-left"></i>
      </button>

      <button theme @click.stop="resetRotate()" @keydown.prevent>
        <i class="fa fa-refresh"></i>
      </button>

      <button theme @click.stop="rotate(15)" @keydown.prevent>
        <i class="fa fa-rotate-right"></i>
      </button>
    </div>
    <img :src="meta.photo">
  </div>
</template>

<script>
import Cropper from 'cropperjs'
export default {
  props: {
    data: {
      default: null,
    },
    meta: {
      default: null,
    },
  },
  data() {
    return {
      $photo: null,
      cropper: null,
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const vm = this
      this.$photo = $(this.$el).find('img')
      this.cropper = new Cropper(this.$photo[0], {
        aspectRatio: 1/1,
      })
      this.$emit('updateData', this.cropper)
    },
    resetRotate() {
      this.cropper.rotateTo(0)
    },
    rotate(degree) {
      this.cropper.rotate(degree)
    },
  },
}
</script>

<style src="cropperjs/dist/cropper.min.css"></style>
<style lang="sass" type="text/sass" scoped>
div[photo-crop-zone]
  text-align: center
  .control
    margin: 10px
    &>*
      margin: 0 10px
  img, .cropper-container
    width: 450px
    max-width: 100%
</style>