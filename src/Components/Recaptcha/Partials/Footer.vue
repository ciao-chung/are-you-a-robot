<template>
  <div racaptha="footer">
    <div class="left">
      <div class="icon">
        <i class="fa fa-refresh"></i>
        <i class="fa fa-headphones"></i>
        <i class="fa fa-info-circle"></i>
      </div>

      <div class="report">
        {{'recaptcha.report'| trans}}
      </div>
    </div>

    <div class="right">
      <button theme>
        {{'recaptcha.verify'| trans}}
      </button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass" type="text/sass" scoped>
@import 'assets/color.sass'
div[racaptha="footer"]
  display: flex
  justify-content: space-between
  align-items: stretch
  &>div
    margin: 10px
  .left
    color: darken($light-gray, 10%)
    .icon
      vertical-align: middle
      i.fa
        margin: 0 10px
        font-size: 18px
    .report
      font-size: 12px
      padding: 10px 5px
</style>