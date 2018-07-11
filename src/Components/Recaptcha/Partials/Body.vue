<template>
  <Draggable racaptha="body"
    v-if="photos"
    v-model="photos"
    :options="draggableOptions">

    <BodyPhoto
      v-for="photo, index in photos"
      :key="'photo'+index"
      :photo="photo"
      :index="index">
    </BodyPhoto>
  </Draggable>
</template>

<script>
import Draggable from 'vuedraggable'
import BodyPhoto from 'Components/Recaptcha/Partials/BodyPhoto.vue'
export default {
  data() {
    return {
      draggableOptions: {
        handle: '.photo-container',
      },
      photos: null,
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      let photos = []
      for(let i=1; i<=9; i++)
        photos.push(null)
      this.photos = photos
    }
  },
  components: {
    Draggable,
    BodyPhoto,
  },
}
</script>

<style lang="sass" type="text/sass" scoped>
@import 'assets/color.sass'
div[racaptha="body"]
  margin: 5px auto
  .photo-container
    margin: 2px
    width: calc(33% - 6px)
    display: inline-block
    border: 1px $light-gray solid
    position: relative
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
</style>