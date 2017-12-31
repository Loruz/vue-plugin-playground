<template>
  <div id="app">
    <div class="menu">
      <h2 class="menu__title">Components</h2>
      <router-link to="select-demo" class="menu__link">Select</router-link>
      <router-link to="tabs-demo" class="menu__link">Tabs</router-link>
    </div>
    <div class="demo">
      <div class="demo__inner">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style scoped lang="scss">
  .menu {
    width: 300px;
    position: absolute;
    left: 0;
    border: 1px solid #7f8c8d;
    height: 100vh;
    &__title {
      padding: 10px 30px;
    }
    &__link {
      display: block;
      padding: 10px 30px;
      border-bottom: none;
      color: #7f8c8d;
      background: 0 0;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      position: relative;
      text-decoration: none;
      transition: background .3s;
      &:hover {
        background: #fafafa;
      }
    }
  }
  .demo {
    left: 300px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    overflow-y: auto;
    &__inner {
      padding: 40px;
      height: 100%;
      overflow-y: auto;
    }
  }
</style>
