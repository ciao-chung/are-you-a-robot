<template>
  <input type="text" class="form-control" v-model="link">
</template>

<script>
export default {
  props: {
    data: {
      default: null,
    }
  },
  data() {
    return {
      link: null,
    }
  },
  mounted() {
    $(this.$el).focus()
  },
  watch: {
    link() {
      this.$emit('updateData', this.link)
    },
    data() {
      this.link = this.data
    },
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>