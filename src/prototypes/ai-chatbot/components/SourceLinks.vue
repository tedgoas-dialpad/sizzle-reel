<template>
  <div class="source-links" :class="{ 'is-new': isNew }">
    <button class="source-toggle" @click="isOpen = !isOpen">
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
      <span class="source-label">Source</span>
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

const isOpen = ref(true)
</script>

<style scoped>
.source-links {
  margin-top: 10px;
}

.source-links.is-new {
  animation: fadeSlideUp 0.35s ease;
}

.source-toggle {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 24px;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: 400;
  color: #535353;
}

.source-toggle:hover {
  color: #3A3A3A;
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
  gap: 4px;
  margin-left: 8px;
  margin-top: 2px;
  padding: 4px;
  border: 1px solid rgba(28, 28, 28, 0.11);
  border-radius: 8px;
}

.source-link-row {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 24px;
  padding: 2px 2px 2px 6px;
  text-decoration: none;
  color: #535353;
  font-size: 12px;
  border-radius: 4px;
  transition: background-color 0.15s;
}

.source-link-row:hover {
  background: #FAFAFA;
}

.source-link-text {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.source-copy-btn {
  width: 20px;
  height: 20px;
  border: none;
  background: none;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9A9A9A;
  flex-shrink: 0;
  transition: color 0.15s;
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
