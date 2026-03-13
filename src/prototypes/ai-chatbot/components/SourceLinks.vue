<template>
  <div class="source-links" :class="{ 'is-new': isNew }">
    <button class="source-toggle" @click="isOpen = !isOpen">
      <span class="source-label">Source</span>
      <svg
        class="source-chevron"
        :class="{ 'is-open': isOpen }"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path d="M4 5.5l3 3 3-3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <Transition name="expand">
      <div v-if="isOpen" class="source-list">
        <a
          v-for="link in links"
          :key="link.label"
          class="source-link-row"
          :href="link.url"
          target="_blank"
          rel="noopener"
        >
          <svg class="source-link-icon" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M5.5 3H3.5a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V9.5M8 2.5h3.5V6M6 8l5.5-5.5" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="source-link-text">{{ link.label }}</span>
          <button class="source-copy-btn" aria-label="Copy link" @click.prevent.stop>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <rect x="3.5" y="3.5" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1"/>
              <path d="M8.5 3.5V2.5a1 1 0 00-1-1h-5a1 1 0 00-1 1v5a1 1 0 001 1h1" stroke="currentColor" stroke-width="1"/>
            </svg>
          </button>
        </a>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  links: {
    type: Array,
    required: true,
  },
  isNew: {
    type: Boolean,
    default: false,
  },
})

const isOpen = ref(false)
</script>

<style scoped>
.source-links {
  margin-top: 10px;
  border: 1px solid #E8E8E8;
  border-radius: 10px;
  overflow: hidden;
}

.source-links.is-new {
  animation: fadeSlideUp 0.35s ease;
}

.source-toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px 12px;
  border: none;
  background: #FAFAFA;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  color: #535353;
}

.source-toggle:hover {
  background: #F5F5F5;
}

.source-chevron {
  transition: transform 0.2s ease;
  color: #9A9A9A;
}

.source-chevron.is-open {
  transform: rotate(180deg);
}

.source-list {
  display: flex;
  flex-direction: column;
}

.source-link-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-top: 1px solid #E8E8E8;
  text-decoration: none;
  color: #3A3A3A;
  font-size: 12px;
  transition: background-color 0.15s;
}

.source-link-row:hover {
  background: #FAFAFA;
}

.source-link-icon {
  flex-shrink: 0;
  color: #9A9A9A;
}

.source-link-text {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.source-copy-btn {
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9A9A9A;
  flex-shrink: 0;
  opacity: 0;
  transition: opacity 0.15s, color 0.15s;
}

.source-link-row:hover .source-copy-btn {
  opacity: 1;
}

.source-copy-btn:hover {
  color: #535353;
}

/* Expand transition */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.2s ease;
  overflow: hidden;
}
.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
}
.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 200px;
}

@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
