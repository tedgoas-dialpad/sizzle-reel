<template>
  <aside class="left-sidebar">
    <SidebarNav activeItem="Launchpad" />
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
import SidebarNav from '@/components/SidebarNav.vue'
import SidebarSection from './SidebarSection.vue'
import { sidebarSections } from '../data/mockData.js'
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

.sidebar-sections {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 8px;
}
</style>
