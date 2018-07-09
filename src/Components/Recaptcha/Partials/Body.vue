<template>
  <div racaptha="body">
    <div class="photo-container" v-for="i in 9">
      <div class="control">
        <div class="remove-button" @click.stop>
          <i class="fa fa-close"></i>
        </div>
      </div>
      <img src="/static/logo.png">
    </div>
  </div>
</template>

<script>
export default {}
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
        width: 15px
        height: 15px
        cursor: pointer
        font-size: 12px
        text-align: center
      .remove-button
        background-color: $red
  img
    width: 100%
</style>