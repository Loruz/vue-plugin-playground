<template>
  <div class="tab-component">
      <ul class="tab-list">
          <li class="tab-list__item"
              v-for="(tab, index) in tabs"
              :key="index"
              role="presentation"
              :class="{ 'tab-list__item--active': tab.isActive, 'tab-list__item--disabled': tab.isDisabled }"
              v-show="tab.isVisible"
          >
            <a
              v-html="tab.header"
              :aria-controls="tab.hash"
              :aria-selected="tab.isActive"
              :href="tab.hash"
              :class="tab.classList"
              @click="selectTab(tab.hash, $event)"
              class="tab-list__link"
              role="tab"
            >
            </a>
          </li>
      </ul>
    <slot></slot>
  </div>
</template>
<script>
  export default {
      data () {
        return {
          tabs: [],
          activeTabHash: '',
        }
      },
    methods: {
      findTab(hash) {
        return this.tabs.find(tab => tab.hash === hash);
      },
      selectTab (selectedHash, event) {
        if (event) {
          event.preventDefault()
        }
        const selectedTab = this.findTab(selectedHash);
        if (!selectedTab) {
          return;
        }
        if (selectedTab.isDisabled) {
          return;
        }
        this.tabs.forEach(tab => {
          tab.isActive = (tab.hash === selectedTab.hash);
        });
        this.$emit('changed', { tab: selectedTab });
        this.activeTabHash = selectedTab.hash;
      }
    },
    created () {
      this.tabs = this.$children
    },
    mounted () {
      if (this.tabs.length) {
        let activeTab = this.tabs.find(tab => tab.active)
        if (activeTab) {
          this.selectTab(activeTab.hash);
        } else {
          this.selectTab(this.tabs[0].hash);
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
      .tab-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        transform: translateY(1px);
        &__item {
          border-radius: 3px 3px 0 0;
          margin: 0 10px 0 0;
          background: #38817a;
          &--active {
            background: #476269;
          }
        }
        &__link {
          color: #f1f1f1;
          text-decoration: none;
          padding: 10px;
          display: block;
        }
      }
</style>
