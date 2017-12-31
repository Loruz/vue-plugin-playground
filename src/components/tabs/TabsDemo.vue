<template>
<div class="tabs-demo">
  <h1>Custom Vue tabs</h1>
  <TabList>
      <Tab>Some text</Tab>
  </TabList>

</div>
</template>
<script>
  import Tab from './Tab.vue'
  import TabList from './TabList.vue'
  export default {
    components: {
      Tab,
      TabList
    }
  }
</script>
<style scoped lang="scss">
</style>
