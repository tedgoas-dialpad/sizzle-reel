<template>
  <aside class="left-sidebar">
    <nav class="sidebar-nav">
      <div
        v-for="item in navItems"
        :key="item.label"
        class="sidebar-nav-item"
        :class="{ 'sidebar-nav-item--active': item.active }"
      >
        <div class="sidebar-nav-item-left">
          <svg class="sidebar-nav-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <template v-if="item.icon === 'inbox'">
              <path d="M3 4h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" stroke="currentColor" stroke-width="1.5" fill="none"/>
              <path d="M2 12h5l1 2h4l1-2h5" stroke="currentColor" stroke-width="1.5" fill="none"/>
            </template>
            <template v-else-if="item.icon === 'launchpad'">
              <rect x="2" y="3" width="7" height="6" rx="1" stroke="currentColor" stroke-width="1.5" fill="none"/>
              <rect x="11" y="3" width="7" height="6" rx="1" stroke="currentColor" stroke-width="1.5" fill="none"/>
              <rect x="2" y="11" width="7" height="6" rx="1" stroke="currentColor" stroke-width="1.5" fill="none"/>
              <rect x="11" y="11" width="7" height="6" rx="1" stroke="currentColor" stroke-width="1.5" fill="none"/>
            </template>
            <template v-else-if="item.icon === 'contacts'">
              <circle cx="10" cy="7" r="3.5" stroke="currentColor" stroke-width="1.5" fill="none"/>
              <path d="M3 18c0-3.5 3-6 7-6s7 2.5 7 6" stroke="currentColor" stroke-width="1.5" fill="none"/>
            </template>
            <template v-else-if="item.icon === 'channels'">
              <path d="M7 2l-2 16M15 2l-2 16M3 7h16M2 13h16" stroke="currentColor" stroke-width="1.5" fill="none"/>
            </template>
            <template v-else-if="item.icon === 'threads'">
              <path d="M3 4h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8l-4 3v-3H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" stroke="currentColor" stroke-width="1.5" fill="none"/>
              <path d="M6 8h8M6 11h5" stroke="currentColor" stroke-width="1.5" fill="none"/>
            </template>
          </svg>
          <span class="d-body-small">{{ item.label }}</span>
          <span v-if="item.tag" class="sidebar-nav-tag">{{ item.tag }}</span>
        </div>
        <span v-if="item.badge" class="sidebar-nav-badge">{{ item.badge }}</span>
      </div>
    </nav>
    <div class="sidebar-sections">
      <SidebarSection
        v-for="(section, idx) in sidebarSections"
        :key="idx"
        :title="section.title"
        :items="section.items"
        :default-open="section.defaultOpen"
        :status-label="section.statusLabel"
        :footer-link="section.footerLink"
      />
    </div>
  </aside>
</template>

<script setup>
import SidebarSection from './SidebarSection.vue'
import { navItems, sidebarSections } from '../data/mockData.js'
</script>

<style scoped>
.left-sidebar {
  display: flex;
  flex-direction: column;
  background: var(--dt-color-surface-primary);
  border-right: 1px solid var(--dt-color-border-default);
  overflow-y: auto;
  height: 100%;
}

.sidebar-nav {
  padding: 8px;
  display: flex;
  flex-direction: column;
}

.sidebar-nav-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 8px;
  border-radius: 8px;
  cursor: pointer;
  min-height: 36px;
}

.sidebar-nav-item:hover {
  background: var(--dt-color-surface-secondary);
}

.sidebar-nav-item--active {
  background: var(--dt-color-surface-moderate);
}

.sidebar-nav-item-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.sidebar-nav-icon {
  color: var(--dt-color-foreground-secondary);
  flex-shrink: 0;
}

.sidebar-nav-tag {
  background: #4CAF50;
  color: white;
  font-size: 10px;
  font-weight: 700;
  padding: 1px 6px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.sidebar-nav-badge {
  background: var(--dt-color-surface-bold);
  color: white;
  font-size: 11px;
  font-weight: 600;
  padding: 1px 6px;
  border-radius: 10px;
  min-width: 20px;
  text-align: center;
}

.sidebar-sections {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 8px;
}
</style>
