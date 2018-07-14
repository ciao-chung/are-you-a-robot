<template>
  <div class="form" quantity>
    <label>{{'configure.quantity'| trans}}</label>
    <VueSlider
      :data="[1, 4, 9, 16]"
      v-model="quantity"
    ></VueSlider>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
export default {
  props: {
    value: {
      type: Number,
    },
  },
  data() {
    return {
      quantity: 0,
    }
  },
  created() {
    this.quantity = this.value
  },
  watch: {
    quantity() {
      this.$emit('input', this.quantity)
    }
  },
  components: {
    VueSlider,
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>