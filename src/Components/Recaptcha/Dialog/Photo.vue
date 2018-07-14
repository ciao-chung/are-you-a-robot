<template>
  <div v-if="meta" photo-crop-zone>
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
  },
}
</script>

<style src="cropperjs/dist/cropper.min.css"></style>
<style lang="sass" type="text/sass" scoped>
div[photo-crop-zone]
  text-align: center
  img, .cropper-container
    width: 450px
    max-width: 100%
</style>