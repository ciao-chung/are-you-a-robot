<template>
  <div racaptha="root">

    <div racaptha="header">
      Select all images with ...
    </div>

    <div racaptha="body">
      <div class="photo-container" v-for="i in 9">
        <img src="/static/logo.png">
      </div>
    </div>

    <div racaptha="footer">
      <i class="fa fa-refresh"></i>
      <i class="fa fa-headphones"></i>
      <i class="fa fa-info-circle"></i>
      <button>
        Verify
      </button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass" type="text/sass" scoped>
@import 'assets/color.sass'
div[racaptha="root"]
  width: 400px
  height: 580px
  border: 1px $light-gray solid
  padding: 10px
  div[racaptha="header"]
    background-color: $blue
    color: $white
    padding: 10px 20px
    font-size: 14px
  div[racaptha="body"]
    margin: 5px auto
    .photo-container
      margin: 2px
      width: calc(33% - 6px)
      display: inline-block
      border: 1px $light-gray solid
    img
      width: 100%
  div[racaptha="footer"]
    i.fa
      color: darken($light-gray, 10%)
</style>