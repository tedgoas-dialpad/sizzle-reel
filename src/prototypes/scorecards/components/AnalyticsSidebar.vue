<template>
  <aside class="analytics-sidebar">
    <!-- Company dropdown -->
    <div class="analytics-sidebar-dropdown">
      <div class="analytics-sidebar-select">
        My Company
        <span class="analytics-sidebar-arrow">&#8645;</span>
      </div>
    </div>

    <!-- Nav items -->
    <div class="analytics-sidebar-nav">
      <div
        v-for="item in navItems"
        :key="item.label"
        class="analytics-sidebar-item"
        :class="{
          'analytics-sidebar-item--active': item.active,
          'analytics-sidebar-item--indented': item.indent === 1,
        }"
      >
        {{ item.label }}
      </div>
    </div>
  </aside>
</template>

<script setup>
import { sidebarNavItems } from '../data/analyticsData.js'

const navItems = sidebarNavItems
</script>

<style scoped>
.analytics-sidebar {
  width: 201px;
  background: #f9f9f9;
  border-right: 1px solid rgba(28, 28, 28, 0.11);
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.analytics-sidebar-dropdown {
  padding: 12px 12px;
  border-bottom: 1px solid rgba(28, 28, 28, 0.11);
}

.analytics-sidebar-select {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  background: rgba(28, 28, 28, 0.02);
  border: 1px solid rgba(28, 28, 28, 0.17);
  border-radius: 8px;
  font-size: 15px;
  color: #3a3a3a;
}

.analytics-sidebar-arrow {
  font-size: 14px;
  color: #808080;
}

.analytics-sidebar-nav {
  display: flex;
  flex-direction: column;
  padding-top: 8px;
}

.analytics-sidebar-item {
  padding: 8px 16px;
  font-size: 15px;
  color: #1c1c1c;
  cursor: default;
  line-height: 1.4;
  border-radius: 4px;
}

.analytics-sidebar-item--active {
  background: rgba(124, 82, 255, 0.1);
  color: #7C52FF;
  font-weight: 500;
}

.analytics-sidebar-item--indented {
  padding-left: 32px;
  font-size: 15px;
}
</style>
