<template>
    <div
      class="tab-content"
      v-show="isVisible"
      :id="hash"
      role="tab"
    >
      <slot></slot>
    </div>
</template>
<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      id: {
        type: String,
        default: null
      },
      isDisabled: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        isActive: false,
        isVisible: true
      }
    },
    computed: {
      hash () {
        if (this.isDisabled) {
          return '#'
        }
        return this.id ? `#${this.id}` : `#${this.name.toLowerCase()}`
      }
    }
  }
</script>
<style lang="scss" scoped>

</style>
