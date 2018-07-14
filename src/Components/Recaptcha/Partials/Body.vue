<template>
  <Draggable racaptha="body"
    v-if="photos"
    v-model="photos"
    :options="draggableOptions">

    <BodyPhoto
      ref="BodyPhoto"
      @updatePhoto="updatePhoto"
      v-for="photo, index in photos"
      :quantity="quantity"
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

      // 更新
      if(Array.isArray(this.photos)) {
        const originQuantity = this.photos.length
        photos = $.extend(true, [], this.photos)
        const diff = Math.abs(this.quantity-originQuantity)

        // 數量增加
        if(originQuantity < this.quantity) {
          for(let i=1; i<=diff; i++)
            photos.push(null)
        }

        //數量減少
        else {
          photos.splice(this.quantity, diff)
        }
      }

      // 全新
      else {
        for(let i=1; i<=this.quantity; i++)
          photos.push(null)
      }

      this.photos = photos

      this.$nextTick(() => {
        if(!this.$refs) return
        if(!Array.isArray(this.$refs.BodyPhoto)) return

        this.$refs.BodyPhoto.forEach(component => {
          if(component.setupHeight instanceof Function) component.setupHeight()
        })
      })
    },
    updatePhoto(result) {
      this.$set(this.photos, result.index, result.data)
    }
  },
  computed: {
    recaptcha() {
      return this.$store.getters.recaptcha
    },
    quantity() {
      return this.recaptcha.quantity
    },
  },
  watch: {
    quantity() {
      this.init()
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