<template>
  <Draggable racaptha="body"
    v-if="photos"
    v-model="photos"
    :options="draggableOptions">

    <BodyPhoto
      @updatePhoto="updatePhoto"
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
    },
    updatePhoto(result) {
      this.$set(this.photos, result.index, result.data)
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
</style>