<template>
    <div
      class="tab-content"
      :hidden="!isActive"
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
