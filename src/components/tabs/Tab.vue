<template>
    <div
      class="tab-content"
      v-if="isActive"
      v-show="isVisible"
      :id="hash"
      role="tabpanel"
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
      },
      active: {
        type: Boolean,
        default: false
      },
      classes: {
        type: [String, Array],
        default: null
      }
    },
    data () {
      return {
        isActive: false,
        isVisible: true
      }
    },
    computed: {
      header () {
        return this.name
      },
      classList () {
        return this.classes
      },
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
  .tab-content {
    background: #476269;
    padding: 10px;
    color: #f1f1f1;
    border-top: 1px solid #f4e5c2;
  }
</style>
