<template>
  <div racaptha="root">

    <div racaptha="header">
      Select all images with ...
    </div>

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

    <div racaptha="footer">
      <div class="icon">
        <i class="fa fa-refresh"></i>
        <i class="fa fa-headphones"></i>
        <i class="fa fa-info-circle"></i>
      </div>

      <div>
        <button>
          Verify
        </button>
      </div>
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
  div[racaptha="footer"]
    display: flex
    justify-content: space-between
    align-items: stretch
    &>div
      margin: 10px
    .icon
      vertical-align: middle
      i.fa
        margin: 0 10px
        font-size: 18px
        color: darken($light-gray, 10%)
</style>