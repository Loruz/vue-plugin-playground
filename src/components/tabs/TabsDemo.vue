<template>
<div class="tabs-demo">
  <h1>Custom Vue tabs</h1>
  <TabList>
      <Tab name="super">
       <h3>Some super text</h3>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquid assumenda atque consequatur dolores facere illo,
        inventore iure laboriosam libero nesciunt non nostrum omnis
        provident quis quisquam reprehenderit repudiandae vel voluptates?
      </Tab>
      <Tab name="duper" :active="true" >
        <h3>Just duper text</h3>
      </Tab>
    <Tab name="extra" >
    <h3>Extra text</h3>
    </Tab>
  </TabList>

</div>
</template>
<script>
  import Tab from './Tab.vue'
  import TabList from './TabList.vue'
  export default {
    data() {
      return {
      }
    },
    components: {
      Tab,
      TabList
    },
    mounted() {
    }
  }
</script>
<style scoped lang="scss">
</style>
