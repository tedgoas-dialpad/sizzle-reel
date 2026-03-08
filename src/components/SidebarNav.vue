<template>
  <nav class="sidebar-nav">
    <div
      v-for="item in navItems"
      :key="item.label"
      class="sidebar-nav-item"
      :class="{ 'sidebar-nav-item--active': item.label === activeItem }"
    >
      <component :is="item.icon" size="400" class="sidebar-nav-icon" />
      <span class="sidebar-nav-label">{{ item.label }}</span>
      <span v-if="item.label === 'Contact Centers'" class="sidebar-nav-status">
        <span class="sidebar-nav-status-dot"></span>
        Available
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M2.5 4L5 6.5L7.5 4" stroke="currentColor" stroke-width="1.25"/>
        </svg>
      </span>
    </div>
  </nav>
</template>

<script setup>
import DtIconInbox from '@dialpad/dialtone-icons/vue3/inbox'
import DtIconLayoutTemplate from '@dialpad/dialtone-icons/vue3/layout-template'
import DtIconContacts from '@dialpad/dialtone-icons/vue3/contacts'
import DtIconHeadphones from '@dialpad/dialtone-icons/vue3/headphones'
import DtIconHash from '@dialpad/dialtone-icons/vue3/hash'
import DtIconThread from '@dialpad/dialtone-icons/vue3/thread'

defineProps({
  activeItem: {
    type: String,
    default: '',
  },
})

const navItems = [
  { label: 'Inbox', icon: DtIconInbox },
  { label: 'Launchpad', icon: DtIconLayoutTemplate },
  { label: 'Contacts', icon: DtIconContacts },
  { label: 'Contact Centers', icon: DtIconHeadphones },
  { label: 'Channels', icon: DtIconHash },
  { label: 'Threads', icon: DtIconThread },
]
</script>

<style scoped>
.sidebar-nav {
  padding: 8px 8px 16px;
  display: flex;
  flex-direction: column;
}

.sidebar-nav-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  border-radius: 28px;
  cursor: pointer;
  height: 36px;
}

.sidebar-nav-item:hover {
  background: rgba(28, 28, 28, 0.08);
}

.sidebar-nav-item--active {
  background: rgba(28, 28, 28, 0.15);
}

.sidebar-nav-icon {
  color: #3A3A3A;
  flex-shrink: 0;
}

.sidebar-nav-label {
  font-size: 15px;
  color: #3A3A3A;
  line-height: 1;
}

.sidebar-nav-status {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 4px;
  color: #4CAF50;
  font-size: 12px;
  line-height: 1;
}

.sidebar-nav-status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #4CAF50;
}
</style>
