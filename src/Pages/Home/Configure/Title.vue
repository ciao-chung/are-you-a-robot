<template>
  <div class="form">
    <label>{{'configure.title'| trans}}</label>
    <textarea class="form-control" v-model="title"></textarea>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      default: null,
    },
  },
  data() {
    return {
      title: null,
    }
  },
  created() {
    this.title = this.value
  },
  watch: {
    title() {
      this.$emit('input', this.title)
    }
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>