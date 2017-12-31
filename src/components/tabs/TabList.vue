<template>
  <div class="tab-component">
      <ul class="tab-list">
          <li class="tab-list__item" v-for="(tab, index) in tabs">

          </li>
      </ul>
    <slot></slot>
  </div>
</template>
<script>
  export default {
      data () {
        return {
          tabs: []
        }
      },
    methods: {

    },
    created () {
      this.tabs = this.$children
    },
    mounted () {
    }
  }
</script>
<style lang="scss" scoped>

</style>
